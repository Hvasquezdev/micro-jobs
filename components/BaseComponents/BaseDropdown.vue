<template>
  <div
    :class="{ 'is-open': value }"
    class="base-dropdown w-full flex flex-col items-center justify-center"
  >
    <!-- Dropdown Header -->
    <base-button
      class="dropdown-header w-full flex items-center justify-between font-manrope"
      @click="$emit('input', !value)"
    >
      <h4 class="title font-semibold">
        {{ label }}
      </h4>

      <base-icon name="arrow-left" />
    </base-button>

    <!-- Dropdown Content -->
    <div
      class="dropdown-items w-full font-manrope overflow-hidden flex flex-col items-start justify-center"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseComponents/BaseButton';
import BaseIcon from '@/components/BaseComponents/BaseIcon';

export default {
  name: 'BaseDropdown',

  components: {
    BaseButton,
    BaseIcon,
  },

  props: {
    label: {
      type: String,
      default: '',
    },
    value: Boolean,
  },
};
</script>

<style>
.base-dropdown .dropdown-header {
  padding: 0 0 15px 0;
  border-bottom: 1px solid theme('colors.grey.light-3');
  margin-bottom: 23px;
  color: theme('colors.dark.secondary');
}
.base-dropdown .dropdown-header .title {
  font-size: 18px;
}
.base-dropdown .dropdown-header .svg-icon {
  transform: rotate(90deg);
  font-size: 12px;
}
.base-dropdown.is-open .dropdown-header .svg-icon {
  transform: rotate(-90deg);
}
.base-dropdown .dropdown-items {
  font-size: 15px;
  height: 0;
  transition: all 0.3s;
}
.base-dropdown .dropdown-items a {
  color: theme('colors.grey.darken-1');
}
.base-dropdown.is-open .dropdown-items {
  height: auto;
  margin-bottom: 23px;
  color: theme('colors.grey.darken-1');
}
.base-dropdown.is-open .dropdown-items strong {
  color: theme('colors.dark.secondary');
}
.base-dropdown .dropdown-items > *:not(:last-child) {
  margin-bottom: 20px;
}
</style>
