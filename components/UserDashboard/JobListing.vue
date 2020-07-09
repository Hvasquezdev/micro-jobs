<template>
  <base-card class="font-manrope job-listing">
    <!-- My Jobs & Favorite List -->
    <ul
      class="header-links shadow-card flex items-start relative w-full font-bold"
    >
      <li class="cursor-pointer is-active">My Job</li>
      <li class="cursor-pointer">Favorite List</li>
      <!-- Post a Job Button  -->
      <base-button color="white" class="absolute btn" outlined rounded shadow>
        Post a Job
      </base-button>
    </ul>
    <!-- Jobs List  -->
    <ul class="list">
      <li><card-job /></li>
      <li><card-job /></li>
      <li><card-job /></li>
      <li><card-job /></li>
    </ul>
    <!-- View All Button  -->
    <base-button class="view-all-button mt-10" color="danger" rounded>
      View All
    </base-button>
  </base-card>
</template>

<script>
import CardJob from '@/components/CardJob';
import BaseButton from '@/components/BaseComponents/BaseButton';
export default {
  name: 'JobListing',
  components: {
    CardJob,
    BaseButton,
  },
};
</script>

<style>
div.job-listing {
  flex-direction: column;
  max-width: 846px;
  padding: 0 0 34px;
}
.job-listing .btn {
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  margin-right: 34px;
}
.job-listing .header-links {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 20px 36px 0;
}
.job-listing .header-links li {
  font-weight: 700; /*extrabold*/
  color: theme('colors.grey.primary');
  padding: 0 13px 18px;
}
.job-listing .header-links li:first-child {
  margin-right: 82px;
}
.job-listing .header-links li.is-active {
  border-bottom: 2px solid theme('colors.green.primary');
  color: theme('colors.green.primary');
}
.job-listing .view-all-button {
  width: 216px;
  height: 62px;
}
.job-listing .list li:last-child .card-job {
  border-bottom: none;
}
</style>
