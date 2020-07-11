<template>
  <section class="font-manrope portafolio flex flex-col items-start">
    <h2 class="font-bold w-full">Portafolio</h2>
    <div class="flex content justify-center pt-8 pb-16">
      <portafolio-item v-for="portafolio in 3" :key="portafolio" />
    </div>
  </section>
</template>

<script>
import PortafolioItem from '@/components/PortafolioItem';

export default {
  name: 'Portafolio',
  components: {
    PortafolioItem,
  },
};
</script>

<style>
.portafolio {
  max-width: 751px;
}
.portafolio h2 {
  font-size: 25px;
  padding-bottom: 16px;
  border-bottom: 1px solid theme('colors.grey.light-3');
}
.portafolio .content article:not(:last-child) {
  margin-right: 24px;
}
</style>
