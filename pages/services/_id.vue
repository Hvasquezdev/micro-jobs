<template>
  <div class="single-post flex justify-between ml-auto mr-auto">
    <main class="main-content w-full">
      <post-header />
      <gig-review-carousel />
      <post-gallery />
      <post-packages />
      <gig-about />
      <gig-details />
      <gig-reviews />
    </main>
    <sidebar class="right-section"></sidebar>
  </div>
</template>

<script>
import PostHeader from '@/components/SinglePost/PostHeader';
import GigReviewCarousel from '@/components/GigReviewCarousel';
import PostGallery from '@/components/SinglePost/PostGallery';
import PostPackages from '@/components/SinglePost/PostPackages';
import GigAbout from '@/components/GigAbout';
import GigDetails from '@/components/GigDetails';
import GigReviews from '@/components/GigReviews';

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
}
.single-post .main-content {
  max-width: 750px;
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
</style>
