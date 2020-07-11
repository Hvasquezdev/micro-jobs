<template>
  <div
    class="single-post flex flex-col items-center justify-center ml-auto mr-auto"
  >
    <bread-crumb :items="routes" />
    <div class="wrapper flex justify-between">
      <main class="main-content w-full">
        <post-header />
        <gig-review-carousel />
        <post-gallery />
        <post-packages />
        <gig-about />
        <gig-details />
        <gig-reviews />
      </main>
      <sidebar class="right-section">
        <card-packages />
        <card-custom-order />
        <card-profile />
      </sidebar>
    </div>
    <section class="end-post">
      <other-gigs />
      <recommended-gigs />
    </section>
  </div>
</template>

<script>
import PostHeader from '@/components/SinglePost/PostHeader';
import GigReviewCarousel from '@/components/SinglePost/GigReviewCarousel';
import PostGallery from '@/components/SinglePost/PostGallery';
import PostPackages from '@/components/SinglePost/PostPackages';
import GigAbout from '@/components/SinglePost/GigAbout';
import GigDetails from '@/components/SinglePost/GigDetails';
import GigReviews from '@/components/SharedSections/GigReviews';
import BreadCrumb from '@/components/BreadCrumb';
import OtherGigs from '@/components/SharedSections/OtherGigs';
import RecommendedGigs from '@/components/SinglePost/RecommendedGigs';
import CardPackages from '@/components/SinglePost/CardPackages';
import CardCustomOrder from '@/components/SinglePost/CardCustomOrder';
import CardProfile from '@/components/SinglePost/CardProfile';

export default {
  name: 'SinglePost',

  components: {
    PostHeader,
    GigReviewCarousel,
    PostGallery,
    PostPackages,
    GigAbout,
    GigDetails,
    GigReviews,
    BreadCrumb,
    OtherGigs,
    RecommendedGigs,
    CardPackages,
    CardCustomOrder,
    CardProfile,
  },

  data() {
    return {
      routes: [
        {
          text: 'Home',
          url: '/',
        },
        {
          text: 'Services',
          url: '/',
        },
        {
          text: 'Single Post',
          url: '/services/' + this.$route.params.id,
        },
      ],
    };
  },

  computed: {
    currentRoute() {
      return this.$route;
    },
  },
};
</script>

<style>
.single-post {
  width: 90%;
  max-width: 1140px;
}
.single-post .right-section {
  width: 360px;
  margin-left: 25px;
  padding-top: 80px;
}
.single-post .right-section > .base-card:not(:last-child) {
  margin-bottom: 30px;
}
.single-post .main-content {
  max-width: 750px;
}
.single-post .breadcrumb {
  margin-top: 30px;
  margin-bottom: 35px;
  margin-right: auto;
}
.single-post .breadcrumb ul {
  justify-content: flex-start;
}
.single-post .main-content .post-header {
  margin-bottom: 25px;
}
.single-post .main-content .gig-review-carousel {
  margin-bottom: 20px;
}
.single-post .main-content .post-gallery {
  margin-bottom: 70px;
}
.single-post .main-content .post-packages {
  margin-bottom: 55px;
}
.single-post .end-post {
  border-top: 1px solid theme('colors.grey.light-3');
}
</style>
