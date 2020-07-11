<template>
  <base-card class="gig-review-carousel relative overflow-hidden">
    <client-only>
      <hooper
        ref="carousel"
        :wheel-control="false"
        :items-to-show="1"
        :infinite-scroll="true"
      >
        <slide v-for="review in 3" :key="review">
          <div
            class="review-image relative w-full overflow-hidden flex items-center justify-center shadow-btn"
          >
            <img
              class="w-full h-full object-cover"
              src="/images/jpg/gig-review-image.jpg"
              alt="Gig review"
            />
          </div>
          <div class="review-content font-manrope">
            <h3 class="font-bold text-dark-secondary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p class="text-grey-secondary text-base">
              Review by Angelo Ray
            </p>

            <!-- Rating Stars -->
            <div class="rating flex items-center">
              <div class="stars flex items-start">
                <img src="/images/png/rating-star-full.png" alt="rating star" />
                <img src="/images/png/rating-star-full.png" alt="rating star" />
                <img src="/images/png/rating-star-full.png" alt="rating star" />
                <img src="/images/png/rating-star-full.png" alt="rating star" />
                <img src="/images/png/rating-star-mid.png" alt="rating star" />
              </div>
              <p class="rate font-semibold text-dark-primary">
                4.8/5
              </p>
            </div>
          </div>
        </slide>
      </hooper>

      <base-button
        class="absolute btn-back btn-navigation flex items-center justify-center"
        rounded
        @click="prevSlide"
      >
        <base-icon name="arrow-left" />
      </base-button>

      <base-button
        class="absolute btn-next btn-navigation flex items-center justify-center"
        rounded
        @click="nextSlide"
      >
        <base-icon name="arrow-left" />
      </base-button>
    </client-only>
  </base-card>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import BaseCard from '@/components/BaseComponents/BaseCard';
import BaseIcon from '@/components/BaseComponents/BaseIcon';
import BaseButton from '@/components/BaseComponents/BaseButton';
import 'hooper/dist/hooper.css';

export default {
  name: 'GigReviewCarousel',

  components: {
    BaseCard,
    Hooper,
    Slide,
    BaseButton,
    BaseIcon,
  },

  methods: {
    nextSlide() {
      this.$refs.carousel.slideNext();
    },
    prevSlide() {
      this.$refs.carousel.slidePrev();
    },
  },
};
</script>

<style>
.gig-review-carousel {
  max-width: 750px;
  padding: 0;
}
.gig-review-carousel .hooper {
  height: auto;
}
.gig-review-carousel .review-image {
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  max-height: 320px;
}
.gig-review-carousel .review-image img {
  max-height: 100%;
}
.gig-review-carousel .review-content {
  padding: 30px;
}
.gig-review-carousel .review-content h3 {
  font-size: 20px;
  margin-bottom: 20px;
}
.gig-review-carousel .review-content p {
  margin-bottom: 25px;
}
.gig-review-carousel .btn-navigation {
  width: 50px;
  height: 50px;
  padding: 0;
  color: #fff;
  font-size: 20px;
  background-color: transparent;
  transition: all 0.3s;
}
.gig-review-carousel .btn-navigation:hover,
.gig-review-carousel .btn-navigation:active {
  background-color: rgba(255, 255, 255, 0.3);
}
.gig-review-carousel .btn-back {
  left: 15px;
  top: 130px;
}
.gig-review-carousel .btn-next .svg-icon {
  transform: rotate(180deg);
}
.gig-review-carousel .btn-next {
  right: 15px;
  top: 130px;
}
.gig-review-carousel .rating .stars > *:not(:last-child) {
  margin-right: 5px;
}
.gig-review-carousel .rating .stars {
  margin-right: 15px;
}
.gig-review-carousel .rating .rate {
  font-size: 18px;
  color: theme('colors.dark.primary');
  margin: 0;
}
</style>
