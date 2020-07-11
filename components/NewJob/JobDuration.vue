<template>
  <div class="flex job-duration w-full justify-between">
    <div
      v-for="(time, key) in times"
      :key="key"
      class="flex small-card-wrapper flex-col items-center"
    >
      <base-card class="flex-col small-card flex items-start">
        <base-icon name="calendar" />
      </base-card>
      <p class="c-description">{{ time.lapse }}</p>
    </div>
  </div>
</template>

<script>
import BaseCard from '@/components/BaseComponents/BaseCard';
import BaseIcon from '@/components/BaseComponents/BaseIcon';
export default {
  name: 'ExperienceLevel',
  components: {
    BaseCard,
    BaseIcon,
  },
  data() {
    return {
      times: [
        {
          lapse: 'More than 6 months',
        },
        {
          lapse: '3-6 months',
        },
        {
          lapse: '1-3 months',
        },
        {
          lapse: 'More than 6 months',
        },
        {
          lapse: 'Less than 6 months',
        },
        {
          lapse: 'Less than 1 week',
        },
      ],
    };
  },
};
</script>

<style>
.job-duration .small-card {
  height: 61px;
  width: 69px;
  margin-bottom: 24px;
}

.job-duration svg {
  width: 27px;
  height: 27px;
}

.job-duration .c-description {
  color: theme('colors.grey.primary');
  font-size: 16px;
  font-weight: 500; /*medium*/
  text-align: center;
  max-width: 100px;
}
</style>
