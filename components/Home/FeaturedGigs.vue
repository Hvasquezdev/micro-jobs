<template>
  <section class="featured-gigs-section flex flex-col items-center">
    <!-- Section Title -->
    <h1 class="text-black font-normal font-manrope">
      Feature <span class="font-extrabold">Gigs</span>
    </h1>
    <!-- Gigs Container -->
    <div class="gigs-card-container grid grid-cols-3">
      <card-gig />
      <card-gig />
      <card-gig />
      <card-gig />
      <card-gig />
      <card-gig />
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
.see-all-button {
  width: 216px;
  height: 62px;
}
</style>
