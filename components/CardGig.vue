<template>
  <article class="card-gig relative flex flex-col font-manrope shadow-card">
    <!-- Card Image -->
    <div class="card-gig__image rounded-t mb-5"></div>
    <!-- Card Data -->
    <section class="flex flex-wrap justify-between px-6 pb-8">
      <!-- Name -->
      <h2 class="card-gig__title font-extrabold text-lg mb-2 text-dark-primary">
        Jane Cormes
      </h2>
      <!-- Price -->
      <p
        class="card-gig__price text-lg text-right mb-2 font-extrabold text-green-primary"
      >
        $12.00
      </p>
      <!-- Rating Stars -->
      <div class="card-gig__rating flex items-center mb-4">
        <div class="stars flex items-start mr-3">
          <img src="/images/png/rating-star-full.png" alt="rating star" />
          <img src="/images/png/rating-star-full.png" alt="rating star" />
          <img src="/images/png/rating-star-full.png" alt="rating star" />
          <img src="/images/png/rating-star-full.png" alt="rating star" />
          <img src="/images/png/rating-star-mid.png" alt="rating star" />
        </div>
        <p class="rate text-lg font-extrabold text-dark-primary">
          4.8/5
        </p>
      </div>
      <!-- Days -->
      <p
        class="card-gig__days text-base mb-5 font-extrabold text-right text-grey-secondary"
      >
        10 days
      </p>
      <!-- Description -->
      <p class="card-gig__description text-base font-normal text-grey-primary">
        Lorem Ipsum is simply dummy text of the printing and typesettin
        industry.
      </p>
    </section>
    <!-- Feature Tag -->
    <div
      class="card-gig__feature-tag text-sm top-0 left-0 text-white ml-4 rounded-md p-1 text-center absolute bg-red-primary"
    >
      POPULAR
    </div>
    <!-- Like Heart Button -->
    <div
      class="card-gig__heart bg-no-repeat bg-center top-0 right-0 rounded-full absolute mr-4"
    ></div>
  </article>
</template>

<style>
.card-gig {
  width: 360px;
  border-radius: 15px;
}
.card-gig__image {
  background-image: url('/images/jpg/card-gig-placeholder.jpg');
  height: 175px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 100%;
}
.card-gig section {
  max-height: 180px;
}
.card-gig__price,
.card-gig__title,
.card-gig__rating,
.card-gig__days {
  width: 50%;
}
.card-gig__feature-tag {
  width: 85px;
  margin-top: 15px;
}
.card-gig__heart {
  width: 45px;
  height: 45px;
  background-color: rgba(0, 0, 0, 0.45);
  margin-top: 10px;
  background-image: url('/images/png/heart-icon.png');
}
</style>
