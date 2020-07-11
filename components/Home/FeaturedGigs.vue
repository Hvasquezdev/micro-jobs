<template>
  <section class="featured-gigs-section flex flex-col items-center">
    <!-- Section Title -->
    <h1 class="text-black font-normal font-manrope">
      Featured <span class="font-extrabold">Gigs</span>
    </h1>
    <!-- Gigs Container -->
    <div class="gigs-card-container grid grid-cols-3 relative">
      <card-gig v-for="gig in 6" :key="gig" />

      <div class="dot-overlay"></div>
    </div>
    <!-- See All Button -->
    <base-button shadow class="see-all-button" color="danger" rounded>
      See All</base-button
    >
  </section>
</template>
<script>
import CardGig from '@/components/CardGig';
import BaseButton from '@/components/BaseComponents/BaseButton';

export default {
  name: 'FeaturedGigs',
  components: {
    CardGig,
    BaseButton,
  },
};
</script>
<style>
.featured-gigs-section {
  margin-top: 100px;
  margin-bottom: 40px;
}
.featured-gigs-section h1 {
  font-size: 45px;
}
.gigs-card-container {
  max-width: 1140px;
  gap: 30px;
  margin-top: 50px;
  margin-bottom: 70px;
}
.featured-gigs-section .see-all-button {
  width: 216px;
  height: 62px;
}
.featured-gigs-section .dot-overlay {
  background-image: radial-gradient(#d9ebe8 20%, transparent 20%);
  background-position: 0 0;
  background-size: 30px 30px;
  position: absolute;
  left: -95px;
  bottom: -100px;
  width: 240px;
  height: 210px;
  z-index: -1;
}
</style>
