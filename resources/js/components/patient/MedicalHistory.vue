<style scoped>

</style>
<template>
    <div>
        <!-- buttons -->
        <button class="btn btn-primary mb-2">
            <i class="fa fa-plus"></i>
            Add
        </button>

        <!-- Medical Histories -->
        <div v-if="true" class="table-responsive">
            <table class="table align-items-center table-striped">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Remarks</th>
                        <th scope="col">LMP</th>
                        <th scope="col">EOD</th>
                        <th scope="col">Gravida</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(medicalHistory, index) in medicalHistories" v-bind:key="medicalHistory.id">
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
                            {{ medicalHistory.remarks }}
                        </td>
                        <td>
                            {{ medicalHistory.lmp }}
                        </td>
                        <td>
                            {{ medicalHistory.eod }}
                        </td>
                        <td>
                            {{ medicalHistory.gravida }}
                        </td>
                        <td class="text-right">
                            <div class="dropdown">
                                <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" 
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-ellipsis-v"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <a class="dropdown-item" href="#">Check-In</a>
                                    <router-link class="dropdown-item" :to="'/medicalHistory/view/'+medicalHistory.id">
                                        View
                                    </router-link>
                                    <router-link class="dropdown-item" :to="'/medicalHistory/edit/'+medicalHistory.id">
                                        Edit
                                    </router-link>
                                    <a @click="deleteMedicalHistory(medicalHistory.id)" class="dropdown-item" href="#">
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
                    showing {{ pagination.to }} of {{ pagination.total }} medicalHistories
                </li>
            </ul>

            <div id="pagination-btn">
                <nav aria-label="Page navigation">
                    <ul class="pagination justify-content-end text-black">
                        <li class="page-item" v-bind:class="[{disabled: !pagination.prev_page_url}]">
                            <a @click="getMedicalHistories(pagination.prev_page_url)" class="page-link" tabindex="-1">
                                <i class="fa fa-arrow-left"></i>
                            </a>
                        </li>
                        <li class="page-item" v-bind:class="[{disabled: !pagination.next_page_url}]">
                            <a @click="getMedicalHistories(pagination.next_page_url)" class="page-link">
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
                search_query: ''
            };
        },
        computed: {
            user() {
                return this.$store.getters.getUser;
            },
            userLoadStatus() {
                return this.$store.getters.getUserLoadStatus;
            },
            medicalHistories() {
                return this.$store.getters.getMedicalHistories;
            },
            medicalHistoriesLoadStatus() {
                return this.$store.getters.getMedicalHistoriesLoadStatus;
            },
            pagination() {
                return this.$store.getters.getMhPagination;
            },
            deleteMedicalHistoryLoadStatus() {
                return this.$store.getters.getDeleteMedicalHistoryLoadStatus;
            },
            deleteMedicalHistoryResult() {
                return this.$store.getters.getDeleteMedicalHistoryResult;
            }
        },
        watch: {
            deleteMedicalHistoryLoadStatus: function() {
                let vm = this;
                
                if(vm.deleteMedicalHistoryLoadStatus == 3 && vm.deleteMedicalHistoryResult.success == 0) {
                    vm.HF.showNotification(
                        'top', 
                        'center', 
                        vm.deleteMedicalHistoryResult.message, 
                        'danger'
                    );
                } else if(vm.deleteMedicalHistoryLoadStatus == 2 && vm.deleteMedicalHistoryResult.success == 1) {
                    //reload medicalHistories
                    this.$store.dispatch('loadMedicalHistories', {
                        url: null
                    });
                    
                    vm.HF.showNotification(
                        'top', 
                        'center', 
                        vm.deleteMedicalHistoryResult.message, 
                        'success'
                    );
                } 
            }
        },
        mounted() {

        },
        created() {
            this.$store.dispatch('loadMedicalHistories', {
                url: null
            });
        },
        methods: {
            getMedicalHistories: function(url) {
                this.$store.dispatch('loadMedicalHistories', {
                    url: url
                });
            },
            searchMedicalHistories: function(query) {
                if(query) {
                    this.$store.dispatch('searchMedicalHistories', {
                        query: query
                    });
                }
            },
            deleteMedicalHistory(data) {
                if(confirm("are you sure?")){
                    this.$store.dispatch('deleteMedicalHistory', {
                        id: data
                    });
                }
            }
        }
    }
</script>
