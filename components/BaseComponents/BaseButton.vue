<template>
  <button
    class="base-button font-manrope font-extrabold text-base rounded-sm"
    :class="classNames"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    color: {
      type: String,
      default: 'white',
    },
    shadow: Boolean,
    rounded: Boolean,
    outlined: Boolean,
  },

  computed: {
    classNames() {
      return {
        [`base-button--${this.color}`]: this.color,
        'base-button--outlined': this.outlined,
        'shadow-btn': this.shadow,
        'rounded-full': this.rounded,
      };
    },
  },
};
</script>

<style>
.base-button {
  padding: 13px 30px;
}
.base-button--white {
  background-color: theme('colors.white');
  color: theme('colors.red.primary');
}
.base-button--white.base-button--outlined {
  border: 1px solid theme('colors.red.primary');
}
.base-button--danger {
  background-color: theme('colors.red.primary');
  color: theme('colors.white');
}
</style>
