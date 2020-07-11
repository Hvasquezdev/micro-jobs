<template>
  <client-only>
    <div class="text-carousel-wrapper relative ml-auto mr-auto w-full">
      <hooper
        ref="textCarousel"
        class="ml-auto mr-auto"
        :wheel-control="false"
        :items-to-show="6"
        :infinite-scroll="true"
      >
        <slide v-for="(item, key) in items" :key="key">
          <a
            href="#"
            class="text-carousel-slide w-full flex items-center justify-center font-manrope text-base hover:text-red-primary hover:font-bold"
          >
            {{ item }}
          </a>
        </slide>
      </hooper>

      <base-button
        class="absolute left-0 btn-back btn-navigation flex items-center justify-center"
        rounded
        @click="prevSlide"
      >
        <base-icon name="arrow-right-large" />
      </base-button>

      <base-button
        class="absolute right-0 btn-next btn-navigation flex items-center justify-center"
        rounded
        @click="nextSlide"
      >
        <base-icon name="arrow-right-large" />
      </base-button>
    </div>
  </client-only>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import BaseButton from '@/components/BaseComponents/BaseButton';
import BaseIcon from '@/components/BaseComponents/BaseIcon';
import 'hooper/dist/hooper.css';

export default {
  name: 'TextCarousel',

  components: {
    Hooper,
    Slide,
    BaseButton,
    BaseIcon,
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    nextSlide() {
      this.$refs.textCarousel.slideNext();
    },
    prevSlide() {
      this.$refs.textCarousel.slidePrev();
    },
  },
};
</script>

<style>
.text-carousel-slide {
  color: theme('colors.dark.primary');
}
.text-carousel-wrapper {
  max-width: 1140px;
}
.text-carousel-wrapper .hooper {
  height: auto;
  max-width: 1080px;
}
.text-carousel-wrapper .btn-navigation {
  bottom: 0;
  padding: 0;
  background: transparent;
  font-size: 26px;
}
.text-carousel-wrapper .btn-next {
  top: unset;
  bottom: 0;
}
.text-carousel-wrapper .btn-back {
  transform: rotate(180deg);
}
</style>
