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
                        <th scope="col">Year</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Ante. Complications</th>
                        <th scope="col">Labour</th>
                        <th scope="col">Age</th>
                        <th scope="col">Cause Of Death</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(previousPregnancy, index) in previousPregnancies" v-bind:key="previousPregnancy.id">
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
                            {{ previousPregnancy.year }}
                        </td>
                        <td>
                            {{ previousPregnancy.duration }}
                        </td>
                        <td>
                            {{ previousPregnancy.antenatal_complications }}
                        </td>
                        <td>
                            {{ previousPregnancy.labour }}
                        </td>
                        <td>
                            {{ previousPregnancy.age_if_alive  }}
                        </td>
                        <td>
                            {{ previousPregnancy.cause_of_death }}
                        </td>
                        <td class="text-right">
                            <div class="dropdown">
                                <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" 
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-ellipsis-v"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <a class="dropdown-item" href="#">Check-In</a>
                                    <router-link class="dropdown-item" :to="'/previousPregnancy/view/'+previousPregnancy.id">
                                        View
                                    </router-link>
                                    <router-link class="dropdown-item" :to="'/previousPregnancy/edit/'+previousPregnancy.id">
                                        Edit
                                    </router-link>
                                    <a @click="deletePreviousPregnancy(previousPregnancy.id)" class="dropdown-item" href="#">
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
                    showing {{ pagination.to }} of {{ pagination.total }} previousPregnancies
                </li>
            </ul>

            <div id="pagination-btn">
                <nav aria-label="Page navigation">
                    <ul class="pagination justify-content-end text-black">
                        <li class="page-item" v-bind:class="[{disabled: !pagination.prev_page_url}]">
                            <a @click="getPreviousPregnancies(pagination.prev_page_url)" class="page-link" tabindex="-1">
                                <i class="fa fa-arrow-left"></i>
                            </a>
                        </li>
                        <li class="page-item" v-bind:class="[{disabled: !pagination.next_page_url}]">
                            <a @click="getPreviousPregnancies(pagination.next_page_url)" class="page-link">
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
            previousPregnancies() {
                return this.$store.getters.getPreviousPregnancies;
            },
            previousPregnanciesLoadStatus() {
                return this.$store.getters.getPreviousPregnanciesLoadStatus;
            },
            pagination() {
                return this.$store.getters.getPreviousPregnancyPagination;
            },
            deletePreviousPregnancyLoadStatus() {
                return this.$store.getters.getDeletePreviousPregnancyLoadStatus;
            },
            deletePreviousPregnancyResult() {
                return this.$store.getters.getDeletePreviousPregnancyResult;
            }
        },
        watch: {
            deletePreviousPregnancyLoadStatus: function() {
                let vm = this;
                
                if(vm.deletePreviousPregnancyLoadStatus == 3 && vm.deletePreviousPregnancyResult.success == 0) {
                    vm.HF.showNotification(
                        'top', 
                        'center', 
                        vm.deletePreviousPregnancyResult.message, 
                        'danger'
                    );
                } else if(vm.deletePreviousPregnancyLoadStatus == 2 && vm.deletePreviousPregnancyResult.success == 1) {
                    //reload previousPregnancies
                    this.$store.dispatch('loadPreviousPregnancies', {
                        url: null
                    });
                    
                    vm.HF.showNotification(
                        'top', 
                        'center', 
                        vm.deletePreviousPregnancyResult.message, 
                        'success'
                    );
                } 
            }
        },
        mounted() {

        },
        created() {
            this.$store.dispatch('loadPreviousPregnancies', {
                url: null
            });
        },
        methods: {
            getPreviousPregnancies: function(url) {
                this.$store.dispatch('loadPreviousPregnancies', {
                    url: url
                });
            },
            searchpreviousPregnancies: function(query) {
                if(query) {
                    this.$store.dispatch('searchPreviousPregnancies', {
                        query: query
                    });
                }
            },
            deletePreviousPregnancy(data) {
                if(confirm("are you sure?")){
                    this.$store.dispatch('deletePreviousPregnancy', {
                        id: data
                    });
                }
            }
        }
    }
</script>
