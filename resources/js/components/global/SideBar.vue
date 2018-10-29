<style>

</style>
<template>
    <!-- Sidenav -->
    <nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
        <div class="container-fluid">
            <!-- Toggler -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Brand -->
            <a class="navbar-brand pt-0" href="/">
                <!--<img src="" class="navbar-brand-img" alt="...">-->
                Sokoto Clinic
            </a>
            <!-- Collapse -->
            <div class="collapse navbar-collapse" id="sidenav-collapse-main">
                <!-- Collapse header -->
                <div class="navbar-collapse-header d-md-none">
                    <div class="row">
                        <div class="col-6 collapse-brand">
                            <a href="./index.html">
                                <img src="#">
                            </a>
                        </div>
                        <div class="col-6 collapse-close">
                            <button type="button" class="navbar-toggler" 
                                data-toggle="collapse" data-target="#sidenav-collapse-main" 
                                aria-controls="sidenav-main" aria-expanded="false" 
                                aria-label="Toggle sidenav">
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Form -->
                <form class="mt-4 mb-3 d-md-none">
                    <div class="input-group input-group-rounded input-group-merge">
                        <input type="search" class="form-control form-control-rounded form-control-prepended" placeholder="Search" aria-label="Search">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <span class="fa fa-search"></span>
                            </div>
                        </div>
                    </div>
                </form>
                <!-- Navigation -->
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">
                            <i class="ni ni-tv-2 text-primary"></i> Dashboard
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/inventory">
                            <i class="ni ni-building text-blue"></i> Inventory
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/patient">
                            <i class="ni ni-single-02 text-orange"></i> Patients
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link  class="nav-link" to="/appointment">
                            <i class="ni ni-calendar-grid-58 text-yellow"></i> Appointments
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/billing">
                            <i class="ni ni-money-coins text-red"></i> Billing
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/administration">
                            <i class="ni ni-briefcase-24 text-pink"></i> Administration                            
                        </router-link>
                    </li>
                </ul>
                <!-- Divider -->
                <hr class="my-3">
                <!-- Heading -->
                <h6 class="navbar-heading text-muted">Documentation</h6>
                <!-- Navigation -->
                <ul class="navbar-nav mb-md-3">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/getting-started">
                            <i class="ni ni-spaceship"></i> Getting started
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
  </nav>
</template>
<script>
    export default {

    }
</script>
