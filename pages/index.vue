<template>
  <div class="home">
    <home-banner />
    <featured-gigs />
  </div>
</template>

<script>
import HomeBanner from '@/components/Home/Banner';
import FeaturedGigs from '@/components/Home/FeaturedGigs';

export default {
  components: {
    HomeBanner,
    FeaturedGigs,
  },
};
</script>

<style></style>
