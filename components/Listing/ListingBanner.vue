<template>
  <article
    class="listing-banner-card flex flex-col font-manrope shadow-card bg-center bg-no-repeat bg-cover"
  >
    <!-- Tag & Heary  -->
    <div class="flex tag-heart justify-between items-center w-full">
      <!-- Feature Tag -->
      <div
        class="feature-tag uppercase text-sm text-white rounded-md text-center bg-red-primary"
      >
        FEATURED
      </div>
      <!-- Heart Button -->
      <a href="#" class="heart bg-no-repeat bg-center rounded-full"></a>
    </div>
    <!-- Caption  -->
    <h1 class="text-grey-primary font-medium mt-6">
      i will create a profesional whiteboard animation video in
      <strong class="font-bold text-green-primary">24 hour</strong>
    </h1>
    <!-- Name  -->
    <h2 class="my-5 text-dark-primary font-semibold">Angelo V.Ray</h2>
    <!-- Price  -->
    <p class="price font-bold text-lg text-green-primary">$5.99</p>
  </article>
</template>

<style>
.listing-banner-card {
  max-width: 1140px;
  background-image: url('/images/jpg/gig-large-placeholder.jpg');
  padding: 20px 28px 50px 32px;
  border-radius: 15px;
}
.listing-banner-card h1 {
  font-size: 28px;
  max-width: 60%;
}

.listing-banner-card .feature-tag {
  width: 85px;
  line-height: 1;
  padding: 7px;
}
.listing-banner-card .heart {
  width: 45px;
  height: 45px;
  background-color: rgba(0, 0, 0, 0.45);
  background-image: url('/images/png/heart-icon.png');
}
</style>
