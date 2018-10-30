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
                            <form >
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="name">
                                                Name <i class="fa fa-asterisk text-danger text-small"></i>
                                            </label>
                                            <input v-model="edited_patient.name" type="text" class="form-control" 
                                            id="name" placeholder="Faruk Nasir..." disabled>
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
                                            <input v-model="edited_patient.religion" type="text" class="form-control" 
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
                                            <textarea v-model="edited_patient.address" class="form-control" 
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
                                            <input v-model="edited_patient.birth_date" type="text" placeholder="Birth Date" 
                                                class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="address">
                                                Tribe 
                                            </label>
                                            <input v-model="edited_patient.tribe" type="text" placeholder="Tribe" 
                                                class="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="address">
                                        Husband's Occupation 
                                    </label>
                                    <input v-model="edited_patient.husband_occupation" type="text" placeholder="Husbands occupation" 
                                        class="form-control" />
                                </div>
                                <div class="form-group">
                                    <button v-if="updatePatientLoadStatus != 1" @click="updatePatient(edited_patient)" 
                                        type="submit" class="btn btn-primary">
                                        Update
                                    </button>
                                    <clip-loader class="text-left" :loading='updatePatientLoadStatus == 1' 
                                        :color="'#5e72e4'"></clip-loader>
                                </div>
                            </form>
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
                edited_patient: {
                    id: '',
                    address: '',
                    religion: '',
                    birth_date: '',
                    tribe: '',
                    husband_occupation: ''
                },
                HF: HELPERS,
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
                    tribe: {
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
            patient() {
                return this.$store.getters.getPatient;
            },
            patientLoadStatus() {
                return this.$store.getters.getPatientLoadStatus;
            },
            updatePatientLoadStatus() {
                return this.$store.getters.getUpdatePatientLoadStatus;
            },
            updatePatientResult() {
                return this.$store.getters.getUpdatePatientResult;
            }
        },
        watch: {
            updatePatientLoadStatus: function() {
                let vm = this;
                if(vm.updatePatientLoadStatus == 3 && vm.updatePatientResult.success == 0) {
                    vm.show_form = true;
                    vm.HF.showNotification(
                        'top', 
                        'center', 
                        vm.updatePatientResult.message, 
                        'danger'
                    );
                } else if(vm.updatePatientLoadStatus == 2 && vm.updatePatientResult.success == 1) {
                    vm.show_form = true;
                    vm.HF.showNotification(
                        'top', 
                        'center', 
                        vm.updatePatientResult.message, 
                        'success'
                    );
                } 
            },
            patientLoadStatus: function(val) {
                let vm = this;

                if(val === 2) {
                    vm.edited_patient.id = vm.patient.id;
                    vm.edited_patient.name = vm.patient.name;
                    vm.edited_patient.religion = vm.patient.religion;
                    vm.edited_patient.address = vm.patient.address;
                    vm.edited_patient.birth_date = vm.patient.birth_date;
                    vm.edited_patient.tribe = vm.patient.tribe;
                    vm.edited_patient.husband_occupation = vm.patient.husband_occupation;
                }
            }
        },
        mounted() {

        },
        created() {
            this.$store.dispatch('getAuthUser');

            this.$store.dispatch('loadPatient', {
                id: this.$route.params.editId
            });
        },
        methods: {
            updatePatient(patient) {
                if(this.validatePatient(patient)) {
                    this.$store.dispatch('editPatient', patient);
                }
            },
            validatePatient(patient) {
                let validPatient = true;
                let validations = this.validations;

                if(!patient.name) {
                    validPatient = false;
                    validations.name.is_valid = false;
                    validations.name.text = "name can not be empty";
                }

                return validPatient;
            },
            clearPatientForm() {
                this.patient.name = '';
                this.patient.address = '';
                this.patient.religion = '';
                this.patient.birth_date = '';
                this.patient.tribe = '';
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
                    tribe: {
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