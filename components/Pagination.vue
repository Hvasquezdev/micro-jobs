<template>
  <nav class="pagination flex justify-center items-center font-manrope">
    <!-- Prev  Button -->
    <base-button
      class="btn-back btn-navigation flex items-center justify-center"
      rounded
    >
      <base-icon name="arrow-left" />
    </base-button>
    <!-- Pages Link -->
    <ul class="mx-3 flex items-center justify-center">
      <li><a href="#">1</a></li>
      <li><a class="is-current-page" href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">...</a></li>
      <li><a href="#">12</a></li>
      <li><a href="#">13</a></li>
    </ul>
    <!-- Next Button -->
    <base-button
      class="btn-next is-active btn-navigation flex items-center justify-center"
      rounded
    >
      <base-icon class="arrow" name="arrow-right" />
    </base-button>
    <!-- Search Page  -->
    <div class="search-page flex ml-6 items-center text-grey-light-6">
      <label class="text-base font-normal mr-5" for="search-page"
        >Go to page</label
      >
      <input
        id="search-page"
        class="rounded mr-4"
        type="search"
        name="search-page"
      />
      <!-- Go Button  -->
      <base-button
        class="bnt-go btn-navigation flex items-center justify-center"
        rounded
      >
        Go
        <base-icon class="ml-3" name="arrow-left" />
      </base-button>
    </div>
  </nav>
</template>

<script>
import BaseIcon from '@/components/BaseComponents/BaseIcon';
import BaseButton from '@/components/BaseComponents/BaseButton';

export default {
  name: 'Pagination',
  components: {
    BaseButton,
    BaseIcon,
  },
};
</script>
<style>
.pagination .btn-navigation,
a {
  padding: 0;
  color: theme('colors.dark.primary');
  height: 40px;
  width: 40px;
}
.pagination .svg-icon {
  height: 10px;
}
.pagination ul a {
  font-size: 18px;
  font-weight: 500; /*medium*/
  display: flex;
  align-items: center;
  justify-content: center;
  color: theme('colors.grey.primary');
  border-radius: 50%;
}
/* Current page link style */
.pagination .is-current-page {
  background-color: theme('colors.red.primary');
  color: #ffffff;
}
/* Go Button active class  */
.pagination .btn-navigation.is-active {
  background-color: #fff5f4;
  color: theme('colors.red.primary');
}
.pagination li:not(:last-child) {
  margin-right: 8px;
}
.pagination input[type='search'] {
  width: 45px;
  height: 31px;
  border: 1px solid theme('colors.red.primary');
  text-indent: 5px;
  font-size: 12px;
  outline: none;
}
.pagination .search-page .svg-icon {
  transform: rotate(-180deg);
}
</style>
