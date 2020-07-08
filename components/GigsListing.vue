<template>
  <section class="v-gigs-listing flex flex-col items-center">
    <!-- Vertical Gigs Container -->
    <div class="gigs-container grid grid-cols-3">
      <card-gig-vertical />
      <card-gig-vertical />
      <card-gig-vertical />
      <card-gig-vertical />
      <card-gig-vertical />
      <card-gig-vertical />
    </div>
  </section>
</template>
<script>
import CardGigVertical from '@/components/CardGigVertical';

export default {
  name: 'GigsListing',
  components: {
    CardGigVertical,
  },
};
</script>
<style>
.v-gigs-listing .gigs-container {
  max-width: 1140px;
  gap: 30px;
}
.v-gigs-listing {
  margin-bottom: 28px;
}
</style>
