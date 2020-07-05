<template>
  <section class="latest-news flex flex-col items-center font-manrope">
    <!-- Title -->
    <h1 class="text-black font-normal">
      Latest <span class="font-extrabold">Blog News</span>
    </h1>
    <card-blog />
    <!--- Small cards --->
    <div class="card-blog-small-container flex items-start">
      <card-blog-small />
      <card-blog-small />
      <card-blog-small />
    </div>
  </section>
</template>

<script>
import CardBlog from '@/components/CardBlog';
import CardBlogSmall from '@/components/CardBlogSmall';
export default {
  name: 'LatestNews',
  components: {
    CardBlog,
    CardBlogSmall,
  },
};
</script>

<style>
.latest-news {
  padding: 110px 0 84px;
}
.latest-news h1 {
  font-size: 45px;
  margin-bottom: 58px;
}
.latest-news .card-blog-title,
.date {
  font-weight: 400; /* regular */
}
.latest-news .card-blog-description {
  font-weight: 500; /* medium*/
}
.latest-news .tag {
  font-weight: 600; /* semibold*/
}
.latest-news .card-blog {
  margin-bottom: 30px;
}
.latest-news .card-blog-small:not(:last-child) {
  margin-right: 30px;
}
</style>
