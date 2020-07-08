<template>
  <article
    class="card-gig-vertical bg-white relative flex flex-col font-manrope shadow-card"
  >
    <!-- Card Image -->
    <div
      class="image rounded-t w-full bg-no-repeat bg-center shadow-card"
    ></div>
    <!-- Feature Tag -->
    <div
      class="feature-tag text-sm top-0 left-0 text-white ml-3 rounded-md text-center absolute bg-red-primary"
    >
      POPULAR
    </div>
    <!-- Heart -->
    <div
      class="heart bg-no-repeat bg-center top-0 right-0 rounded-full absolute mr-3"
    ></div>
    <div class="content">
      <!-- Description  -->
      <p class="font-normal text-grey-primary">
        Lorem Ipsum is simply dummy text of the printing and industry. Lorem
        Ipsum.
      </p>
      <!-- Stars  -->
      <div class="rating-stars flex items-center">
        <img
          v-for="star in 5"
          :key="star"
          src="/images/png/rating-star-full.png"
          alt="rating star full"
        />
        <p class="font-semibold ml-1">4.9/5</p>
      </div>
      <!-- Name & Price  -->
      <section class="flex items-center justify-between">
        <h2 class="text-dark-primary font-semibold">Angelo V.Ray</h2>
        <p class="price font-bold text-green-primary">$5.99</p>
      </section>
    </div>
  </article>
</template>

<style>
.card-gig-vertical {
  width: 264px;
  border-radius: 15px;
}
.card-gig-vertical .feature-tag {
  width: 85px;
  margin-top: 15px;
  line-height: 1;
  padding: 7px;
}
.card-gig-vertical .image {
  height: 176px;
  background-image: url('/images/jpg/gig-vertical-placeholder.jpg');
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
.card-gig-vertical .heart {
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.45);
  margin-top: 10px;
  background-image: url('/images/png/heart-icon.png');
}
.card-gig-vertical .rating-stars {
  font-size: 16px;
  color: theme('colors.dark.primary');
  margin-bottom: 18px;
}
.card-gig-vertical .rating-stars img {
  margin-right: 5px;
}
.card-gig-vertical .price {
  font-size: 15px;
}
.card-gig-vertical section {
  font-size: 15px;
  border-top: 1px solid theme('colors.grey.light-5');
  padding: 15px 0 20px 0;
  margin-right: 16px;
}
.card-gig-vertical .content {
  padding-left: 16px;
}
.card-gig-vertical .content > p {
  margin: 15px 0 8px 0;
}
</style>
