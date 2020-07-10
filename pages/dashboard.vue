<template>
  <div
    class="user-dashboard flex flex-col items-center justify-center ml-auto mr-auto"
  >
    <bread-crumb class="mr-auto" :items="routes" />

    <div class="content-wrapper w-full flex items-start justify-between">
      <div class="left-sidebar flex-shrink-0">
        <profile-sidebar />
      </div>
      <div class="main-content w-full">
        <revenues-banner class="w-full" />
        <order-listing class="w-full" />
        <job-listing class="w-full" />
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb';
import RevenuesBanner from '@/components/UserDashboard/Revenues';
import OrderListing from '@/components/UserDashboard/OrderListing';
import JobListing from '@/components/UserDashboard/JobListing';
import ProfileSidebar from '@/components/UserDashboard/ProfileSidebar';

export default {
  name: 'UserDashboard',

  components: {
    BreadCrumb,
    JobListing,
    ProfileSidebar,
    RevenuesBanner,
    OrderListing,
  },

  data() {
    return {
      routes: [
        {
          text: 'Home',
          url: '/',
        },
        {
          text: 'Dashboard',
          url: '/dashboard',
        },
      ],
    };
  },
};
</script>

<style>
.user-dashboard {
  max-width: 1140px;
  padding-bottom: 70px;
}
.user-dashboard .breadcrumb {
  margin-top: 27px;
  margin-bottom: 30px;
}
.user-dashboard .content-wrapper .left-sidebar {
  max-width: 260px;
  margin-right: 30px;
}
</style>
