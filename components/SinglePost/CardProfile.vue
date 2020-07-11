<template>
  <base-card class="profile-card flex flex-col items-center justify-center">
    <div class="profile-img rounded-full relative">
      <img
        class="rounded-full w-full h-full object-cover"
        src="/images/jpg/profile-large.jpg"
        alt="Profile"
      />
      <div class="level-circle rounded-full absolute bg-white right-0 bottom-0">
        <div
          class="content rounded-full w-full h-full bg-green-secondary text-white flex flex-col items-center justify-center font-manrope font-semibold"
        >
          <span>Level</span>
          <span>2</span>
        </div>
      </div>
    </div>
    <div class="profile-info font-manrope">
      <h4 class="font-semibold text-center text-dark-secondary">
        Kelly Gunter
      </h4>

      <!-- Rating Stars -->
      <div class="rating flex items-center">
        <div class="stars flex items-start">
          <img src="/images/png/rating-star-full.png" alt="rating star" />
          <img src="/images/png/rating-star-full.png" alt="rating star" />
          <img src="/images/png/rating-star-full.png" alt="rating star" />
          <img src="/images/png/rating-star-full.png" alt="rating star" />
          <img src="/images/png/rating-star-mid.png" alt="rating star" />
        </div>
        <p class="rate font-semibold text-dark-primary">
          4.8/5
        </p>
      </div>
    </div>

    <div class="separator w-full"></div>

    <ul class="profile-details font-manrope text-grey-primary w-full">
      <li>
        <strong class="text-dark-secondary">From</strong>
        <span>India</span>
      </li>
      <li>
        <strong class="text-dark-secondary">Lenguage</strong>
        <span>English, Hindi</span>
      </li>
      <li>
        <strong class="text-dark-secondary">Positive Rating</strong>
        <span>89%</span>
      </li>
      <li>
        <strong class="text-dark-secondary">Avg. Response Time</strong>
        <span>Up to 8hrs.</span>
      </li>
    </ul>

    <div class="separator w-full"></div>

    <p class="profile-description font-manrope w-full text-grey-primary">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, ad.
    </p>

    <div class="card-action flex items-center justify-between w-full">
      <base-button
        class="flat-btn underline font-bold text-base"
        color="white"
        rounded
      >
        More details
      </base-button>
      <base-button class="font-extrabold text-base" color="danger" rounded>
        Contact me
      </base-button>
    </div>
  </base-card>
</template>

<script>
import BaseCard from '@/components/BaseComponents/BaseCard';
import BaseButton from '@/components/BaseComponents/BaseButton';

export default {
  name: 'CardProfile',

  components: {
    BaseCard,
    BaseButton,
  },
};
</script>

<style>
.profile-card {
  max-width: 360px;
  padding: 30px 30px 30px 30px;
}
.profile-card .profile-img {
  width: 155px;
  height: 155px;
  padding: 2px;
  box-shadow: 2px 0 24px rgba(139, 149, 169, 0.24);
  margin-bottom: 25px;
}
.profile-card .level-circle {
  width: 55px;
  height: 55px;
  padding: 2px;
  font-size: 10px;
  box-shadow: 2px 0 24px rgba(139, 149, 169, 0.24);
}
.profile-info h4 {
  font-size: 20px;
  margin-bottom: 10px;
}
.profile-card .rating .stars > *:not(:last-child) {
  margin-right: 5px;
}
.profile-card .rating .stars {
  margin-right: 15px;
}
.profile-card .rating .rate {
  font-size: 18px;
  color: theme('colors.dark.primary');
}
.profile-card .separator {
  height: 1px;
  background-color: #e9eaea;
  margin-top: 32px;
  margin-bottom: 35px;
}
.profile-card .profile-details li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
}
.profile-card .profile-details li:not(:last-child) {
  margin-bottom: 25px;
}
.profile-card .profile-details li span {
  width: 35%;
  max-width: 110px;
  text-align: left;
}
.profile-card .profile-description {
  font-size: 15px;
  line-height: 28px;
  margin-bottom: 40px;
}
.profile-card .flat-btn {
  padding: 13px 0px;
}
.profile-card .base-button--danger {
  box-shadow: 4px 0 21px rgba(237, 133, 144, 0.26);
}
</style>
