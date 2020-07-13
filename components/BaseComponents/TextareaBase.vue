<template>
  <div class="textarea-wrapper w-full flex flex-col text-base items-start">
    <label v-if="label" class="text-grey-light-2">{{ label }}</label>
    <textarea
      class="font-grey-primary w-full outline-none resize-none"
      :maxlength="maxLength"
      :value="value"
      v-bind="$attrs"
      v-on="listeners"
    >
    </textarea>
    <div class="text-grey-light-2 w-full letter-count text-right">
      {{ maxLength - value.length }} Characters Left
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextareaBase',
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    maxLength: {
      type: Number,
      default: 250,
    },
  },

  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.onInput,
      };
    },
  },

  methods: {
    onInput(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

<style>
.textarea-wrapper .letter-count {
  font-size: 15px;
  visibility: hidden;
  margin-top: 20px;
}
.textarea-wrapper label {
  margin-bottom: 22px;
}
.textarea-wrapper textarea:focus + .letter-count {
  visibility: visible;
}
.textarea-wrapper textarea {
  border-bottom: 1px solid theme('colors.grey.light-3');
  margin: 0px 0 22px;
  line-height: 1;
}
</style>
