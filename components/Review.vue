<template>
  <div class="review-content-wrapper">
    <!-- User Data  -->
    <div class="user-data flex items-start">
      <!-- Image  -->
      <div
        class="user-img shadow-btn bg-white rounded-full flex items-center justify-center"
      >
        <img
          class="w-full h-full rounded-full object-cover"
          src="/images/jpg/user.jpg"
          alt="Author"
        />
      </div>
      <!-- Info  -->
      <div class="user-name font-manrope text-left">
        <!-- Name  -->
        <h3 class="font-bold text-lg text-dark-secondary mb-2 capitalize">
          Alonzo J. Vance
        </h3>
        <!-- Review time  -->
        <h4 class="text-base text-grey-light-2">
          2 days ago
        </h4>
      </div>
      <!-- Rate -->
      <div class="user-rate flex items-center font-bold text-yellow-primary">
        <img class="mr-2" src="/images/png/rating-star-full.png" alt="star" />
        5
      </div>
    </div>
    <!-- User Review  -->
    <div class="user-review flex flex-col items-start">
      <h2 class="font-bold text-lg text-dark-secondary my-3">
        I am very satisfied with the work done.
      </h2>
      <p class="font-manrope text-grey-primary text-lg">
        We are so grateful since we found your website. All these freelancers
        are so professional and among the best. Very satisfied with everything.
      </p>
    </div>
  </div>
</template>

<script></script>

<style>
.review-content-wrapper {
  border-bottom: 1px solid theme('colors.grey.light-3');
  width: 100%;
  padding: 36px 78px 36px 0;
}
.user-review {
  padding-left: 72px;
}
.review-content-wrapper .user-rate {
  margin-top: 2px;
}
.review-content-wrapper .user-data .user-img {
  height: 46px;
  width: 46px;
  margin-right: 26px;
  align-self: center;
}
.review-content-wrapper .user-data .user-name {
  margin-right: 21px;
}
</style>
