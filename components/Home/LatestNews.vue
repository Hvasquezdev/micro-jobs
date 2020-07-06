<template>
  <section class="latest-news flex flex-col items-center font-manrope relative">
    <div class="bg-overlay absolute left-0 bottom-0"></div>
    <div class="circle-overlay absolute"></div>

    <!-- Title -->
    <h1 class="text-black font-normal">
      Latest <span class="font-extrabold">Blog News</span>
    </h1>

    <div class="relative">
      <div class="dot-overlay z-10"></div>
      <card-blog class="relative z-20 bg-white" />
    </div>
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
  margin-bottom: 60px;
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
.latest-news .dot-overlay {
  background-image: radial-gradient(#d9ebe8 20%, transparent 20%);
  background-position: 0 0;
  background-size: 30px 30px;
  position: absolute;
  top: -105px;
  right: -100px;
  width: 240px;
  height: 210px;
}
.latest-news .bg-overlay {
  height: 200px;
  width: 50%;
  background: #ecf5f3;
  z-index: -1;
  max-width: 970px;
  height: 365px;
}
.latest-news .circle-overlay {
  width: 160px;
  height: 160px;
  bottom: 270px;
  right: 0;
  background-color: #ecf5f3;
  border-radius: 100%;
  transform: translateX(50%);
  z-index: -1;
}
</style>
