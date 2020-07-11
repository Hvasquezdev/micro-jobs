<template>
  <div>
    <the-navbar
      :class="{ absolute: isNavbarAbsolute }"
      class="w-full z-50 top-0"
      :has-background="!isNavbarAbsolute"
    />
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

  computed: {
    isNavbarAbsolute() {
      const currentPage = this.$route.name;

      switch (currentPage) {
        case 'index':
          return true;

        case 'howitworks':
          return true;

        default:
          return false;
      }
    },
  },
};
</script>

<style></style>
