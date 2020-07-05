<template>
  <section class="our-adventages flex items-center justify-center relative">
    <div class="dot-overlay absolute right-0 z-10"></div>

    <div class="wave-shape absolute w-full h-full overflow-hidden">
      <svg
        class="absolute left-0 right-0 h-auto"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="1920"
        height="727.06"
        viewBox="0 0 1920 727.06"
      >
        <defs>
          <style>
            .cls-1 {
              fill: #ccc;
              fill-rule: evenodd;
              filter: url(#filter);
            }
          </style>
          <filter
            id="filter"
            x="-4"
            y="4067.94"
            width="1924"
            height="727.06"
            filterUnits="userSpaceOnUse"
          >
            <feFlood result="flood" flood-color="#f8f8f8" />
            <feComposite result="composite" operator="in" in2="SourceGraphic" />
            <feBlend result="blend" in2="SourceGraphic" />
          </filter>
        </defs>
        <path
          class="cls-1"
          d="M-4,4210s316.5-121.5,516-133c0,0,233-33,477,27,0,0,365,76,493,84,0,0,245.5,10,438-114v633s-347,134.36-643,55c0,0-721-171-1281,33V4210Z"
          transform="translate(0 -4067.94)"
        />
      </svg>
    </div>

    <div class="content grid relative z-10 flex items-center justify-center">
      <base-card
        v-for="(card, key) in adventages"
        :key="key"
        class="flex flex-col items-center justify-center"
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
        <p class="text-center text-base font-manrope text-grey-primary">
          {{ card.content }}
        </p>
      </base-card>
    </div>
  </section>
</template>

<script>
import BaseCard from '@/components/BaseComponents/BaseCard';
import BaseIcon from '@/components/BaseComponents/BaseIcon';

export default {
  name: 'OurAdventages',

  components: {
    BaseCard,
    BaseIcon,
  },

  data() {
    return {
      adventages: [
        {
          title: 'All Areas Included',
          icon: 'doble-arrow',
          content:
            'We provide the highest quality of freelance tech talent for any design.',
          color: 'blue-primary',
        },
        {
          title: 'Risk Free',
          icon: 'like',
          content:
            'Pay only if satisfied. We offer a risk-free trial period for all freelancers.',
          color: 'orange-primary',
        },
        {
          title: 'Only Professionals',
          icon: 'group',
          content:
            'Our freelancers have a tried and tested track record of brilliance.',
          color: 'purple-secondary',
        },
        {
          title: 'Fluent English',
          icon: 'translate',
          content:
            'We make sure all of our freelancers speak, read, and write English crearly.',
          color: 'pink-primary',
        },
      ],
    };
  },
};
</script>

<style>
.our-adventages {
  padding: 215px 50px;
  margin-top: 150px;
  margin-bottom: 150px;
}
.our-adventages .svg {
  z-index: 5;
}
.our-adventages .base-card {
  padding: 35px 20px;
  background-color: theme('colors.white');
  max-width: 265px;
}
.our-adventages .base-card h3 {
  margin-bottom: 25px;
  font-size: 18px;
}
.our-adventages .base-card .card-icon {
  width: 70px;
  height: 60px;
  border-radius: 8px;
  font-size: 25px;
  box-shadow: 2px 0 27px rgba(94, 115, 249, 0.19);
  margin-bottom: 30px;
}
.our-adventages .content {
  grid-template-columns: repeat(4, 265px);
  column-gap: 25px;
}
.our-adventages .dot-overlay {
  background-image: radial-gradient(#d9ebe8 20%, transparent 20%);
  background-position: 0 0;
  background-size: 30px 30px;
  position: absolute;
  top: -55px;
  width: 175px;
  height: 210px;
}
</style>
