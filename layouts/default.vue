<template>
  <div>
    <the-navbar class="w-full absolute z-50 top-0" />
    <Nuxt />
    <the-footer class="w-full" />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar';
import TheFooter from '@/components/TheFooter';

export default {
  components: {
    TheNavbar,
    TheFooter,
  },
};
</script>

<style></style>
