<template>
  <div class="home">
    <home-banner />
    <browse-jobs />
    <how-it-works />
    <reason />
    <newsletter />
    <featured-gigs />
  </div>
</template>

<script>
import HomeBanner from '@/components/Home/Banner';
import BrowseJobs from '@/components/Home/BrowseJobs';
import HowItWorks from '@/components/Home/HowItWorks';
import Reason from '@/components/Home/Reason';
import Newsletter from '@/components/Home/Newsletter';
import FeaturedGigs from '@/components/Home/FeaturedGigs';

export default {
  components: {
    HomeBanner,
    BrowseJobs,
    HowItWorks,
    Reason,
    Newsletter,
    FeaturedGigs,
  },
};
</script>

<style></style>
