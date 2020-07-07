<template>
  <section class="gig-reviews font-manrope">
    <!-- Reviews Count & Sort by  -->
    <section class="reviews-count flex items-start justify-between pb-3">
      <!-- Reviews count / rating  -->
      <div class="flex items-center text-dark-secondary">
        <!-- Count  -->
        <div class="count font-bold mr-4">1756 Reviews</div>
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
      </div>
      <!--Sort by  -->
      <div class="text-grey-light-2 text-base flex items-center font-normal">
        <label class="tracking-wide" for="sort-by">
          Sort by
        </label>
        <!-- Categories  -->
        <select
          id="sort-by"
          class="block appearance-none shadow-card w-full py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white"
        >
          <option>Most Popular</option>
          <option>Recently</option>
          <option>Old</option>
        </select>
      </div>
    </section>
    <!-- Features rating  -->
    <section
      class="features-rating text-grey-primary font-normal reviews-count flex items-start justify-between"
    >
      <ul class="w-full">
        <!-- 1 -->
        <li>
          Seller Comunication
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
        </li>
        <!-- 2 -->
        <li>
          Service as Described
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
        </li>
        <!-- 3 -->
        <li>
          Would Recommended
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
        </li>
      </ul>
    </section>
    <!-- Reviews -->
    <section class="reviews flex flex-col">
      <review />
      <review />
      <review />
    </section>
    <!-- Load more  -->
    <div class="load-more">
      <button aria-label="Load more">Load More</button>
    </div>
  </section>
</template>
<script>
import Review from '@/components/Review';
export default {
  name: 'GigReviews',
  components: {
    Review,
  },
};
</script>

<style>
.gig-reviews {
  max-width: 751px;
}
.gig-reviews section {
  border-bottom: 1px solid theme('colors.grey.light-3');
}
.gig-reviews .load-more {
  padding: 32px 0;
}
.gig-reviews .load-more button {
  color: theme('colors.green.secondary');
  font-weight: 800; /*extrabold*/
  border-bottom: 1px solid theme('colors.green.secondary');
}
.gig-reviews .reviews {
  border: none;
}
.gig-reviews .count {
  font-size: 22px;
}
.gig-reviews .rating-stars {
  font-size: 18px;
  color: theme('colors.dark.primary');
}
.gig-reviews .rating-stars img {
  margin-right: 5px;
}
.gig-reviews select {
  width: 210px;
  height: 58px;
  border-width: 0;
  border-radius: 15px;
  background-image: url('/images/png/dropdown-arrow.png'); /*list down icon*/
  background-repeat: no-repeat;
  background-position: 90% center;
  margin-left: 18px;
}

.gig-reviews .features-rating li {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.gig-reviews .features-rating li:not(:last-child) {
  margin-bottom: 30px;
}
.gig-reviews .features-rating {
  padding: 32px 0 42px;
  font-weight: 400 /* regular*/;
}
</style>
