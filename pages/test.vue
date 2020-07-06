<template>
  <div>
    <gig-about />
    <gig-details />
  </div>
</template>

<script>
import GigDetails from '@/components/GigDetails';
import GigAbout from '@/components/GigAbout';

export default {
  name: 'Test',

  layout: 'test',
  components: {
    GigDetails,
    GigAbout,
  },
};
</script>

<style></style>
