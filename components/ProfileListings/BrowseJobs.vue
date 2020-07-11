<template>
  <section class="browse-jobs flex flex-col items-center relative">
    <div class="dot-overlay"></div>
    <h1 class="font-manrope text-dark-secondary">
      Browse the most
      <strong class="font-extrabold capitalize">High-Rated</strong>
    </h1>
    <!-- Gigs  -->
    <div class="flex justify-center">
      <card-gig-profile />
      <card-gig-profile />
      <card-gig-profile />
    </div>
    <!-- See All Button -->
    <base-button shadow class="see-all-button" color="danger" rounded>
      See All</base-button
    >
  </section>
</template>

<script>
import CardGigProfile from '@/components/CardGigProfile';
import BaseButton from '@/components/BaseComponents/BaseButton';
export default {
  name: 'BrowseJobs',
  components: {
    CardGigProfile,
    BaseButton,
  },
};
</script>

<style>
.browse-jobs {
  padding: 78px 0 42px;
  margin-top: 100px;
  background-color: theme('colors.grey.light-9');
}
.browse-jobs .dot-overlay {
  background-image: radial-gradient(#c6e1dc 20%, transparent 20%);
  background-position: 0 0;
  background-size: 30px 30px;
  position: absolute;
  left: 0;
  top: -95px;
  width: 150px;
  height: 210px;
}
.browse-jobs h1 {
  font-size: 45px;
  margin-bottom: 66px;
}
.browse-jobs .card-gig-profile:not(:last-child) {
  margin-right: 30px;
}
.browse-jobs .see-all-button {
  width: 216px;
  height: 62px;
  margin-top: 54px;
}
</style>
