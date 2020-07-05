<template>
  <div
    :class="classNames"
    class="base-card font-manrope text-base flex items-center justify-center"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card',

  props: {
    shadow: {
      type: Boolean,
      default: true,
    },
    rounded: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    classNames() {
      return {
        'shadow-card': this.shadow,
        'rounded-md': this.rounded,
      };
    },
  },
};
</script>

<style>
.base-card {
  padding: 18px 20px;
}
</style>
