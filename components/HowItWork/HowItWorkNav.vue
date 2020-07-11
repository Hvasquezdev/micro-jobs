<template>
  <base-card class="how-it-work-nav flex justify-between font-manrope bg-white">
    <!-- Navigation  -->
    <nav class="w-auto">
      <ul class="text-base font-normal flex text-dark-primary items-center">
        <li>
          <a class="is-active" href="#">Introduction</a>
        </li>
        <li>
          <a href="#">How do i hire</a>
        </li>
        <li>
          <a href="#">Payments</a>
        </li>
        <li>
          <a href="#">You're protected</a>
        </li>
        <li>
          <a href="#">Frequently asked questions</a>
        </li>
      </ul>
    </nav>
    <!-- Start Selling Button -->
    <base-button class="text-lg btn" rounded shadow color="danger"
      >Star Selling</base-button
    >
  </base-card>
</template>

<script>
import BaseCard from '@/components/BaseComponents/BaseCard';
import BaseButton from '@/components/BaseComponents/BaseButton';
export default {
  name: 'HowItWorkNav',
  components: {
    BaseCard,
    BaseButton,
  },
};
</script>

<style>
.how-it-work-nav {
  max-width: 1140px;
  padding: 34px 33px;
}
.how-it-work-nav .btn {
  width: 100%;
  max-width: 195px;
  height: 62px;
}
.how-it-work-nav li {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}
.how-it-work-nav li {
  margin-right: 50px;
}
.how-it-work-nav li a {
  font-size: 16px;
  position: relative;
}
.how-it-work-nav a.is-active {
  color: theme('colors.red.primary');
  font-weight: 700; /*bold*/
}

.how-it-work-nav a.is-active::after {
  content: '';
  position: absolute;
  width: 19px;
  height: 3px;
  border-radius: 40px;
  background-color: theme('colors.red.primary');
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
