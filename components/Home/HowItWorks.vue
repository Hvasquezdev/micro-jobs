<template>
  <section class="how-it-works bg-grey-light w-full relative">
    <div class="dot-overlay"></div>

    <div
      class="content w-full relative flex flex-col items-center justify-center ml-auto mr-auto"
    >
      <h2 class="font-manrope text-dark-secondary">
        How it <strong>Works?</strong>
      </h2>

      <div
        class="polygon-list relative flex items-center justify-between w-full"
      >
        <div
          class="dot-line-overlay bg-no-repeat bg-contain bg-center absolute"
        ></div>

        <div class="polygon-card flex flex-col items-center justify-center">
          <div class="polygon-img flex items-center justify-center mr-10">
            <base-icon name="m-glass" />
          </div>
          <p class="text-center font-manrope text-grey-primary text-lg">
            Let us know what you're looking for.
          </p>
        </div>

        <div class="polygon-card flex flex-col items-center justify-center">
          <div class="polygon-img flex items-center justify-center">
            <base-icon name="case" />
          </div>
          <p class="text-center font-manrope text-grey-primary text-lg">
            We'll send them to our professionals.
          </p>
        </div>

        <div class="polygon-card flex flex-col items-center justify-center">
          <div class="polygon-img flex items-center justify-center ml-3">
            <base-icon name="check" />
          </div>
          <p class="text-center font-manrope text-grey-primary text-lg">
            Voilàaa! Here’s your
            <br />
            job done :)
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseIcon from '@/components/BaseComponents/BaseIcon';

export default {
  name: 'HowItWorks',

  components: {
    BaseIcon,
  },
};
</script>

<style>
.how-it-works {
  padding: 80px 50px 70px 50px;
}
.how-it-works .content {
  max-width: 1140px;
}
.how-it-works .content h2 {
  font-size: 42px;
  margin-bottom: 60px;
}
.how-it-works .content h2 strong {
  font-weight: 800;
}
.how-it-works .polygon-card {
  width: 230px;
  position: relative;
  z-index: 10;
}
.how-it-works .polygon-card .polygon-img {
  width: 190px;
  height: 190px;
  background-image: url('/images/png/card-polygon.png');
  margin-bottom: 10px;
}
.how-it-works .polygon-card .polygon-img .svg-icon {
  font-size: 50px;
  margin-left: 10px;
}
.how-it-works .polygon-list .dot-line-overlay {
  background-image: url('/images/png/dot-line.png');
  left: 50px;
  right: 50px;
  height: 120px;
  top: 36px;
  z-index: 5;
}
.how-it-works .dot-overlay {
  background-image: radial-gradient(#c6e1dc 20%, transparent 20%);
  background-position: 0 0;
  background-size: 30px 30px;
  position: absolute;
  left: 0;
  top: -125px;
  width: 150px;
  height: 210px;
}
</style>
