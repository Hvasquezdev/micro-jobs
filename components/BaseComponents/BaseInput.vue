<template>
  <div :class="classNames" class="base-input flex items-center">
    <label v-if="label" class="font-manrope text-grey-primary text-base">
      {{ label }}
    </label>
    <input
      class="input font-manrope appearance-none border-none w-full text-grey-primary text-base leading-tight focus:outline-none"
      :value="value"
      :type="type"
      v-bind="$attrs"
      v-on="listeners"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',

  model: {
    prop: 'value',
    event: 'input',
  },

  props: {
    value: {
      type: [String, Number],
      default: undefined,
    },
    type: {
      type: String,
      default: 'text',
    },
    borderSize: {
      type: [String, Boolean],
      default: '2',
    },
    border: {
      type: [String, Boolean],
      default: 'b',
    },
    label: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      focused: false,
    };
  },

  computed: {
    classNames() {
      return {
        [`border-${this.border}-${this.borderSize}`]:
          this.border && this.borderSize,
        [`border-${this.border}`]: this.border,
        'is-active': this.focused || this.value,
      };
    },
    listeners() {
      return {
        ...this.$listeners,
        input: this.onInput,
        blur: this.onBlur,
        focus: this.onFocus,
      };
    },
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value);
    },
    onFocus() {
      this.focused = true;
    },
    onBlur() {
      this.focused = false;
    },
  },
};
</script>

<style>
.base-input {
  border-color: #dfe3e3;
  padding: 10px 0;
  position: relative;
}
.base-input label {
  position: absolute;
  left: 0;
  pointer-events: none;
  transition: all 0.25s;
}
.base-input.is-active label {
  padding-bottom: 40px;
  font-size: 14px;
}
.base-input .input {
  background-color: transparent;
}
</style>
