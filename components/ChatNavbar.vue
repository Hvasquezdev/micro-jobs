<template>
  <div class="chat-navbar flex items-center justify-between overflow-hidden">
    <div class="navbar-shape h-auto absolute left-0 top-0 pointer-events-none">
      <img src="/images/png/navbar-shape.png" alt="Banner left shape" />
    </div>

    <div class="brand-logo">
      <img src="/images/png/logo.png" alt="Micro Jobs" />
    </div>

    <ul
      class="center-links h-full flex items-center list-none text-white text-base font-manrope"
    >
      <li>Buy</li>
      <li>Sell</li>
      <li>How it works</li>
    </ul>

    <ul class="flex items-center list-none text-white text-base font-manrope">
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
  name: 'ChatNavbar',

  components: {
    BaseButton,
  },
};
</script>

<style>
.chat-navbar {
  height: 100px;
  padding: 0px 55px;
  background: rgb(58, 147, 129);
  background: linear-gradient(
    90deg,
    rgba(58, 147, 129, 1) 0%,
    rgba(65, 157, 138, 1) 52%,
    rgba(87, 173, 155, 1) 100%
  );
}
.chat-navbar .center-links li {
  height: 100%;
}
.chat-navbar ul li:not(:last-child) {
  margin-right: 45px;
}
.chat-navbar ul li.button-link:not(:last-child) {
  margin-right: 14px;
}
</style>
