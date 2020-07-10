<template>
  <base-card
    class="user-profile-sidebar flex flex-col items-center justify-center"
  >
    <div class="profile-img rounded-full relative">
      <img
        class="rounded-full w-full h-full object-cover"
        src="/images/jpg/profile-large.jpg"
        alt="Profile"
      />
      <div class="level-circle rounded-full absolute bg-white right-0 bottom-0">
        <div
          class="circle-content rounded-full w-full h-full bg-green-secondary text-white flex flex-col items-center justify-center font-manrope font-semibold"
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
    </ul>

    <div class="separator w-full"></div>

    <div
      class="profile-description font-manrope flex flex-col items-start justify-center"
    >
      <h3 class="text-dark-secondary font-bold">Description</h3>
      <p class="w-full text-grey-primary">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, ad.
      </p>
    </div>
  </base-card>
</template>

<script>
import BaseCard from '@/components/BaseComponents/BaseCard';

export default {
  name: 'ProfileSidebar',

  components: {
    BaseCard,
  },
};
</script>

<style>
.user-profile-sidebar {
  max-width: 360px;
  padding: 30px 30px 30px 30px;
}
.user-profile-sidebar .profile-img {
  width: 155px;
  height: 155px;
  padding: 2px;
  box-shadow: 2px 0 24px rgba(139, 149, 169, 0.24);
  margin-bottom: 25px;
}
.user-profile-sidebar .level-circle {
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
.user-profile-sidebar .rating .stars > *:not(:last-child) {
  margin-right: 5px;
}
.user-profile-sidebar .rating .stars {
  margin-right: 15px;
}
.user-profile-sidebar .rating .rate {
  font-size: 18px;
  color: theme('colors.dark.primary');
}
.user-profile-sidebar .separator {
  height: 1px;
  background-color: #e9eaea;
  margin-top: 32px;
  margin-bottom: 35px;
}
.user-profile-sidebar .profile-details li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
}
.user-profile-sidebar .profile-details li:not(:last-child) {
  margin-bottom: 25px;
}
.user-profile-sidebar .profile-details li span {
  width: 50%;
  max-width: 110px;
  text-align: left;
}
.user-profile-sidebar .profile-description h3 {
  margin-bottom: 10px;
  font-size: 18px;
}
.user-profile-sidebar .profile-description p {
  font-size: 15px;
  line-height: 28px;
}
</style>
