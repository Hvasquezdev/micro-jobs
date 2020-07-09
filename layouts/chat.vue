<template>
  <div>
    <the-navbar
      :class="{ absolute: isNavbarAbsolute }"
      class="w-full z-50 top-0"
      :has-background="!isNavbarAbsolute"
    />
    <Nuxt />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar';

export default {
  components: {
    TheNavbar,
  },

  computed: {
    isNavbarAbsolute() {
      const currentPage = this.$route.name;

      switch (currentPage) {
        case 'index':
          return true;

        default:
          return false;
      }
    },
  },
};
</script>

<style></style>
