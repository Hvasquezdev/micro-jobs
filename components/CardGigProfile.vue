<template>
  <article
    class="card-gig-profile bg-white relative flex flex-col font-manrope shadow-card"
  >
    <!-- Card Image -->
    <div class="image rounded-t mb-5 bg-no-repeat bg-center bg-cover"></div>
    <!-- Card Data -->
    <section class="flex flex-wrap justify-between px-6 pb-8">
      <!-- Name -->
      <h2 class="title font-medium text-lg mb-2 text-dark-primary">
        Jane Cormes
      </h2>
      <!-- Price -->
      <p
        class="price text-lg text-right mb-2 font-extrabold text-green-primary"
      >
        $12.00
      </p>
      <!-- Rating Stars -->
      <div class="rating flex items-center mb-4">
        <div class="stars flex items-start mr-3">
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
      <!-- Skill Tags  -->
      <div class="skills text-red-primary">
        <a href="#">CSS</a>
        <a href="#">HTML</a>
        <a href="#">PHP</a>
      </div>
    </section>
    <!-- Feature Tag -->
    <div
      class="feature-tag text-sm top-0 left-0 text-white ml-4 rounded-md text-center absolute bg-red-primary"
    >
      POPULAR
    </div>
    <!-- Heart -->
    <div
      class="heart bg-no-repeat bg-center top-0 right-0 rounded-full absolute mr-4"
    ></div>
  </article>
</template>

<style>
.card-gig-profile {
  width: 360px;
  border-radius: 15px;
}
.card-gig-profile .image {
  background-image: url('/images/jpg/card-gig-placeholder.jpg');
  height: 175px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 100%;
}
.card-gig-profile section {
  max-height: 180px;
}
.card-gig-profile .price,
.title,
.rating,
.days {
  width: 50%;
}
.card-gig-profile .feature-tag {
  width: 85px;
  margin-top: 15px;
  line-height: 1;
  padding: 7px;
}
.card-gig-profile .heart {
  width: 45px;
  height: 45px;
  background-color: rgba(0, 0, 0, 0.45);
  margin-top: 10px;
  background-image: url('/images/png/heart-icon.png');
}
.card-gig-profile .skills a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  font-weight: 500; /*medium*/
  min-width: 75px;
  height: 35px;
  background-color: #fff5f4;
}
.card-gig-profile .skills a:not(:last-child) {
  margin-right: 10px;
}
</style>
