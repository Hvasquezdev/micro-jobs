<template>
  <div class="new-job-page flex flex-col relative items-center justify-center">
    <div class="dot-overlay"></div>
    <bread-crumb :items="routes" />
    <new-job-form />
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb';
import NewJobForm from '@/components/NewJob/PostJobForm';

export default {
  name: 'NewJob',

  components: {
    BreadCrumb,
    NewJobForm,
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
.new-job-page {
  background-color: white;
}
.new-job-page .breadcrumb {
  margin-top: 27px;
  width: 90%;
  max-width: 1140px;
}
.new-job-page .breadcrumb ul {
  justify-content: flex-start;
}
.new-job-page .post-job-form {
  margin-top: 40px;
  margin-bottom: 55px;
}
.new-job-page .dot-overlay {
  background-image: radial-gradient(#d9ebe8 20%, transparent 20%);
  background-position: 0 0;
  background-size: 30px 30px;
  position: absolute;
  top: 40%;
  right: 0;
  width: 117px;
  height: 210px;
}
</style>
