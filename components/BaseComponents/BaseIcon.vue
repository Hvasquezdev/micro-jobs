<template>
  <icon :name="name" :class="className" />
</template>

<script>
import '@/components/icons';
import SvgIcon from 'vue-svgicon';

export default {
  components: {
    icon: SvgIcon,
  },
  props: {
    name: { type: String, default: null },
    spin: Boolean,
  },
  computed: {
    className() {
      return {
        'svg--spin': this.spin,
      };
    },
  },
};
</script>

<style lang="css">
.svg-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  line-height: 1rem;
  color: inherit;
  vertical-align: middle;
  fill: currentColor;
  stroke: none;
}
.svg--spin {
  animation: spin 1s steps(8, end) infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
