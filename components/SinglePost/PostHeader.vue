<template>
  <div class="post-header">
    <ul class="header-links text-center font-manrope grid w-full font-bold">
      <li class="cursor-pointer is-active">Advanced</li>
      <li class="cursor-pointer">Premium</li>
      <li class="cursor-pointer">Premium</li>
      <li class="cursor-pointer">Premium</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavHeader',
};
</script>

<style>
.post-header .header-links {
  grid-template-columns: repeat(4, 1fr);
}
.post-header .header-links li {
  padding: 15px 17px;
  color: theme('colors.grey.primary');
  border-bottom: 1px solid #dfe3e3;
  transition: all 0.3s;
}
.post-header .header-links li.is-active {
  color: theme('colors.red.primary');
  border-bottom: 2px solid theme('colors.red.primary');
}
</style>
