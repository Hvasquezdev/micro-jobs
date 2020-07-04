<template>
  <div class="navbar flex items-center justify-between">
    <div class="brand-logo">
      <img src="/images/png/logo.png" alt="Micro Jobs" />
    </div>

    <ul class="flex items-center list-none text-white text-base font-manrope">
      <li>Buy</li>
      <li>Sell</li>
      <li>How it works</li>
      <li class="button-link">
        <base-button color="white" rounded shadow>
          Login or Register
        </base-button>
      </li>
      <li class="button-link">
        <base-button color="danger" rounded shadow>
          Start Selling
        </base-button>
      </li>
    </ul>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseComponents/BaseButton';

export default {
  name: 'Navbar',

  components: {
    BaseButton,
  },
};
</script>

<style>
.navbar {
  padding: 27px 55px;
}
.navbar ul li:not(:last-child) {
  margin-right: 45px;
}
.navbar ul li.button-link:not(:last-child) {
  margin-right: 14px;
}
</style>
