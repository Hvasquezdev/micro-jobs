<template>
  <section class="browse-jobs-section flex flex-col items-center">
    <!-- Section Title -->
    <h1 class="text-black font-normal font-manrope">
      Browse Jobs by <span class="font-extrabold">Area / Department</span>
    </h1>
    <!-- Tags Container -->
    <div class="jobs-container grid grid-cols-4">
      <card> Lorem Ipsum Dolor</card>
      <card> Lorem Ipsum Dolor</card>
      <card> Lorem Ipsum Dolor</card>
      <card> Lorem Ipsum Dolor</card>
      <card> Lorem Ipsum Dolor</card>
      <card> Lorem Ipsum Dolor</card>
      <card> Lorem Ipsum Dolor</card>
      <card> Lorem Ipsum Dolor</card>
      <card> Lorem Ipsum Dolor</card>
      <card> Lorem Ipsum Dolor</card>
      <card> Lorem Ipsum Dolor</card>
      <card> Lorem Ipsum Dolor</card>
      <card> Lorem Ipsum Dolor</card>
      <card> Lorem Ipsum Dolor</card>
      <card> Lorem Ipsum Dolor</card>
      <card> Lorem Ipsum Dolor</card>
    </div>
    <!-- See All Button -->
    <base-button shadow class="see-all-button" color="danger" rounded>
      See All</base-button
    >
  </section>
</template>

<script>
import Card from '@/components/Card';
import BaseButton from '@/components/BaseComponents/BaseButton';

export default {
  name: 'BrowseJobs',
  components: {
    Card,
    BaseButton,
  },
};
</script>

<style>
.browse-jobs-section {
  padding: 108px 0 78px;
}
.browse-jobs-section .see-all-button {
  width: 216px;
  height: 62px;
}
.jobs-container {
  max-width: 1140px;
  gap: 22px 40px;
  margin-top: 64px;
  margin-bottom: 56px;
}
.browse-jobs-section h1 {
  font-size: 45px;
}
</style>
