<template>
  <div>
    <the-navbar class="w-full z-50" has-background />
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
