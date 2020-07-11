<template>
  <section class="browse-jobs flex flex-col items-center">
    <!-- Section Title -->
    <h1 class="text-dark-secondary font-normal font-manrope">
      Browse Jobs by <span class="font-extrabold">Area / Department</span>
    </h1>
    <!-- Tags Container -->
    <div class="jobs-container grid">
      <base-card v-for="card in 16" :key="card" class="w-full">
        Lorem Ipsum Dolor
      </base-card>
    </div>
    <!-- See All Button -->
    <base-button shadow class="see-all-button" color="danger" rounded>
      See All
    </base-button>
  </section>
</template>

<script>
import BaseCard from '@/components/BaseComponents/BaseCard';
import BaseButton from '@/components/BaseComponents/BaseButton';

export default {
  name: 'BrowseJobs',
  components: {
    BaseCard,
    BaseButton,
  },
};
</script>

<style>
.browse-jobs {
  padding: 108px 0 78px;
}
.browse-jobs .see-all-button {
  width: 216px;
  height: 62px;
  font-size: 18px;
}
.browse-jobs .jobs-container {
  max-width: 1140px;
  gap: 25px 40px;
  margin-top: 64px;
  margin-bottom: 56px;
  grid-template-columns: repeat(4, 255px);
}
.browse-jobs .jobs-container .base-card {
  max-width: 255px;
}
.browse-jobs h1 {
  font-size: 45px;
}
</style>
