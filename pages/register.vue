<template>
  <div
    class="register-page flex flex-col items-center justify-center ml-auto mr-auto relative overflow-hidden"
  >
    <div class="dot-overlay"></div>
    <bread-crumb class="mr-auto ml-auto" :items="routes" />
    <signup-form />
  </div>
</template>

<script>
import SignupForm from '@/components/SignUp/SignUp';
import BreadCrumb from '@/components/BreadCrumb';

export default {
  name: 'Register',

  layout: 'auth',

  components: {
    SignupForm,
    BreadCrumb,
  },

  data() {
    return {
      routes: [
        {
          text: 'Home',
          url: '/',
        },
        {
          text: 'Login/Signup',
          url: '/register',
        },
      ],
    };
  },
};
</script>

<style>
.register-page {
  padding: 30px 0 70px 0;
}
.register-page .breadcrumb {
  max-width: 1140px;
  width: 90%;
}
.register-page .breadcrumb ul {
  justify-content: flex-start;
}
.register-page .sign-up-form {
  width: 90%;
  max-width: 1140px;
  margin: 45px auto 0 auto;
}
.register-page .dot-overlay {
  background-image: radial-gradient(#d9ebe8 20%, transparent 25%);
  background-position: 0 0;
  background-size: 22px 22px;
  position: absolute;
  top: 150px;
  left: 0;
  width: 95px;
  height: 150px;
  z-index: -1;
}
</style>
