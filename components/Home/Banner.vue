<template>
  <div
    class="home-banner w-full relative bg-green-primary flex flex-col items-center justify-center"
  >
    <div class="banner-shape h-auto absolute left-0 top-0">
      <img src="/images/png/banner-shape.png" alt="Banner left shape" />
    </div>
    <div class="dot-overlay"></div>

    <p class="font-manrope font-bold text-white">
      We're Worldwide.
    </p>

    <h1 class="text-white capitalize text-center font-helvetica">
      Exciting
      <br />
      <span class="title-span">
        Carreer
      </span>
      <strong>
        Oportunities
      </strong>
    </h1>

    <a
      href="#"
      class="text-white font-manrope font-extrabold flex items-center w-full justify-center"
    >
      <base-icon name="job" />
      <span class="capitalize">
        +10.000 open jobs
      </span>
    </a>

    <div
      class="search-form bg-white flex items-center justify-between rounded-full shadow-btn"
    >
      <base-input class="flex-1" label="Skills, Designations, Companies" />
      <base-input class="salary flex-1" label="Salary" />
      <base-button color="danger" shadow rounded>
        Search
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseComponents/BaseInput';
import BaseButton from '@/components/BaseComponents/BaseButton';
import BaseIcon from '@/components/BaseComponents/BaseIcon';

export default {
  name: 'HomeBanner',

  components: {
    BaseInput,
    BaseButton,
    BaseIcon,
  },
};
</script>

<style>
.home-banner {
  padding: 200px 55px 65px 55px;
}
.home-banner .banner-shape {
  width: 50%;
  max-width: 888px;
}
.home-banner p {
  font-size: 25px;
  margin-bottom: 30px;
}
.home-banner h1 {
  font-size: 85px;
  margin-bottom: 50px;
}
.home-banner .title-span {
  background-color: rgba(255, 255, 255, 0.1);
  padding-left: 20px;
  padding-bottom: 20px;
  border-radius: 4px;
  margin-right: 10px;
}
.home-banner a {
  font-size: 25px;
  margin-bottom: 90px;
}
.home-banner a span {
  padding-left: 15px;
  text-decoration: underline;
}
.home-banner .search-form {
  padding: 25px 45px;
  width: 90%;
  max-width: 1200px;
}
.home-banner .search-form .salary {
  max-width: 300px;
}
.home-banner .search-form > *:not(:last-child) {
  margin-right: 50px;
}
.home-banner .search-form .base-button {
  box-shadow: 4px 0 21px rgb(237, 133, 144, 0.26);
  padding: 18px 45px;
}
.home-banner .dot-overlay {
  background-image: radial-gradient(#68b1a2 20%, transparent 20%);
  background-position: 0 0;
  background-size: 30px 30px;
  position: absolute;
  right: 0;
  bottom: 190px;
  width: 90px;
  height: 210px;
}
</style>
