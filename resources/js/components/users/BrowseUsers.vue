<style scoped>
    /*
        Max width before this PARTICULAR table gets nasty. 
        This query will take effect for any screen smaller 
        than 760px and also iPads specifically.
    */
    @media
    only screen 
    and (max-width: 760px), (min-device-width: 768px) 
    and (max-device-width: 1024px)  {
		/* Force table to not be like tables anymore */
		table, thead, tbody, th, td, tr {
			display: block;
		}
		/* Hide table headers (but not display: none;, for accessibility) */
		thead tr {
			position: absolute;
			top: -9999px;
			left: -9999px;
		}
		td:before {
			/* Now like a table header */
			position: relative;
			/* Top/left values mimic padding */
			top: 0;
			left: 6px;
			width: 45%;
			padding-right: 50px;
			white-space: nowrap;
		}
		/*
		Label the data
        You could also use a data-* attribute and content 
        for this. That way "bloats" the HTML, this way 
        means you need to keep HTML and CSS in sync. 
        Lea Verou has a clever way to handle with text-shadow.
		*/
		td:nth-of-type(1):before { content: "Id: "; }
		td:nth-of-type(2):before { content: "Name: "; }
		td:nth-of-type(3):before { content: "Email: "; }
		td:nth-of-type(4):before { content: "Roles: "; }
        td:nth-of-type(5):before { content: "Status: "; }
        td:nth-of-type(6):before { content: "Actions: "; }
	}
    #action-btn {
        position: relative;
        right: 20px;
        z-index: 4;
    }
    #action-btn .btn {
        position: fixed;
        right: 30px;
        bottom: 10%;
    }
</style>
<template>
    <div class="content">
        <div class="container">

            <div v-if="userLoadStatus == 2 && user != {}" id="action-btn">
                <router-link class="btn btn-success btn-fab btn-lg btn-round" 
                    :to="'/users/add'">
                    <i class="material-icons">add</i>
                </router-link>
            </div>

            
            <div class="card">
                <div class="card-header card-header-icon card-header-success">
                    <div class="card-icon">
                        <i class="material-icons">group</i>
                    </div>
                    <div id="toolbar" class="mb-3">
                        <ul class="list-inline">
                            <li style="color: black;" class="list-inline-item col-md-4 mb-3 mt-3 pull-left">
                                showing {{ userPagination.to }} of {{ userPagination.total }} users
                            </li>
                            <li class="list-inline-item col-md-4 mb-3 mt-3 pull-right">
                                <form action="">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">
                                                <i class="material-icons">search</i>
                                            </span>
                                        </div>
                                        <input type="text" class="form-control form-control-success" 
                                            placeholder="Search users">
                                    </div>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card-body">
                    <table role="table" id="users-table" 
                        class="table table-success table-striped table-bordered">
                        <thead role="group">
                            <tr>
                                <th role="columnheader">Id</th>
                                <th role="columnheader">Name</th>
                                <th role="columnheader">Email</th>
                                <th role="columnheader">Roles</th>
                                <th role="columnheader">Status</th>
                                <th role="columnheader" v-if="userLoadStatus == 2 && user != {}">Action</th>
                            </tr>
                        </thead> 
                        <tbody role="rowgroup">
                            <tr role="row" v-for="user in users" v-bind:key="user.id">
                                <td role="cell">
                                    {{ "#" }}
                                </td>
                                <td role="cell">
                                    {{ user.name }}
                                </td>
                                <td role="cell">{{ user.email }}</td>
                                <td role="cell">
                                    {{ user.roles[0] }}
                                </td>
                                <td>
                                    {{ user.active_label }}
                                </td>
                                <td v-if="userLoadStatus == 2 && user != {}" class="td-actions">
                                    <router-link 
                                        :to="'/users/edit/'+user.id" 
                                        rel="tooltip" class="btn btn-success">
                                        <i class="material-icons">edit</i>
                                    </router-link>
                                    <button @click="deleteUser(user.id)" type="button" rel="tooltip" class="btn btn-danger">
                                        <i class="material-icons">close</i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div id="userPagination-btn">
                        <nav aria-label="Page navigation">
                            <ul class="pagination justify-content-end text-black">
                                <li class="page-item" v-bind:class="[{disabled: !userPagination.prev_page_url}]">
                                    <a @click="getUsers(userPagination.prev_page_url)" class="page-link" tabindex="-1">Previous</a>
                                </li>
                                <li class="page-item" v-bind:class="[{disabled: !userPagination.next_page_url}]">
                                    <a @click="getUsers(userPagination.next_page_url)" class="page-link">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> 
<script>
    import { HELPERS } from '../../helpers.js';
    export default {
        data() {
            return {
                HF: HELPERS
            }
        },
        computed: {
            users() {
                return this.$store.getters.getUsers;
            },
            usersLoadStatus() {
                return this.$store.getters.getUsersLoadStatus;
            },
            userPagination() {
                return this.$store.getters.getUserPagination;
            },
            user() {
                return this.$store.getters.getUser;
            },
            userLoadStatus() {
                return this.$store.getters.getUserLoadStatus;
            },
            deleteUserLoadStatus() {
                return this.$store.getters.getDeleteUserLoadStatus;
            },
            deleteUserResult() {
                return this.$store.getters.getDeleteUserResult;
            }
        },
        created() {
            this.$store.dispatch('getUsers', {
                url: null
            });
        },
        mounted() {
        },
        watch: {
            deleteUserLoadStatus: function() {
                let vm = this;
                
                if(vm.deleteUserLoadStatus == 3 && vm.deleteUserResult.success == 0) {
                    vm.HF.showNotification(
                        'top', 
                        'center', 
                        vm.deleteUserResult.message, 
                        'danger'
                    );
                } else if(vm.deleteUserLoadStatus == 2 && vm.deleteUserResult.success == 1) {
                    //reload Users
                    this.$store.dispatch('getUsers', {
                        url: null
                    });
                    vm.HF.showNotification(
                        'top', 
                        'center', 
                        vm.deleteUserResult.message, 
                        'success'
                    );
                } 
            }
        },
        methods: {
            deleteUser(id) {
                if(confirm('Are you sure?')) {
                    this.$store.dispatch('deleteUser', {
                        id: id
                    });
                }
            },
            getUsers(url) {
                this.$store.dispatch('getUsers', {
                    url: url
                });
            }
        }
    }
</script>