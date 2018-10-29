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
                                            <input type="text" class="form-control" 
                                            id="name" placeholder="Faruk Nasir...">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="religion">
                                                Religion 
                                            </label>
                                            <input type="text" class="form-control" 
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
                                            <textarea class="form-control" 
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
                                            <input type="text" placeholder="Birth Date" 
                                                class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="address">
                                                Tribe 
                                            </label>
                                            <input type="email" placeholder="Tribe" 
                                                class="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="address">
                                        Husband's Occupation 
                                    </label>
                                    <input type="text" placeholder="Husbands occupation" 
                                        class="form-control" />
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-primary">
                                        Submit
                                    </button>
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
            }
        },
        watch: {
            
        },
        mounted() {

        },
        created() {
            this.$store.dispatch('getAuthUser');
        }
    }
</script>