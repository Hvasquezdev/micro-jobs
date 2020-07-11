<template>
  <div class="profile-listings-page flex flex-col items-center justify-center">
    <bread-crumb class="w-full" :items="routes" />
    <card-banner class="top-developers w-full" />
    <text-carousel :items="categories" />
    <browse-jobs class="w-full" />
    <seek-pros class="w-full" />
    <how-it-works-section class="w-full" />
    <listing-reason class="w-full" />
    <newsletter class="w-full" />
    <testimonials class="w-full" />
    <div class="listing-companies w-full relative">
      <div class="dot-overlay"></div>
      <listing-companies class="w-full" />
    </div>
    <signup-form :has-tabs="false" class="w-full" />
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb';
import CardBanner from '@/components/CardBanner';
import TextCarousel from '@/components/TextCarousel';
import BrowseJobs from '@/components/BrowseJobs';
import SeekPros from '@/components/SeekPros';
import HowItWorksSection from '@/components/Home/HowItWorksSection';
import ListingReason from '@/components/Home/Reason';
import Newsletter from '@/components/Home/Newsletter';
import Testimonials from '@/components/Home/Testimonials';
import ListingCompanies from '@/components/Home/Companies';
import SignupForm from '@/components/SignUp/SignUp';

export default {
  components: {
    BreadCrumb,
    TextCarousel,
    CardBanner,
    BrowseJobs,
    SeekPros,
    HowItWorksSection,
    ListingReason,
    Newsletter,
    Testimonials,
    ListingCompanies,
    SignupForm,
  },

  data() {
    return {
      routes: [
        {
          text: 'Home',
          url: '/',
        },
        {
          text: 'Profile',
          url: '/listing/profile',
        },
        {
          text: 'Listings',
          url: '/profile/listings',
        },
      ],
      categories: [
        'Web Developers',
        'Mobile Developers',
        'Designers & Creatives',
        'Writers',
        'Virtual Assistants',
        'Virtual Assistants',
      ],
    };
  },

  methods: {
    nextSlide() {
      this.$refs.categoriesCarousel.slideNext();
    },
    prevSlide() {
      this.$refs.categoriesCarousel.slidePrev();
    },
  },
};
</script>

<style>
.profile-listings-page .breadcrumb {
  margin-top: 27px;
  margin-bottom: 30px;
  max-width: 1140px;
}
.profile-listings-page .breadcrumb ul {
  justify-content: flex-start;
}
.profile-listings-page .top-developers {
  margin-bottom: 35px;
}
.profile-listings-page .browse-jobs {
  margin-top: 75px;
}
.profile-listings-page .seek-pros {
  margin-bottom: 36px;
}
.profile-listings-page .newsletter {
  margin-bottom: 75px;
}
.profile-listings-page .newsletter .dot-overlay {
  display: none;
}
.profile-listings-page .testimonials {
  margin-bottom: 85px;
}
.profile-listings-page .listing-companies .companies {
  background-color: theme('colors.grey.light-9');
  padding-top: 90px;
  padding-bottom: 90px;
}
.profile-listings-page .sign-up-form {
  margin-top: 85px;
  margin-bottom: 80px;
}
.profile-listings-page .sign-up-form .overlay {
  display: none;
}
.profile-listings-page .dot-overlay {
  background-image: radial-gradient(#d9ebe8 20%, transparent 25%);
  background-position: 0 0;
  background-size: 22px 22px;
  position: absolute;
  top: -70px;
  left: 0;
  width: 90px;
  height: 150px;
  z-index: 5;
}
</style>
