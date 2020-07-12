<template>
  <section class="sign-up-form font-manrope flex flex-col items-center">
    <!-- Format -->
    <ul
      v-if="hasTabs"
      class="form-type flex items-center justify-center w-auto"
    >
      <li class="cursor-pointer is-active">Client Account</li>
      <li class="cursor-pointer">Freelancer Account</li>
    </ul>
    <!-- Form  -->
    <base-card
      class="form-wrapper h-full flex flex-col w-full relative bg-white"
    >
      <div class="overlay z-10"></div>

      <h1 class="text-dark-secondary font-normal mb-6">
        Create a Free <span class="font-bold">Client Account</span>
      </h1>
      <p class="text-grey-primary">Looking for a work? Fill out the form.</p>
      <form
        class="h-full w-full flex flex-wrap justify-between content-center"
        action="post"
      >
        <!-- First name  -->
        <base-input class="input-wrapper" label="First Name" />
        <!-- Last Name  -->
        <base-input class="input-wrapper" label="Last Name" />
        <!-- Addres  -->
        <base-input class="input-wrapper" type="email" label="Email Address" />
        <!-- Password  -->
        <base-input class="input-wrapper" type="password" label="Password" />
        <!-- Company Name  -->
        <div
          class="dropdown text-grey-primary text-base flex items-center font-normal input-wrapper"
        >
          <label for="company-name"> Company Name</label>
          <select
            id="company-name"
            name="company-name"
            class="block appearance-none w-full py-3 pr-4 leading-tight focus:outline-none focus:bg-white"
            au
          >
            <option value="" disabled selected>Company Name</option>
            <option>ipsum</option>
            <option>dolor</option>
          </select>
        </div>
        <!-- Country -->
        <div
          class="dropdown text-grey-primary text-base flex items-center font-normal input-wrapper"
        >
          <label for="country">Country</label>
          <select
            id="country"
            name="country"
            class="block appearance-none w-full py-3 pr-4 leading-tight focus:outline-none focus:bg-white"
          >
            <option value="" disabled selected>Country</option>
            <option>ipsum</option>
            <option>dolor</option>
          </select>
        </div>
        <!--Help  -->
        <label class="checkbox-wrapper flex items-center" for="send-help">
          <div class="checkbox">
            <input id="send-help" type="checkbox" name="send-help" />
            <!-- Custom Checkbox  -->
            <div class="custom-checkbox">
              <base-icon class="icon-checked" name="checked" />
            </div>
          </div>
          <span class="text-grey-light-2"
            >Yes! Send me genuinely useful emails every now and then to help me
            get the most out of Micro-Jobs.</span
          >
        </label>
        <!-- Terms of service, privacy policy...  -->
        <label class="checkbox-wrapper flex items-center" for="acept-terms">
          <div class="checkbox">
            <input id="acept-terms" type="checkbox" name="acept-terms" />
            <!-- Custom Checkbox  -->
            <div class="custom-checkbox">
              <base-icon class="icon-checked" name="checked" />
            </div>
          </div>
          <span class="text-grey-light-2"
            >Yes, I understand and agree to the Micro-Jobs
            <a href="#"> Terms of Service</a>, including the user
            <a href="#">Agreement</a> and <a href="#">Privacy Policy</a>.</span
          >
        </label>
        <!-- Get Started  -->
        <base-button rounded outlined color="danger" class="get-started">
          Get Started</base-button
        >
      </form>
    </base-card>
  </section>
</template>

<script>
import BaseCard from '@/components/BaseComponents/BaseCard';
import BaseButton from '@/components/BaseComponents/BaseButton';
import BaseInput from '@/components/BaseComponents/BaseInput';
import BaseIcon from '@/components/BaseComponents/BaseIcon';

export default {
  name: 'SignUp',

  components: {
    BaseCard,
    BaseButton,
    BaseInput,
    BaseIcon,
  },

  props: {
    hasTabs: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style>
.sign-up-form {
  max-width: 1140px;
}
.sign-up-form h1 {
  font-size: 45px;
}
.sign-up-form .form-wrapper > p {
  font-size: 17px;
  font-weight: 400; /*regular*/
  margin-bottom: 92px;
}

.sign-up-form .form-wrapper {
  padding: 47px;
}

.sign-up-form .get-started {
  width: 216px;
  height: 62px;
  margin: 40px auto 36px;
}
.sign-up-form .input-wrapper {
  margin-bottom: 46px;
  max-width: 475px;
  width: 100%;
}
.sign-up-form .checkbox-wrapper {
  margin-bottom: 23px;
  width: 100%;
}
.sign-up-form select {
  background-image: url('/images/png/dropdown-arrow.png'); /*list down icon*/
  background-repeat: no-repeat;
  background-position: 100% center;
  border-bottom: 1px solid #dfe3e3;
}
.sign-up-form .dropdown label {
  display: none;
}
.sign-up-form input[type='checkbox'] {
  height: 22px;
  width: 22px;
  border-radius: 15px;
  border-color: #cbcbd2;
  margin-right: 16px;
}

.sign-up-form input[type='checkbox'] {
  visibility: hidden;
  position: absolute;
}

.sign-up-form a {
  color: theme('colors.green.secondary');
  font-weight: 700; /*bold*/
  border-bottom: 1px solid theme('colors.green.secondary');
}

.sign-up-form .form-type li {
  color: theme('colors.grey.light-2');
  width: 238px;
  text-align: center;
  padding-bottom: 16px;
  font-size: 20px;
}
.sign-up-form .form-type {
  border-bottom: 1px solid theme('colors.grey.light-3');
}
.sign-up-form .form-type li:first-child {
  margin-right: 165px;
}
.sign-up-form .form-type li.is-active {
  border-bottom: 3px solid theme('colors.green.primary');
  color: theme('colors.green.primary');
  font-weight: 700; /*bold*/
}
.sign-up-form .overlay {
  background-image: radial-gradient(#d9ebe8 20%, transparent 25%);
  background-position: 0 0;
  background-size: 22px 22px;
  position: absolute;
  bottom: -40px;
  right: -85px;
  width: 175px;
  height: 150px;
  z-index: -1;
}
/* Custom Input Checked Styles  */
.sign-up-form input[type='checkbox'],
.custom-checkbox,
.checkbox {
  width: 22px;
  height: 22px;
}
.sign-up-form .checkbox {
  position: relative;
  margin-right: 12px;
}
.sign-up-form .custom-checkbox {
  border: 1px solid #cbcbd2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  position: absolute;
}
.sign-up-form .custom-checkbox .icon-checked {
  position: absolute;
  transform: scale(0.8);
  visibility: hidden;
}
.sign-up-form input[type='checkbox']:checked + .custom-checkbox .icon-checked {
  visibility: visible;
}
.sign-up-form input[type='checkbox']:checked + .custom-checkbox {
  border-color: theme('colors.green.primary');
}
</style>
