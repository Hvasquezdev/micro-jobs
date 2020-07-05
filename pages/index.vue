<template>
  <div class="home">
    <home-banner />
    <browse-jobs />
    <how-it-works />
    <reason />
    <newsletter />
    <featured-gigs />
    <our-adventages />
    <testimonials />
    <latest-news />
    <companies />
    <join-us />
  </div>
</template>

<script>
import HomeBanner from '@/components/Home/Banner';
import BrowseJobs from '@/components/Home/BrowseJobs';
import HowItWorks from '@/components/Home/HowItWorks';
import Reason from '@/components/Home/Reason';
import Newsletter from '@/components/Home/Newsletter';
import FeaturedGigs from '@/components/Home/FeaturedGigs';
import OurAdventages from '@/components/Home/OurAdventages';
import Testimonials from '@/components/Home/Testimonials';
import LatestNews from '@/components/Home/LatestNews';
import Companies from '@/components/Home/Companies';
import JoinUs from '@/components/Home/JoinUs';

export default {
  components: {
    HomeBanner,
    BrowseJobs,
    HowItWorks,
    Reason,
    Newsletter,
    FeaturedGigs,
    OurAdventages,
    Testimonials,
    LatestNews,
    Companies,
    JoinUs,
  },
};
</script>

<style></style>
