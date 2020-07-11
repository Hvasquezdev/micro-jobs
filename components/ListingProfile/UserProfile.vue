<template>
  <base-card class="user-profile flex flex-col items-center font-manrope">
    <div class="w-full flex flex-wrap items-start">
      <!-- Profile image  -->
      <div class="profile-img rounded-full relative">
        <img
          class="rounded-full w-full h-full object-cover"
          src="/images/jpg/profile-large.jpg"
          alt="Profile"
        />
        <div
          class="level-circle rounded-full absolute bg-white right-0 bottom-0"
        >
          <div
            class="content rounded-full w-full h-full bg-green-secondary text-white flex flex-col items-center justify-center font-manrope font-semibold"
          >
            <span>Level</span>
            <span>2</span>
          </div>
        </div>
      </div>
      <!-- User Info  -->
      <div class="info flex flex-col items-start">
        <!-- Name & Rating Stars  -->
        <div class="flex w-full items-center justify-between">
          <!-- Name  -->
          <h2 class="name mb-3 text-dark-secondary font-semibold">
            Kelly Gunter
          </h2>
          <!-- Rating Stars -->
          <div class="rating flex items-center">
            <div class="stars flex items-start">
              <img src="/images/png/rating-star-full.png" alt="rating star" />
              <img src="/images/png/rating-star-full.png" alt="rating star" />
              <img src="/images/png/rating-star-full.png" alt="rating star" />
              <img src="/images/png/rating-star-full.png" alt="rating star" />
              <img src="/images/png/rating-star-mid.png" alt="rating star" />
            </div>
            <p class="rate text-lg font-semibold text-dark-primary">
              4.8/5
            </p>
          </div>
        </div>
        <!-- Country  -->
        <p class="country relative text-base text-grey-primary font-normal">
          Barcelone, Spain
        </p>
        <!-- Price  -->
        <p class="price font-bold text-green-primary">$39.99/hr</p>
        <!-- Skill Tags  -->
        <div class="skills text-red-primary">
          <a href="#">CSS</a>
          <a href="#">Jquery</a>
          <a href="#">PHP</a>
          <a href="#">PHP</a>
        </div>
      </div>
      <!-- From,Language,Avg..  -->
      <div class="other-info flex flex-wrap justify-between items-center">
        <!-- From  -->
        <div class="mb-3">
          <h4>
            From
          </h4>
          <p>Spain</p>
        </div>
        <!-- Positive Rating  -->
        <div class="pl-10 mb-3">
          <h4>
            Positive Rating
          </h4>
          <p>89%</p>
        </div>
        <!-- Language  -->
        <div>
          <h4>
            Language
          </h4>
          <p>English, Hindi</p>
        </div>
        <!-- Avg Response Time  -->
        <div class="pl-10">
          <h4>
            Avg. Response Time
          </h4>
          <p>Up to 8 hrs.</p>
        </div>
      </div>
      <!-- Overview  -->
      <div class="overview">
        <h2 class="font-bold text-dark-secondary mb-4">Overview</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, dolor
          ipsum. Doloremque in distinctio at voluptate architecto quis velit
          dignissimos, sed non dolor quas quisquam perspiciatis iste et hic ea.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          perferendis veniam iure, eos dolore eligendi tempore. Laborum, eius
          iure sunt quo fugiat dicta officia voluptate ratione hic et sit
          accusantium!
        </p>
      </div>
      <!-- Read More  -->
      <a href="#" class="font-bold text-red-primary underline pb-1"
        >Read more</a
      >
    </div>
  </base-card>
</template>

<script>
import BaseCard from '@/components/BaseComponents/BaseCard';
export default {
  name: 'UserProfile',
  components: {
    BaseCard,
  },
};
</script>

<style>
.user-profile {
  padding: 30px;
  max-width: 751px;
  margin-bottom: 55px;
}
.user-profile a {
  font-size: 15px;
}
.user-profile .description p {
  margin-bottom: 36px;
}
.user-profile .info {
  width: 488px;
  margin-left: 43px;
}
.user-profile .profile-img {
  width: 155px;
  height: 155px;
  padding: 2px;
  box-shadow: 2px 0 24px rgba(139, 149, 169, 0.24);
}

.user-profile .level-circle {
  width: 55px;
  height: 55px;
  padding: 2px;
  font-size: 10px;
  box-shadow: 2px 0 24px rgba(139, 149, 169, 0.24);
}
.user-profile h2 {
  font-size: 20px;
}
.user-profile .country::before {
  content: url('/images/png/ping.png');
  position: relative;
  top: 2px;
  margin-right: 10px;
}
.user-profile .price {
  font-size: 20px;
  margin-top: 24px;
}
.user-profile .skills {
  margin-top: 28px;
}
.user-profile .skills a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  font-weight: 500; /*medium*/
  min-width: 75px;
  height: 35px;
  background-color: #fff5f4;
}
.user-profile .skills a:not(:last-child) {
  margin-right: 10px;
}
.user-profile .rating .stars > *:not(:last-child) {
  margin-right: 5px;
}
.user-profile .rating .stars {
  margin-right: 15px;
}
.user-profile .other-info {
  padding: 44px 0 38px 0;
}
.user-profile .other-info div {
  display: flex;
  flex-basis: 50%;
  /* border: 1px solid red; */
  justify-content: space-between;
}
.user-profile .other-info h4 {
  font-weight: 700; /*bold*/
  color: theme('colors.dark.primary');
}
.user-profile .other-info p {
  font-size: 16px;
  color: theme('colors.grey.primary');
  font-weight: 400; /*regular*/
}
.user-profile .other-info div:nth-child(1) {
  padding-right: 170px;
}
.user-profile .other-info div:nth-child(3) {
  padding-right: 115px;
}
.user-profile .overview {
  border-top: 1px solid theme('colors.grey.light-3');
  padding-top: 30px;
}
.user-profile .overview p {
  margin-bottom: 36px;
}
</style>
