<template>
  <div class="home">
    <home-banner />
    <how-it-works />
    <featured-gigs />
  </div>
</template>

<script>
import HomeBanner from '@/components/Home/Banner';
import HowItWorks from '@/components/Home/HowItWorks';
import FeaturedGigs from '@/components/Home/FeaturedGigs';

export default {
  components: {
    HomeBanner,
    HowItWorks,
    FeaturedGigs,
  },
};
</script>

<style></style>
