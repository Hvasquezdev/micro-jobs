<template>
  <div class="home">
    <home-banner />
    <browse-jobs />
    <how-it-works />
    <newsletter />
    <featured-gigs />
  </div>
</template>

<script>
import HomeBanner from '@/components/Home/Banner';
import BrowseJobs from '@/components/Home/BrowseJobs';
import HowItWorks from '@/components/Home/HowItWorks';
import Newsletter from '@/components/Home/Newsletter';
import FeaturedGigs from '@/components/Home/FeaturedGigs';

export default {
  components: {
    HomeBanner,
    BrowseJobs,
    HowItWorks,
    Newsletter,
    FeaturedGigs,
  },
};
</script>

<style></style>
