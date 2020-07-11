<template>
  <div class="home overflow-hidden">
    <home-banner />
    <home-browse-jobs />
    <how-it-works-section />
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
import HomeBrowseJobs from '@/components/Home/HomeBrowseJobs';
import HowItWorksSection from '@/components/Home/HowItWorksSection';
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
    HomeBrowseJobs,
    HowItWorksSection,
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
