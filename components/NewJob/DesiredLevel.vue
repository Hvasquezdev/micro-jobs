<template>
  <div class="flex experience-level items-center">
    <base-card
      v-for="(card, key) in types"
      :key="key"
      class="card flex-col flex items-start"
    >
      <base-card class="icon" :class="{ [`bg-${card.color}`]: card.color }">
        <base-icon :name="card.icon" />
      </base-card>
      <h4 class="c-heading">
        {{ card.heading }}
      </h4>
      <p class="c-description">{{ card.description }}</p>
    </base-card>
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
      types: [
        {
          heading: 'Entry Level',
          icon: 'entry-level',
          description: 'I am looking for freelancers with the lowest rates',
          color: 'blue-light',
        },
        {
          heading: 'Intermediate',
          icon: 'intermediate',
          description: 'I am looking for a mix of experiences and values',
          color: 'orange-light',
        },
        {
          heading: 'Expert',
          icon: 'expert',
          description:
            'I am willing to pay higher rates for the most experienced Freelancers',
          color: 'purple-light',
        },
      ],
    };
  },
};
</script>

<style>
.experience-level .card {
  height: 264px;
  width: 267px;
  margin-right: 30px;
}
.experience-level .icon {
  height: 61px;
  width: 69px;
  padding: 0;
  box-shadow: none;
}
.experience-level svg {
  width: 27px;
  height: 27px;
}
.experience-level .c-heading {
  font-size: 18px;
  margin-top: 32px;
  margin-bottom: 16px;
  font-weight: 600; /*medium*/
}
.experience-level .c-description {
  color: theme('colors.grey.primary');
  font-size: 16px;
  text-align: center;
}
</style>
