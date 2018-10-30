<style scoped>

</style>
<template>
    <div>
        <!-- Header -->
        <div class="header bg-gradient-primary pb-8 pt-5 pt-md-8" style="min-height: 600px;">
            <div class="container-fluid">
                <div class="header-body">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="https://www.burnetts.co.uk/assets/img/no-profile.png" 
                            alt="" width="300">
                        </div>
                        <div class="col-md-8 my-auto text-white">
                            <div>
                                <p>
                                    <span class="heading">Name: </span><br />
                                    <span class="description">{{ patient.name }}</span>
                                </p>
                            </div>
                            <div>
                                <span class="heading">Age: </span><br />
                                <span class="description">
                                    {{
                                        moment([1994, 3, 23]).fromNow().replace('ago', '')
                                    }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Page content -->
        <div class="container-fluid mt--7 mb-5">
            <div class="row">
                <div class="col-xl-12 mb-5 mb-xl-0">
                    <div class="card shadow">
                        <div class="card-header bg-transparent">
                            <div class="nav-wrapper">
                                <ul class="nav nav-pills nav-fill flex-column flex-md-row" 
                                    id="tabs-icons-text" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link mb-sm-3 mb-md-0 active" 
                                            id="tabs-general-tab" data-toggle="tab" 
                                            href="#tabs-general" role="tab" 
                                            aria-controls="tabs-general" aria-selected="true">
                                            <i class="ni ni-cloud-upload-96 mr-2"></i> General
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mb-sm-3 mb-md-0" id="tabs-icons-medical-history-tab" 
                                        data-toggle="tab" href="#tabs-icons-medical-history" role="tab" 
                                        aria-controls="tabs-icons-medical-history" aria-selected="false">
                                        <i class="ni ni-calendar-grid-58 mr-2"></i> Medical History
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mb-sm-3 mb-md-0" id="tabs-icons-prev-pregnancies-tab" 
                                        data-toggle="tab" href="#tabs-icons-prev-pregnancies" role="tab" 
                                        aria-controls="tabs-icons-prev-pregnancies" aria-selected="false">
                                        <i class="ni ni-calendar-grid-58 mr-2"></i> Prev. Pregnancies
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mb-sm-3 mb-md-0" id="tabs-pregnancies-tab" 
                                        data-toggle="tab" href="#tabs-pregnancies" role="tab" 
                                        aria-controls="tabs-pregnancies" aria-selected="false">
                                        <i class="ni ni-bell-55 mr-2"></i> Pregnancies
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mb-sm-3 mb-md-0" id="tabs-appointments-tab" 
                                        data-toggle="tab" href="#tabs-appointments" role="tab" 
                                        aria-controls="tabs-appointments" aria-selected="false">
                                        <i class="ni ni-bell-55 mr-2"></i> Appointments
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mb-sm-3 mb-md-0" id="tabs-icons-visits-tab" 
                                        data-toggle="tab" href="#tabs-icons-visits" role="tab" 
                                        aria-controls="tabs-icons-visits" aria-selected="false">
                                        <i class="ni ni-calendar-grid-58 mr-2"></i> Visits
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="tabs-general" 
                                role="tabpanel" aria-labelledby="tabs-icons-tabs-general">
                                    General
                                </div>
                                <div class="tab-pane fade" id="tabs-icons-medical-history" 
                                role="tabpanel" aria-labelledby="tabs-icons-text-2-tab">
                                    Medical History
                                </div>
                                <div class="tab-pane fade" id="tabs-icons-prev-pregnancies" 
                                role="tabpanel" aria-labelledby="tabs-icons-text-3-tab">
                                    Previous Pregnancies
                                </div>
                                <div class="tab-pane fade" id="tabs-pregnancies" 
                                role="tabpanel" aria-labelledby="tabs-icons-text-2-tab">
                                    Pregnancies
                                </div>
                                <div class="tab-pane fade" id="tabs-appointments" 
                                role="tabpanel" aria-labelledby="tabs-icons-text-2-tab">
                                    Appoinments
                                </div>
                                <div class="tab-pane fade" id="tabs-icons-visits" 
                                role="tabpanel" aria-labelledby="tabs-icons-text-2-tab">
                                    Visits
                                </div>
                            </div>
                        </div>
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
                HF: HELPERS,
                moment: window.moment
            };
        },
        computed: {
            user() {
                return this.$store.getters.getUser;
            },
            userLoadStatus() {
                return this.$store.getters.getUserLoadStatus;
            },
            patient() {
                return this.$store.getters.getPatient;
            },
            patientLoadStatus() {
                return this.$store.getters.getPatientLoadStatus;
            }
        },
        watch: {

        },
        mounted() {

        },
        created() {
            this.$store.dispatch('getAuthUser');

            this.$store.dispatch('loadPatient', {
                id: this.$route.params.patientId
            });
        },
        methods: {

        }
    }
</script>
