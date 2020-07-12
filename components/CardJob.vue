<template>
  <article class="card-job font-manrope flex items-center">
    <!-- Image  -->
    <img
      src="/images/jpg/card-blog-small-placeholder.jpg"
      class="shadow-card"
      alt="job image"
    />
    <!-- Data  -->
    <section class="flex-col flex items-start justify-center">
      <h2 class="font-bold text-dark-secondary text-lg">
        I will do resume design, cv, design cover letter
      </h2>
      <!-- Stars  -->
      <div class="rating-stars flex items-center">
        <img
          v-for="star in 5"
          :key="star"
          src="/images/png/rating-star-full.png"
          alt="rating star full"
        />
        <p class="font-bold ml-1">4.9/5</p>
      </div>
      <!-- Price  -->
      <p class="price font-extrabold text-lg text-green-primary">$15.00</p>
    </section>
  </article>
</template>

<script>
export default {};
</script>

<style>
.card-job {
  padding: 32px 0;
  border-bottom: 1px solid theme('colors.grey.light-5');
  width: 781px;
}
.card-job > img {
  width: 165px;
  height: 141px;
  border-radius: 15px;
}
.card-job section {
  margin-left: 36px;
}
.card-job .rating-stars {
  font-size: 18px;
  color: theme('colors.dark.primary');
  margin: 14px 0;
}
.card-job .rating-stars img {
  margin-right: 5px;
}
</style>
