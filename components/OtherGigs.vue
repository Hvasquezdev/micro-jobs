<template>
  <section class="other-gigs flex flex-col items-center">
    <h1 class="font-manrope text-dark-secondary capitalize">
      Other <strong class="font-extrabold">Gigs</strong>
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
  name: 'OtherGigs',
  components: {
    CardGig,
  },
};
</script>

<style>
.other-gigs {
  padding-top: 90px;
  max-width: 1140px;
}
.other-gigs h1 {
  font-size: 45px;
  margin-bottom: 50px;
}
.other-gigs .gig:not(:last-child) {
  margin-right: 30px;
}
</style>
