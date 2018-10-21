<style>
</style>

<template>
    <div id="app-layout" class="wrapper">
        <side-bar></side-bar>
        <div class="main-content">
            <navigation></navigation>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import SideBar from '../../components/global/SideBar.vue';
    import Navigation from '../../components/global/Navigation.vue';
    export default {
        components: {
            SideBar,
            Navigation,
        },
        created(){
            
        }
    }
</script>