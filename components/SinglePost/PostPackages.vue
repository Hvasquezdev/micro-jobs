<template>
  <div class="post-packages">
    <h2 class="section-title font-manrope text-dark-secondary font-bold">
      Compare Packages
    </h2>

    <gig-packages />
  </div>
</template>

<script>
import GigPackages from '@/components/GigPackages';

export default {
  name: 'PostPackages',

  components: {
    GigPackages,
  },
};
</script>

<style>
.post-packages .section-title {
  font-size: 22px;
  margin-bottom: 15px;
  padding-left: 20px;
}
</style>
