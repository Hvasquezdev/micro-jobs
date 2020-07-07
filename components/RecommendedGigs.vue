<template>
  <section class="recommended-gigs flex flex-col items-center">
    <h1 class="font-manrope text-dark-secondary capitalize">
      Recommended In <strong class="font-extrabold">Video & Animation</strong>
    </h1>
    <!-- Gig Cards  -->
    <div class="gigs-container flex items-center">
      <card-gig v-for="gig in 3" :key="gig" class="gig" />
    </div>
  </section>
</template>

<script>
import CardGig from '@/components/CardGig';
export default {
  name: 'RecommendedGigs',
  components: {
    CardGig,
  },
};
</script>

<style>
.recommended-gigs {
  padding: 90px 0;
  max-width: 1140px;
}
.recommended-gigs h1 {
  font-size: 45px;
  margin-bottom: 50px;
}
.recommended-gigs .gig:not(:last-child) {
  margin-right: 30px;
}
</style>
