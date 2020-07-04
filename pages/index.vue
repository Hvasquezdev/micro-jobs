<template>
  <div class="home">
    <home-banner />
    <browse-jobs />
    <how-it-works />
    <featured-gigs />
  </div>
</template>

<script>
import HomeBanner from '@/components/Home/Banner';
import BrowseJobs from '@/components/Home/BrowseJobs';
import HowItWorks from '@/components/Home/HowItWorks';
import FeaturedGigs from '@/components/Home/FeaturedGigs';

export default {
  components: {
    HomeBanner,
    BrowseJobs,
    HowItWorks,
    FeaturedGigs,
  },
};
</script>

<style></style>
