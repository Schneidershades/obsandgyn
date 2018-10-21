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
                    



                    <div class="table-responsive">
                            <table class="table align-items-center table-dark">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Unit</th>
                                    <th scope="col">Location</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(i, index) in 8" v-bind:key="i">
                                    <th scope="row">
                                        <div class="media align-items-center">
                                            <div class="media-body">
                                                <span class="mb-0 text-sm">
                                                    {{ index + 1 }}
                                                </span>
                                            </div>
                                        </div>
                                    </th>
                                    <td>
                                        Panadol
                                    </td>
                                    <td>
                                        Medicine
                                    </td>
                                    <td>
                                        <span class="badge badge-dot mr-4">
                                            <i class="bg-warning"></i> 2,400
                                        </span>
                                    </td>
                                    <td>
                                        Tube
                                    </td>
                                    <td>
                                        SktClinic
                                    </td>
                                    <td class="text-right">
                                        <div class="dropdown">
                                            <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fas fa-ellipsis-v"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                <a class="dropdown-item" href="#">Update</a>
                                                <a class="dropdown-item" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Action Button userLoadStatus == 2 && user != {} -->
                    <div v-if="true" id="action-btn">
                        <router-link class="btn btn-primary btn-icon btn-fab btn-lg btn-round" 
                            :to="'#'">
                            <i class="fa fa-plus"></i>
                        </router-link>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>