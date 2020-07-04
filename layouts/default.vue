<template>
  <div>
    <the-navbar class="w-full absolute z-50 top-0" />
    <Nuxt />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar';

export default {
  components: {
    TheNavbar,
  },
};
</script>

<style></style>
