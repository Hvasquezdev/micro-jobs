<template>
  <nav :class="className" class="breadcrumb">
    <ul
      class="flex items-center justify-center flex-wrap text-center p-0 s-md2:flex-row"
    >
      <template v-if="items !== undefined && items.length > 0">
        <li v-for="(item, index) in items" :key="index" class="relative">
          <router-link
            :to="item.url"
            class="breadcrumb-link capitalize font-manrope"
            exact
            exact-active-class="active-breadcrumb font-semibold"
          >
            {{ item.text }}
          </router-link>

          <base-icon class="absolute" name="arrow-right" />
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
import BaseIcon from '@/components/BaseComponents/BaseIcon';

export default {
  name: 'Breadcrumb',

  components: {
    BaseIcon,
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
    isRight: Boolean,
  },

  computed: {
    className() {
      return {
        'breadcrumb--right': this.isRight,
      };
    },
  },
};
</script>

<style>
.breadcrumb ul li {
  align-items: center;
  display: flex;
  font-size: 16px;
}
.breadcrumb ul li .breadcrumb-link {
  color: theme('colors.grey.primary');
  padding: 0;
}
.breadcrumb ul li .svg-icon {
  font-size: 8px;
  right: -13px;
  top: calc(50% - 2px);
}
.breadcrumb ul li:last-child .svg-icon {
  display: none;
}
.breadcrumb ul li:not(:last-child) {
  padding-bottom: 18px;
  margin-right: 10px;
}
.breadcrumb ul li:not(:first-child) {
  margin-left: 10px;
}
.breadcrumb .breadcrumb-link.active-breadcrumb {
  color: theme('colors.red.primary');
  font-weight: 700;
}
@screen md {
  .breadcrumb ul li:not(:first-child)::before {
    display: block;
  }
  .breadcrumb ul li {
    padding-bottom: 0 !important;
    font-size: 18px;
  }
  .breadcrumb--right ul {
    justify-content: flex-end !important;
  }
}
</style>
