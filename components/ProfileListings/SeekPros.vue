<template>
  <section class="seek-pros flex flex-col items-center font-manrope">
    <h1 class="text-dark-primary font-normal mb-6">
      Some of our top <span class="font-bold">seek pros:</span>
    </h1>
    <div class="flex content justify-center">
      <base-card
        v-for="(card, key) in seekPros"
        :key="key"
        class="flex card flex-col items-center justify-center"
      >
        <div
          :class="{ [`bg-${card.color}`]: card.color }"
          class="card-icon flex items-center justify-center"
        >
          <base-icon :name="card.icon" />
        </div>
        <h3 class="capitalize font-manrope font-bold text-dark-secondary">
          {{ card.title }}
        </h3>
      </base-card>
    </div>
  </section>
</template>

<script>
import BaseCard from '@/components/BaseComponents/BaseCard';
import BaseIcon from '@/components/BaseComponents/BaseIcon';
export default {
  name: 'SeekPros',
  components: {
    BaseCard,
    BaseIcon,
  },
  data() {
    return {
      seekPros: [
        {
          title: 'Web developers',
          icon: 'web-dev',
          color: 'blue-primary',
        },
        {
          title: 'Software QA Testers',
          icon: 'software-qa',
          color: 'orange-primary',
        },
        {
          title: 'Desktop App Developers',
          icon: 'desktop-app',
          color: 'purple-secondary',
        },
        {
          title: 'Mobile Developers',
          icon: 'mobile',
          color: 'pink-primary',
        },
      ],
    };
  },
};
</script>

<style>
.seek-pros h1 {
  font-size: 45px;
  margin-bottom: 54px;
}
.seek-pros {
  padding: 86px 122px;
}
.seek-pros .svg {
  z-index: 5;
}
.seek-pros .card:not(:last-child) {
  margin-right: 30px;
}
.seek-pros .base-card {
  padding: 40px 0 30px;
  background-color: theme('colors.white');
  width: 264px;
}
.seek-pros .base-card h3 {
  margin-bottom: 25px;
  font-size: 18px;
}
.seek-pros .base-card .card-icon {
  width: 70px;
  height: 60px;
  border-radius: 8px;
  font-size: 25px;
  box-shadow: 2px 0 27px rgba(94, 115, 249, 0.19);
  margin-bottom: 30px;
}

.seek-pros .dot-overlay {
  background-image: radial-gradient(#d9ebe8 20%, transparent 20%);
  background-position: 0 0;
  background-size: 30px 30px;
  position: absolute;
  top: -55px;
  width: 175px;
  height: 210px;
}
</style>
