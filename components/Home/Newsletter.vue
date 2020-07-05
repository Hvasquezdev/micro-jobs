<template>
  <section
    class="newsletter flex flex-col items-center justify-center relative"
  >
    <div class="dot-overlay"></div>

    <h2 class="font-manrope text-white">
      Join Our Monthly <strong>Newsletter</strong>
    </h2>
    <p class="font-manrope text-white text-base">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, impedit?
    </p>

    <div
      class="newsletter-form text-grey-tertiary bg-white rounded-full shadow-btn flex items-center justify-between"
    >
      <base-input
        class="w-full mr-4"
        placeholder="Enter Your Email Address"
        :border="false"
      />
      <base-button color="danger" class="capitalize flex-shrink-0" rounded>
        sign up
      </base-button>
    </div>
  </section>
</template>

<script>
import BaseInput from '@/components/BaseComponents/BaseInput';
import BaseButton from '@/components/BaseComponents/BaseButton';

export default {
  name: 'Newsletter',

  components: {
    BaseInput,
    BaseButton,
  },
};
</script>

<style>
.newsletter {
  background: rgb(58, 147, 129);
  background: linear-gradient(
    90deg,
    rgba(58, 147, 129, 1) 0%,
    rgba(65, 157, 138, 1) 52%,
    rgba(87, 173, 155, 1) 100%
  );
  padding: 60px 40px 55px 40px;
  box-shadow: 4px 0 24px rgba(65, 157, 138, 0.41);
}
.newsletter h2 {
  font-size: 45px;
  margin-bottom: 20px;
}
.newsletter strong {
  font-weight: 800;
}
.newsletter .newsletter-form {
  padding: 8px 8px 8px 30px;
  width: 90%;
  max-width: 815px;
  margin-top: 55px;
}
.newsletter .newsletter-form .base-input {
  color: theme('colors.grey.tertiary');
}
.newsletter .newsletter-form .base-button {
  box-shadow: 4px 0 21px rgb(237, 133, 144, 0.26);
  height: 59px;
  padding-left: 55px;
  padding-right: 55px;
}
.newsletter .dot-overlay {
  background-image: radial-gradient(#69b2a3 20%, transparent 20%);
  background-position: 0 0;
  background-size: 30px 30px;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 120px;
  height: 150px;
}
</style>
