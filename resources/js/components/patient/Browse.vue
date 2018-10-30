<style scoped>

</style>
<template>
    <div>
        <!-- Header -->
        <div class="header bg-gradient-primary pb-8 pt-5 pt-md-8">
            <div class="container-fluid">
                <div class="header-body">
                    
                </div>
            </div>
        </div>

        <!-- Page content -->
        <div class="container-fluid mt--7 mb-5">
            <div class="row">
                <div class="col-xl-12 mb-5 mb-xl-0">
                    <div class="card shadow">
                        <div class="card-header bg-transparent">
                            <ul class="list-inline">
                                <li class="list-inline-item col-md-4">
                                    <form action="">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">
                                                    <i class="fa fa-search"></i>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control form-control-success" 
                                                placeholder="Search Patients">
                                        </div>
                                    </form>
                                </li>
                            </ul>
                        </div>
                        <div class="card-body">
                            <div v-if="patientsLoadStatus == 2" class="table-responsive">
                                <table class="table align-items-center table-striped">
                                    <thead class="thead-light">
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">DOB</th>
                                            <th scope="col">Last Visit</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(patient, index) in patients" v-bind:key="patient.id">
                                            <th scope="row">
                                                <div class="media align-items-center">
                                                    <div class="media-body">
                                                        <span class="mb-0 text-sm">
                                                            {{ index + 1}}
                                                        </span>
                                                    </div>
                                                </div>
                                            </th>
                                            <td>
                                                {{ patient.name }}
                                            </td>
                                            <td>
                                                {{ patient.birth_name }}
                                            </td>
                                            <td>
                                                {{ 'Not Available' }}
                                            </td>
                                            <td class="text-right">
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" 
                                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fas fa-ellipsis-v"></i>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                        <a class="dropdown-item" href="#">Check-In</a>
                                                        <router-link class="dropdown-item" :to="'/patient/view/'+patient.id">
                                                            View
                                                        </router-link>
                                                        <router-link class="dropdown-item" :to="'/patient/edit/'+patient.id">
                                                            Edit
                                                        </router-link>
                                                        <a @click="deletePatient(patient.id)" class="dropdown-item" href="#">
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <ul class="list-inline">
                                    <li class="list-inline-item col-md-4 small">
                                        showing {{ pagination.to }} of {{ pagination.total }} patients
                                    </li>
                                </ul>

                                <div id="pagination-btn">
                                    <nav aria-label="Page navigation">
                                        <ul class="pagination justify-content-end text-black">
                                            <li class="page-item" v-bind:class="[{disabled: !pagination.prev_page_url}]">
                                                <a @click="getPatients(pagination.prev_page_url)" class="page-link" tabindex="-1">
                                                    <i class="fa fa-arrow-left"></i>
                                                </a>
                                            </li>
                                            <li class="page-item" v-bind:class="[{disabled: !pagination.next_page_url}]">
                                                <a @click="getPatients(pagination.next_page_url)" class="page-link">
                                                    <i class="fa fa-arrow-right"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <clip-loader v-else class="text-left" :loading="true" 
                                    :color="'#5e72e4'"></clip-loader>
                        </div>
                    </div>

                    <!-- Action Button  -->
                    <div v-if="userLoadStatus == 2 && user != {}" id="action-btn">
                        <router-link class="btn bg-primary btn-icon btn-fab btn-lg btn-round" 
                            to="/patient/add">
                            <i class="fa fa-plus text-white"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { HELPERS } from '../../helpers.js';
    import ClipLoader from 'vue-spinner/src/ClipLoader.vue';

    export default {
        components: {
            ClipLoader
        },
        data() {
            return {

            };
        },
        computed: {
            user() {
                return this.$store.getters.getUser;
            },
            userLoadStatus() {
                return this.$store.getters.getUserLoadStatus;
            },
            patients() {
                return this.$store.getters.getPatients;
            },
            patientsLoadStatus() {
                return this.$store.getters.getPatientsLoadStatus;
            },
            pagination() {
                return this.$store.getters.getPatientPagination;
            },
            deletePatientLoadStatus() {
                return this.$store.getters.getDeletePatientLoadStatus;
            },
            deletePatientResult() {
                return this.$store.getters.getDeletePatientResult;
            }
        },
        watch: {
            deletePatientLoadStatus: function() {
                let vm = this;
                
                if(vm.deletePatientLoadStatus == 3 && vm.deletePatientResult.success == 0) {
                    vm.HF.showNotification(
                        'top', 
                        'center', 
                        vm.deletePatientResult.message, 
                        'danger'
                    );
                } else if(vm.deletePatientLoadStatus == 2 && vm.deletePatientResult.success == 1) {
                    //reload patients
                    this.$store.dispatch('loadPatients', {
                        url: null
                    });
                    
                    vm.HF.showNotification(
                        'top', 
                        'center', 
                        vm.deletePatientResult.message, 
                        'success'
                    );
                } 
            }
        },
        mounted() {

        },
        created() {
            this.$store.dispatch('getAuthUser');
            this.$store.dispatch('loadPatients', {
                url: null
            });
        },
        methods: {
            getPatients: function(url) {
                this.$store.dispatch('loadPatients', {
                    url: url
                });
            },
            deletePatient(data) {
                if(confirm("are you sure?")){
                    this.$store.dispatch('deletePatient', {
                        id: data
                    });
                }
            }
        }
    }
</script>