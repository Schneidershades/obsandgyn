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
                            
                        </div>
                        <div class="card-body">
                            <form v-show="show_form">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="name">
                                                Name <i class="fa fa-asterisk text-danger text-small"></i>
                                            </label>
                                            <input v-model="patient.name" type="text" class="form-control" 
                                                id="name" placeholder="Faruk Nasir...">
                                            <small v-show="!validations.name.is_valid" class="text-danger">
                                                {{ validations.name.text }}
                                            </small>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="religion">
                                                Religion 
                                            </label>
                                            <input v-model="patient.religion" type="text" class="form-control" 
                                            id="religion" placeholder="Religion...">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="address">
                                                Address 
                                            </label>
                                            <textarea v-model="patient.address" class="form-control" 
                                                id="address" rows="3" 
                                                placeholder="patient's address"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="address">
                                                Birth Date 
                                            </label>
                                            <input v-model="patient.birth_date" type="text" placeholder="Birth Date" 
                                                class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="address">
                                                Tribe 
                                            </label>
                                            <input v-model="patient.tribe" type="email" placeholder="Tribe" 
                                                class="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="address">
                                        Husband's Occupation 
                                    </label>
                                    <input v-model="patient.husband_occupation" type="text" placeholder="Husbands occupation" 
                                        class="form-control" />
                                </div>
                                <button v-if="addPatientLoadStatus != 1" @click="addPatient(patient)" 
                                    type="submit" class="btn btn-primary">
                                    Submit
                                </button>
                                <clip-loader class="text-left" :loading='addPatientLoadStatus == 1' 
                                    :color="'#4caf50'"></clip-loader>
                            </form>
                            <div v-show="!show_form" class="alert alert-success" role="alert">
                                {{ addPatientResult.message }}
                                <a @click="addAnother()" class="alert-link">
                                    &nbsp;Add Another Patient
                                </a>
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
                patient: {
                    name: '',
                    address: '',
                    religion: '',
                    birth_date: '',
                    tribe: '',
                    husband_occupation: ''
                },
                HF: HELPERS,
                show_form: true,
                validations: {
                    name: {
                        is_valid: true,
                        text: ''
                    },
                    address: {
                        is_valid: true,
                        text: ''
                    },
                    religion: {
                        is_valid: true,
                        text: ''
                    },
                    birth_date: {
                        is_valid: true,
                        text: ''
                    },
                    husband_occupation: {
                        is_valid: true,
                        text: ''
                    }
                }
            };
        },
        computed: {
            user() {
                return this.$store.getters.getUser;
            },
            userLoadStatus() {
                return this.$store.getters.getUserLoadStatus;
            },
            addPatientLoadStatus() {
                return this.$store.getters.getAddPatientLoadStatus;
            },
            addPatientResult() {
                return this.$store.getters.getAddPatientResult;
            }
        },
        watch: {
            addPatientLoadStatus: function() {
                let vm = this;
                if(vm.addPatientLoadStatus == 3 && vm.addPatientResult.success == 0) {
                    vm.show_form = true;
                    vm.HF.showNotification(
                        'top', 
                        'center', 
                        vm.addPatientResult.message, 
                        'danger'
                    );
                } else if(vm.addPatientLoadStatus == 2 && vm.addPatientResult.success == 1) {
                    vm.show_form = false;
                    vm.clearPatientForm();
                } 
            }
        },
        mounted() {

        },
        created() {
            this.$store.dispatch('getAuthUser');
        },
        methods: {
            addPatient(data) {
                if(this.validatePatient(data)) {
                    this.$store.dispatch('newPatient', data);
                }
            },
            addAnother() {
                this.addPatientResult.result = 0;
                this.addPatientResult.message = '';
                this.show_form = true;
            },
            validatePatient(patient) {
                let validPatient = true;
                let validations = this.validations;

                if(!patient.name) {
                    validPatient = false;
                    validations.name.is_valid = false;
                    validations.name.text = "select a political party";
                }

                return validPatient;
            },
            clearPatientForm() {
                this.patient.name = '';
                this.patient.address = '';
                this.patient.religion = '';
                this.patient.birth_date = '';
                this.patient.husband_occupation = '';

                this.validations = {
                    name: {
                        is_valid: true,
                        text: ''
                    },
                    address: {
                        is_valid: true,
                        text: ''
                    },
                    religion: {
                        is_valid: true,
                        text: ''
                    },
                    birth_date: {
                        is_valid: true,
                        text: ''
                    },
                    husband_occupation: {
                        is_valid: true,
                        text: ''
                    }
                }
            }
        }
    }
</script>