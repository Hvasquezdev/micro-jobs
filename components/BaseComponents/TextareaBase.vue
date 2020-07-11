<template>
  <div class="textarea-wrapper w-full flex flex-col text-base items-start">
    <label v-if="label" class="text-grey-light-2">{{ label }}</label>
    <textarea
      class="font-grey-primary w-full outline-none resize-none"
      maxlength="250"
      @keydown="checkMaxLenght()"
      @keyup="checkMaxLenght()"
    >
    </textarea>
    <div class="text-grey-light-2 w-full letter-count text-right">
      250 Characters Left
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextareaBase',
  props: {
    label: {
      type: String,
      default: '',
    },
  },
  methods: {
    checkMaxLenght() {
      const textareaEl = this.$el.querySelector('textarea');
      const counter = this.$el.querySelector('.letter-count');
      const onlyLetters = /\w/gi;
      const letterCount = textareaEl.value.match(onlyLetters)?.length || 0;
      counter.textContent = `${
        textareaEl.maxLength - letterCount
      } Characters Left`;
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
