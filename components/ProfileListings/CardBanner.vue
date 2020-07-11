<template>
  <base-card
    class="flex card-banner bg-no-repeat bg-cover bg-center flex-col items-center font-manrope"
  >
    <h1 class="capitalize font-bold text-dark-secondary">Top Web Developers</h1>
    <h2 class="text-lg text-grey-primary">Our top profesionals</h2>
    <base-button rounded outlined color="danger" class="get-started">
      Get Started</base-button
    >
  </base-card>
</template>

<script>
import BaseCard from '@/components/BaseComponents/BaseCard';
import BaseButton from '@/components/BaseComponents/BaseButton';
export default {
  name: 'CardBanner',
  components: {
    BaseButton,
    BaseCard,
  },
};
</script>

<style>
.card-banner {
  padding: 52px 0;
  background-image: url('/images/jpg/card-banner-placeholder.jpg');
  max-width: 1140px;
}
.card-banner h1 {
  font-size: 35px;
}
.card-banner h2 {
  margin: 28px 0;
}
.card-banner .get-started {
  width: 216px;
  height: 62px;
}
</style>
