<style scoped>

</style>
<template>
    <div>
        <!-- Header -->
        <div class="header bg-gradient-primary pb-8 pt-5 pt-md-8">
            <div class="container-fluid">
                <div class="header-body">
                    <!-- Card stats -->
                    <div class="row">
                        <div class="col-xl-3 col-lg-6">
                            <div class="card card-stats mb-4 mb-xl-0">
                                <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                    <h5 class="card-title text-uppercase text-muted mb-0">Visits</h5>
                                    <span class="h2 font-weight-bold mb-0">128</span>
                                    </div>
                                    <div class="col-auto">
                                    <div class="icon icon-shape bg-danger text-white rounded-circle shadow">
                                        <i class="fas fa-chart-bar"></i>
                                    </div>
                                    </div>
                                </div>
                                <p class="mt-3 mb-0 text-muted text-sm">
                                    <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                                    <span class="text-nowrap">Since last month</span>
                                </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6">
                            <div class="card card-stats mb-4 mb-xl-0">
                                <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                    <h5 class="card-title text-uppercase text-muted mb-0">New Patients</h5>
                                    <span class="h2 font-weight-bold mb-0">5</span>
                                    </div>
                                    <div class="col-auto">
                                    <div class="icon icon-shape bg-warning text-white rounded-circle shadow">
                                        <i class="fas fa-chart-pie"></i>
                                    </div>
                                    </div>
                                </div>
                                <p class="mt-3 mb-0 text-muted text-sm">
                                    <span class="text-danger mr-2"><i class="fas fa-arrow-down"></i> 3.48%</span>
                                    <span class="text-nowrap">Since last week</span>
                                </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6">
                            <div class="card card-stats mb-4 mb-xl-0">
                                <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                    <h5 class="card-title text-uppercase text-muted mb-0">Money-In</h5>
                                    <span class="h2 font-weight-bold mb-0">&#8358; 175,000</span>
                                    </div>
                                    <div class="col-auto">
                                    <div class="icon icon-shape bg-yellow text-white rounded-circle shadow">
                                        <i class="fas fa-users"></i>
                                    </div>
                                    </div>
                                </div>
                                <p class="mt-3 mb-0 text-muted text-sm">
                                    <span class="text-warning mr-2"><i class="fas fa-arrow-down"></i> 1.10%</span>
                                    <span class="text-nowrap">Since yesterday</span>
                                </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6">
                            <div class="card card-stats mb-4 mb-xl-0">
                                <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                    <h5 class="card-title text-uppercase text-muted mb-0">Performance</h5>
                                    <span class="h2 font-weight-bold mb-0">49,65%</span>
                                    </div>
                                    <div class="col-auto">
                                    <div class="icon icon-shape bg-info text-white rounded-circle shadow">
                                        <i class="fas fa-percent"></i>
                                    </div>
                                    </div>
                                </div>
                                <p class="mt-3 mb-0 text-muted text-sm">
                                    <span class="text-success mr-2"><i class="fas fa-arrow-up"></i> 12%</span>
                                    <span class="text-nowrap">Since last month</span>
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <!-- Page content -->
        <div class="container-fluid mt--7 mb-5">
            <div class="row">
                <div class="col-xl-8 mb-5 mb-xl-0">
                    <div class="card shadow">
                        <div class="card-header bg-transparent">
                        <div class="row align-items-center">
                            <div class="col">
                            <h6 class="text-uppercase text-light ls-1 mb-1">Overview</h6>
                            <h2 class="mb-0">Monthly Money-Ins</h2>
                            </div>
                            <div class="col">
                            <ul class="nav nav-pills justify-content-end">
                                <li class="nav-item mr-2 mr-md-0" data-toggle="chart" data-target="#chart-sales" data-update='{"data":{"datasets":[{"data":[0, 20, 10, 30, 15, 40, 20, 60, 60]}]}}' data-prefix="$" data-suffix="k">
                                    <a href="#" class="nav-link py-2 px-3 active" data-toggle="tab">
                                        <span class="d-none d-md-block">Month</span>
                                        <span class="d-md-none">M</span>
                                    </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div class="card-body">
                            <!-- Chart -->
                            <div class="chart">
                                <bar-chart :data="monthly_money_data"></bar-chart>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="card shadow">
                        <div class="card-header bg-transparent">
                        <div class="row align-items-center">
                            <div class="col">
                            <h6 class="text-uppercase text-muted ls-1 mb-1">Performance</h6>
                            <h2 class="mb-0">Patients Comparison</h2>
                            </div>
                        </div>
                        </div>
                        <div class="card-body">
                        <!-- Chart -->
                        <div class="chart">
                            <pie-chart :data="[['Out-Patients', 44], ['In-Patients', 23]]"></pie-chart>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-xl-8 mb-5 mb-xl-0">
                    <div class="card shadow">
                        <div class="card-header bg-transparent">
                        <div class="row align-items-center">
                            <div class="col">
                            <h6 class="text-uppercase text-light ls-1 mb-1">Overview</h6>
                            <h2 class="mb-0">Weekly Procedures</h2>
                            </div>
                            <div class="col">
                            <ul class="nav nav-pills justify-content-end">
                                <li class="nav-item mr-2 mr-md-0" data-toggle="chart" data-target="#chart-sales" data-update='{"data":{"datasets":[{"data":[0, 20, 10, 30, 15, 40, 20, 60, 60]}]}}' data-prefix="$" data-suffix="k">
                                    <a href="#" class="nav-link py-2 px-3 active" data-toggle="tab">
                                        <span class="d-none d-md-block">Week</span>
                                        <span class="d-md-none">W</span>
                                    </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div class="card-body">
                            <!-- Chart -->
                            <div class="chart">
                                <column-chart :data="weekly_procedures"></column-chart>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                <div class="card shadow">
                    <div class="card-header border-0">
                    <div class="row align-items-center">
                        <div class="col">
                        <h3 class="mb-0">Social traffic</h3>
                        </div>
                        <div class="col text-right">
                        <a href="#!" class="btn btn-sm btn-primary">See all</a>
                        </div>
                    </div>
                    </div>
                    <div class="table-responsive">
                    <!-- Projects table -->
                    <table class="table align-items-center table-flush">
                        <thead class="thead-light">
                        <tr>
                            <th scope="col">Referral</th>
                            <th scope="col">Visitors</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">
                            Facebook
                            </th>
                            <td>
                            1,480
                            </td>
                            <td>
                            <div class="d-flex align-items-center">
                                <span class="mr-2">60%</span>
                                <div>
                                <div class="progress">
                                    <div class="progress-bar bg-gradient-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div>
                                </div>
                                </div>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                            Facebook
                            </th>
                            <td>
                            5,480
                            </td>
                            <td>
                            <div class="d-flex align-items-center">
                                <span class="mr-2">70%</span>
                                <div>
                                <div class="progress">
                                    <div class="progress-bar bg-gradient-success" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"></div>
                                </div>
                                </div>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                            Google
                            </th>
                            <td>
                            4,807
                            </td>
                            <td>
                            <div class="d-flex align-items-center">
                                <span class="mr-2">80%</span>
                                <div>
                                <div class="progress">
                                    <div class="progress-bar bg-gradient-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%;"></div>
                                </div>
                                </div>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                            Instagram
                            </th>
                            <td>
                            3,678
                            </td>
                            <td>
                            <div class="d-flex align-items-center">
                                <span class="mr-2">75%</span>
                                <div>
                                <div class="progress">
                                    <div class="progress-bar bg-gradient-info" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%;"></div>
                                </div>
                                </div>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                            twitter
                            </th>
                            <td>
                            2,645
                            </td>
                            <td>
                            <div class="d-flex align-items-center">
                                <span class="mr-2">30%</span>
                                <div>
                                <div class="progress">
                                    <div class="progress-bar bg-gradient-warning" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%;"></div>
                                </div>
                                </div>
                            </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            monthly_money_data: [['Jan', 5], ['Feb', 27],['March', 5], ['Apr', 27],['May', 5], ['Jun', 27]],
            weekly_procedures: [['Mon', 5], ['Tue', 27],['Wed', 5], ['Thur', 27],['Fri', 5], ['Sat', 27], ['Sun', 30]]
        }
    }
}
</script>