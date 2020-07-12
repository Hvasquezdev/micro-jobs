<template>
  <label class="base-radio" @click="$emit('input', !value)">
    <div class="control">
      <input
        v-model="radioButtonValue"
        type="radio"
        :name="name"
        :value="value"
      />
      <!-- Green dot  -->
      <div class="dot"></div>
    </div>
    {{ label }}
  </label>
</template>

<script>
export default {
  props: {
    value: Boolean,
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },

  computed: {
    radioButtonValue: {
      get() {
        return this.value;
      },
      set() {
        // Communicate the change to parent component so that selectedValue can be updated
        this.$emit('change', this.label);
      },
    },
  },
};
</script>

<style>
.base-radio {
  display: flex;
  align-items: center;
  width: auto;
  font-size: 16px;
  color: theme('colors.grey.light-2');
}

.base-radio .control {
  height: 28px;
  width: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 99999px;
  border: 2px solid theme('colors.green.primary');
  position: relative;
  margin-right: 18px;
}
.base-radio input[type='radio'] {
  visibility: hidden;
}
.base-radio .control .dot {
  height: 12px;
  width: 12px;
  border-radius: 99999px;
  background-color: theme('colors.green.primary');
  position: absolute;
  visibility: hidden;
}
.base-radio input[type='radio']:checked + .dot {
  visibility: visible;
}
</style>
