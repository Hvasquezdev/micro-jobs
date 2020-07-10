<template>
  <section class="sign-up-client">
    <!-- Form  -->
    <base-card class="form-wrapper h-full flex flex-col w-full">
      <h1 class="text-dark-primary font-normal mb-6">
        Create a Free <span class="font-bold">Client Account</span>
      </h1>
      <p class="text-grey-primary">
        Looking for a work? Sign up as <a href="#">freelancer</a>.
      </p>
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
        <!-- Country -->
        <div
          class="dropdown text-grey-primary text-base flex items-center font-normal input-wrapper"
        >
          <label for="country">Country</label>
          <select
            id="country"
            name="country"
            class="block appearance-none w-full py-3 px-4 leading-tight focus:outline-none focus:bg-white"
          >
            <option>Country</option>
            <option>ipsum</option>
            <option>dolor</option>
          </select>
        </div>
        <!-- Terms of service, privacy policy...  -->
        <label class="checkbox flex items-center" for="acept-terms">
          <input id="acept-terms" type="checkbox" name="acept-terms" />
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
export default {};
</script>

<style>
.sign-up-client {
  max-width: 1140px;
  margin: 100px auto;
}
.sign-up-client h1 {
  font-size: 45px;
}
.sign-up-client .form-wrapper > p {
  font-size: 17px;
  font-weight: 400; /*regular*/
  margin-bottom: 92px;
}

.sign-up-client .form-wrapper {
  padding: 47px;
}

.sign-up-client .get-started {
  width: 216px;
  height: 62px;
  margin: 54px auto 0;
}
.sign-up-client .input-wrapper {
  margin-bottom: 46px;
  max-width: 475px;
  width: 100%;
}
.sign-up-client .input-wrapper.dropdown {
  max-width: 100%;
  margin-bottom: 22px;
}
.sign-up-client select {
  background-image: url('/images/png/dropdown-arrow.png'); /*list down icon*/
  background-repeat: no-repeat;
  background-position: 100% center;
  border-bottom: 1px solid #dfe3e3;
}
.sign-up-client .dropdown label {
  display: none;
}
.sign-up-client input[type='checkbox'] {
  height: 22px;
  width: 22px;
  border-radius: 15px;
  border-color: #cbcbd2;
  margin-right: 16px;
}

.sign-up-client a {
  color: theme('colors.green.secondary');
  font-weight: 700; /*bold*/
}
.sign-up-client label a {
  border-bottom: 1px solid theme('colors.green.secondary');
}
</style>
