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
import HowItWorksSection from '@/components/SharedSections/HowItWorksSection';
import Reason from '@/components/SharedSections/Reason';
import Newsletter from '@/components/SharedSections/Newsletter';
import FeaturedGigs from '@/components/Home/FeaturedGigs';
import OurAdventages from '@/components/Home/OurAdventages';
import Testimonials from '@/components/SharedSections/Testimonials';
import LatestNews from '@/components/Home/LatestNews';
import Companies from '@/components/SharedSections/Companies';
import JoinUs from '@/components/SharedSections/JoinUs';

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
