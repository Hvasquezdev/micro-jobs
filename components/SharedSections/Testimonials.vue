<template>
  <section
    class="testimonials flex flex-col items-center justify-center text-center"
  >
    <h2 class="font-manrope font-extrabold color-dark-secondary">
      Testimonial
    </h2>
    <p class="font-manrope text-base text-grey-primary">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto non,
      fugit consectetur error iusto consequuntur tempore quia officia similique
      molestiae.
    </p>

    <div class="testimonial-list">
      <client-only>
        <hooper :items-to-show="3" :infinite-scroll="true">
          <slide v-for="testimonial in 3" :key="testimonial">
            <base-card class="testimonial-card flex-col">
              <div class="card-header flex items-center">
                <div
                  class="header-thumb shadow-btn bg-white rounded-full flex items-center justify-center"
                >
                  <img
                    class="w-full h-full rounded-full object-cover"
                    src="/images/jpg/profile.jpg"
                    alt="Author"
                  />
                </div>
                <div class="font-manrope text-left">
                  <h3 class="font-medium text-dark-secondary capitalize">
                    Jessica Roy
                  </h3>
                  <h4 class="text-base text-grey-primary">
                    Director
                  </h4>
                </div>
              </div>
              <p class="card-content font-manrope text-grey-primary text-base">
                We are so grateful since we found your website. All these
                freelancers are so professional and among the best. Very
                satisfied with everything.
              </p>
            </base-card>
          </slide>

          <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
      </client-only>
    </div>
  </section>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import BaseCard from '@/components/BaseComponents/BaseCard';
import 'hooper/dist/hooper.css';

export default {
  name: 'Testimonials',

  components: {
    Hooper,
    Slide,
    HooperPagination,
    BaseCard,
  },

  data() {
    return {
      swiperOptions: {},
    };
  },
};
</script>

<style>
.testimonials h2 {
  font-size: 45px;
  margin-bottom: 35px;
}
.testimonials p {
  max-width: 820px;
  margin-bottom: 60px;
}
.testimonials .testimonial-list {
  width: 90%;
  max-width: 1170px;
}
.testimonials .testimonial-list .hooper {
  height: auto;
  padding-bottom: 60px;
}
.testimonials .testimonial-list .hooper .hooper-indicator {
  width: 13px;
  height: 13px;
  background-color: #d7dde7;
  border-radius: 100%;
  margin: 0 10px;
  outline: none;
}
.testimonials .testimonial-list .hooper .hooper-indicator.is-active {
  background-color: #419d8a;
}
.testimonials .testimonial-list .hooper-slide {
  padding: 20px 15px;
}
.testimonials .testimonial-card {
  align-items: flex-start;
  padding: 20px 30px 35px 30px;
}
.testimonials .testimonial-card h3 {
  font-size: 18px;
}
.testimonials .testimonial-card p {
  margin: 30px 0 0 0;
  text-align: left;
}
.testimonials .testimonial-card .header-thumb {
  width: 60px;
  height: 60px;
  padding: 3px;
  margin-right: 15px;
}
</style>
