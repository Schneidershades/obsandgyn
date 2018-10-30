<style scoped>

</style>
<template>
    <form>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="name">
                        Name
                    </label>
                    <input :value="patient.name" type="text" class="form-control" 
                        id="name" disabled>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="religion">
                        Religion 
                    </label>
                    <input :value="patient.religion" type="text" class="form-control" 
                    id="religion" disabled>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="address">
                        Address 
                    </label>
                    <textarea :value="patient.address" class="form-control" 
                        id="address" rows="3" 
                        disabled></textarea>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="address">
                        Birth Date 
                    </label>
                    <input :value="patient.birth_date" type="text" 
                        class="form-control" disabled />
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="address">
                        Tribe 
                    </label>
                    <input :value="patient.tribe" type="email"  
                        class="form-control" disabled />
                </div>
            </div>
        </div>
        <div class="form-group">
            <label for="address">
                Husband's Occupation 
            </label>
            <input :value="patient.husband_occupation" type="text" 
                class="form-control" disabled />
        </div>
    </form>
</template>
<script>
    export default {
        props: [
            'patient'
        ],
        data() {
            return {

            }
        },
        computed: {
            patientLoadStatus() {
                return this.$store.getters.getPatientLoadStatus;
            }
        },
        created() {
            
        }
    }
</script>
