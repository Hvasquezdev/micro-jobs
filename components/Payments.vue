<template>
  <div class="flex payments items-center">
    <base-card
      v-for="(card, key) in types"
      :key="key"
      class="card flex-col flex items-start"
    >
      <base-card class="icon">
        <base-icon :name="card.icon" />
      </base-card>
      <h4 class="c-heading" :class="{ [`text-${card.color}`]: card.color }">
        {{ card.heading }}
      </h4>
    </base-card>
  </div>
</template>

<script>
import BaseCard from '@/components/BaseComponents/BaseCard';
import BaseIcon from '@/components/BaseComponents/BaseIcon';
export default {
  name: 'Payments',
  components: {
    BaseCard,
    BaseIcon,
  },
  data() {
    return {
      types: [
        {
          heading: 'Paid by Hour',
          icon: 'by-hour',
          color: 'white',
        },
        {
          heading: 'Paid on Fixed Price',
          icon: 'fixed-price',
          color: 'dark-secondary',
        },
      ],
    };
  },
};
</script>

<style>
.payments .card {
  height: 207px;
  width: 263px;
  margin-right: 30px;
}
.payments .icon {
  height: 61px;
  width: 69px;
  padding: 0;
  background-color: #ffffff;
}
.payments svg {
  width: 27px;
  height: 27px;
}
.payments .card:nth-child(1) {
  background-image: linear-gradient(#3a9381, #57ad9b);
}
.payments .c-heading {
  font-size: 18px;
  margin-top: 36px;
  font-weight: 600; /*medium*/
}
</style>
