<template>
  <footer class="the-footer relative w-full">
    <div class="dot-overlay absolute"></div>
    <div class="ellipse-overlay absolute"></div>

    <div class="content ml-auto mr-auto">
      <div class="main-content flex items-center justify-between">
        <div class="brand-logo">
          <img
            src="/images/png/logo.png"
            alt="Micro Jobs"
            width="175"
            height="50"
          />
        </div>
        <ul
          class="links capitalize flex items-center list-none text-white text-base font-manrope"
        >
          <li>Buy</li>
          <li>Sell</li>
          <li>How it works</li>
          <li>Pricing plans</li>
          <li>Contact us</li>
        </ul>
        <ul class="social flex items-center justify-between">
          <li>
            <base-icon name="facebook" />
          </li>
          <li>
            <base-icon name="twitter" />
          </li>
          <li>
            <base-icon name="google-plus" />
          </li>
          <li>
            <base-icon name="pinterest" />
          </li>
        </ul>
      </div>

      <div class="separator w-full"></div>

      <p class="font-manrope text-white text-center copyright">
        &copy; Designed with love by diadea3007
      </p>
    </div>
  </footer>
</template>

<script>
import BaseIcon from '@/components/BaseComponents/BaseIcon';

export default {
  name: 'TheFooter',

  components: {
    BaseIcon,
  },
};
</script>

<style>
.the-footer {
  padding: 40px 40px 25px 40px;
  background: rgb(58, 147, 129);
  background: linear-gradient(
    90deg,
    rgba(58, 147, 129, 1) 0%,
    rgba(65, 157, 138, 1) 52%,
    rgba(87, 173, 155, 1) 100%
  );
}
.the-footer .content {
  max-width: 1140px;
  width: 90%;
}
.the-footer .content .links {
  font-size: 15px;
}
.the-footer .content .links > *:not(:last-child) {
  margin-right: 40px;
}
.the-footer .content .social > li {
  font-size: 20px;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: theme('colors.green.primary');
}
.the-footer .content .social > *:not(:last-child) {
  margin-right: 13px;
}
.the-footer .content .separator {
  height: 1px;
  background-color: #50ad9a;
  margin-top: 35px;
  margin-bottom: 30px;
}
.the-footer .content .copyright {
  font-size: 15px;
}
.the-footer .dot-overlay {
  background-image: radial-gradient(#64ad9e 20%, transparent 20%);
  background-position: 0 0;
  background-size: 15px 15px;
  position: absolute;
  right: 0;
  bottom: 30px;
  width: 65px;
  height: 122px;
}
.the-footer .ellipse-overlay {
  background-image: url('/images/png/footer-ellipse.png');
  background-position: center;
  background-size: contain;
  width: 50px;
  height: 115px;
  left: 0;
  bottom: 35px;
}
</style>
