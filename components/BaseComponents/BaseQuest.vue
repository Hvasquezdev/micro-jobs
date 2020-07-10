<template>
  <div v-if="label" class="quest-accordion flex flex-col font-manrope">
    <base-button class="btn w-full bg-no-repeat" @click="expand()">{{
      label
    }}</base-button>
    <slot />
  </div>
</template>

<script>
import BaseButton from '@/components/BaseComponents/BaseButton';

export default {
  name: 'BaseQuest',
  components: {
    BaseButton,
  },
  props: {
    label: {
      type: String,
      default: '',
    },
  },
  methods: {
    expand() {
      const btn = this.$el.querySelector('.btn');
      btn.classList.toggle('is-expanded');
    },
  },
};
</script>

<style>
.quest-accordion {
  width: 1140px;
  border-bottom: 1px solid theme('colors.grey.light-3');
  background: transparent;
}
.quest-accordion:last-child {
  border-bottom: none;
}
.quest-accordion .btn {
  color: theme('colors.dark.primary');
  text-align: left;
  font-size: 20px;
  padding: 30px 64px;
  background-position: 0 center;
  background-color: transparent;
  background-image: url('/images/png/plus.png');
  transition: all 0.06s;
}
.quest-accordion .btn.is-expanded {
  background-image: url('/images/png/minus.png');
}
.quest-accordion p {
  margin: 0 0 40px;
  padding-left: 66px;
  display: none;
  color: theme('colors.grey.light-8');
}
.quest-accordion .btn.is-expanded + p {
  display: block;
}
</style>
