<template>
  <div
    class="how-it-works-banner w-full relative flex flex-col items-center justify-center"
  >
    <div class="banner-shape h-auto absolute left-0 top-0 pointer-events-none">
      <img src="/images/png/banner-shape.png" alt="Banner left shape" />
    </div>
    <div class="dot-overlay"></div>

    <h1 class="text-white capitalize text-center">
      <span class="title-span relative">
        Great
      </span>
      Job. Done
      <br />
      <strong>
        Right
      </strong>
    </h1>

    <a
      href="#"
      class="start-link text-white font-manrope font-extrabold underline"
    >
      Start Today
    </a>

    <banner-nav class="w-full absolute" />
  </div>
</template>

<script>
/* eslint-disable */
import BaseInput from '@/components/BaseComponents/BaseInput';
import BaseButton from '@/components/BaseComponents/BaseButton';
import BaseIcon from '@/components/BaseComponents/BaseIcon';
import BannerNav from '@/components/HowItWork/HowItWorkNav';

export default {
  name: 'HomeBanner',

  components: {
    BaseInput,
    BaseButton,
    BaseIcon,
    BannerNav,
  },
};
</script>

<style>
.how-it-works-banner {
  padding: 200px 55px 65px 55px;
  background: rgb(58, 147, 129);
  background: linear-gradient(
    90deg,
    rgba(58, 147, 129, 1) 0%,
    rgba(65, 157, 138, 1) 52%,
    rgba(87, 173, 155, 1) 100%
  );
}
.how-it-works-banner .banner-shape {
  width: 50%;
  max-width: 888px;
}
.how-it-works-banner p {
  font-size: 25px;
  margin-bottom: 30px;
}
.how-it-works-banner h1 {
  font-size: 85px;
  margin-bottom: 50px;
}
.how-it-works-banner .title-span::after {
  background-color: rgba(255, 255, 255, 0.1);
  content: '';
  position: absolute;
  right: 10px;
  left: -40px;
  bottom: -10px;
  top: 0;
}
.how-it-works-banner a.start-link {
  font-size: 25px;
  margin-bottom: 90px;
}
.how-it-works-banner a span {
  padding-left: 15px;
  text-decoration: underline;
}
.how-it-works-banner .how-it-work-nav {
  bottom: -60px;
}
.how-it-works-banner .dot-overlay {
  background-image: radial-gradient(#68b1a2 20%, transparent 20%);
  background-position: 0 0;
  background-size: 30px 30px;
  position: absolute;
  right: 0;
  bottom: 190px;
  width: 90px;
  height: 210px;
}
</style>
