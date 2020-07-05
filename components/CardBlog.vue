<template>
  <article class="card-blog flex items-start shadow-card font-manrope">
    <!-- Image -->
    <img
      src="/images/jpg/card-blog-placeholder.jpg"
      alt="Blog image"
      class="shadow-card"
    />
    <!-- Data -->
    <section class="data self-center">
      <!-- Title -->
      <h2 class="card-blog-title text-left text-dark-secondary">
        Anual Impact Report
      </h2>
      <!-- Date, tag -->
      <div
        class="text-base w-full self-center flex text-grey-light-2 flex items-center mt-4 mb-8"
      >
        <p class="date">June 15, 2020</p>
        <div class="divisory-line"></div>
        <p class="tag text-purple-primary">
          Workplace
        </p>
      </div>
      <!--Description-->
      <p class="card-blog-description text-base text-grey-light-2">
        Freelancers release new study revealing insights into the almost 54
        million people freelancing in America innovations aimed.
      </p>
      <!-- Read more button -->
      <base-button
        class="read-more-button border border-solid shadow-btn"
        rounded
        color="white"
      >
        Read Article</base-button
      >
    </section>
  </article>
</template>

<script>
import BaseButton from '@/components/BaseComponents/BaseButton';

export default {
  name: 'CardBlog',
  components: {
    BaseButton,
  },
};
</script>

<style>
.card-blog {
  width: 100%;
  max-width: 1140px;
  padding: 20px;
  border-radius: 15px;
}
.card-blog h2 {
  font-size: 25px;
}
.card-blog .card-blog-description {
  margin: 28px 0 34px;
}
.card-blog .divisory-line {
  height: 25px;
  border: 0.5px solid #d6d6d6;
  margin: 0 22px;
}
.card-blog img {
  height: 338px;
  border-radius: 15px;
  width: 542px;
}
.card-blog .data {
  padding-left: 46px;
}

.card-blog .read-more-button {
  height: 56px;
  width: 178px;
}
</style>
