<template>
  <div
    :class="classNames"
    class="navbar flex items-center justify-between overflow-hidden"
  >
    <div
      v-if="hasBackground"
      class="navbar-shape h-auto absolute left-0 top-0 pointer-events-none"
    >
      <img src="/images/png/navbar-shape.png" alt="Banner left shape" />
    </div>

    <div class="brand-logo">
      <img src="/images/png/logo.png" alt="Micro Jobs" />
    </div>

    <ul class="flex items-center list-none text-white text-base font-manrope">
      <li>
        <nuxt-link to="/">
          Buy
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">
          Sell
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/howitworks">
          How it works
        </nuxt-link>
      </li>
      <li class="button-link">
        <base-button
          color="white"
          rounded
          shadow
          @click="$router.push('register')"
        >
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

  props: {
    hasBackground: Boolean,
  },

  computed: {
    classNames() {
      return {
        'has-background': this.hasBackground,
      };
    },
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
.navbar.has-background {
  background: rgb(58, 147, 129);
  background: linear-gradient(
    90deg,
    rgba(58, 147, 129, 1) 0%,
    rgba(65, 157, 138, 1) 52%,
    rgba(87, 173, 155, 1) 100%
  );
}
</style>
