<template>
  <article
    class="card-blog-small bg-white shadow-card flex flex-col items-start font-manrope"
  >
    <!-- Card image -->
    <img
      src="/images/jpg/card-blog-small-placeholder.jpg"
      alt="card blog image"
      class="shadow-card"
    />
    <!-- Title -->
    <h2 class="card-blog-title text-xl text-left text-dark-secondary">
      Millenial Majority Workforce
    </h2>
    <!-- Date, tag -->
    <div class="text-base w-full flex text-grey-light-2 flex items-center">
      <p class="date">June 15, 2020</p>
      <div class="divisory-line"></div>
      <p class="tag text-purple-primary">
        Work
      </p>
    </div>
    <!--Description-->
    <p class="card-blog-description text-base text-grey-light-2">
      This study reveals changes in how we work, generational differences.
    </p>
  </article>
</template>

<style>
.card-blog-small {
  width: 360px;
  border-radius: 15px;
  padding: 20px 23px 36px;
}
.card-blog-small h2 {
  margin-top: 32px;
}
.card-blog-small img {
  border-radius: 15px;
  height: 207px;
}
.card-blog-small div {
  margin: 12px 0 22px;
}
.card-blog-small .divisory-line {
  height: 25px;
  border: 0.5px solid #d6d6d6;
  margin: 0 22px;
}
.card-blog-small .card-blog-description {
  width: 280px;
}
</style>
