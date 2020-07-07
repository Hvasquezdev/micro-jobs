<template>
  <section class="post-gallery">
    <ul class="grid">
      <li class="flex items-center justify-center">
        <a href="#" class="gallery-img w-full h-full">
          <img
            class="w-full h-full object-cover"
            src="/images/jpg/gallery-img.jpg"
            alt="Gallery"
          />
        </a>
      </li>
      <li class="flex items-center justify-center">
        <a href="#" class="gallery-img w-full h-full">
          <img
            class="w-full h-full object-cover"
            src="/images/jpg/gallery-img.jpg"
            alt="Gallery"
          />
        </a>
      </li>
      <li class="flex items-center justify-center">
        <a href="#" class="gallery-img w-full h-full">
          <img
            class="w-full h-full object-cover"
            src="/images/jpg/gallery-img.jpg"
            alt="Gallery"
          />
        </a>
      </li>
      <li class="flex items-center justify-center">
        <a href="#" class="gallery-img w-full h-full">
          <img
            class="w-full h-full object-cover"
            src="/images/jpg/gallery-img.jpg"
            alt="Gallery"
          />
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'PostGallery',
};
</script>

<style>
.post-gallery ul li {
  width: 165px;
  height: 125px;
  border-radius: 18px;
  box-shadow: 2px 0 24px rgba(139, 149, 169, 0.24);
}
.post-gallery ul li img {
  border-radius: 14px;
}
.post-gallery ul {
  grid-template-columns: repeat(4, 165px);
  column-gap: 30px;
}
</style>
