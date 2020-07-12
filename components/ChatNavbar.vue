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
      <li>Chat</li>
      <li>Orders</li>
      <li>Shipping</li>
      <li>Payment</li>
      <li>Settings</li>
    </ul>

    <div class="user-menu flex items-center justify-between cursor-pointer">
      <div class="user-data flex items-center justify-start">
        <!-- User picture -->
        <div class="thumb rounded-full bg-white">
          <img
            class="rounded-full w-full h-full object-cover"
            src="/images/jpg/profile.jpg"
            alt="User profile"
          />
        </div>
        <div class="name font-manrope text-white font-medium">Nancy Holmes</div>
      </div>
      <div class="menu-action flex items-center justify-center text-white">
        <base-icon name="arrow-left" />
      </div>
    </div>
  </div>
</template>

<script>
// import BaseButton from '@/components/BaseComponents/BaseButton';
import BaseIcon from '@/components/BaseComponents/BaseIcon';

export default {
  name: 'ChatNavbar',

  components: {
    BaseIcon,
    // BaseButton,
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
  display: flex;
  align-items: center;
  justify-content: center;
}
.chat-navbar ul li:not(:last-child) {
  margin-right: 45px;
}
.chat-navbar ul li.button-link:not(:last-child) {
  margin-right: 14px;
}
.chat-navbar .thumb {
  width: 50px;
  height: 50px;
  padding: 2px;
  margin-right: 10px;
  box-shadow: 2px 0px 24px rgba(139, 149, 169, 0.24);
}
.chat-navbar .menu-action .svg-icon {
  font-size: 12px;
  transform: rotate(-90deg);
  margin-left: 10px;
}
</style>
