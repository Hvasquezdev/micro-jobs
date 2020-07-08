<template>
  <div class="services-listing w-full ml-auto mr-auto">
    <div class="main-wrapper flex flex-col items-center justify-center">
      <section
        class="listing-banner w-full flex flex-col items-center justify-center"
      >
        <bread-crumb :items="routes" />
        <listing-banner class="w-full" />
        <dropdown-bar class="w-full" />
      </section>
      <section class="listing-content w-full flex justify-between items-start">
        <div class="content-left flex-shrink-0 w-full relative">
          <listing-sidebar class="w-full" />
          <div class="dot-overlay absolute"></div>
        </div>

        <div class="content-right flex-grow">
          <div class="gig-list grid w-full justify-between">
            <card-gig-vertical v-for="gig in 6" :key="gig" />
          </div>

          <listing-promotion />

          <div class="gig-list grid w-full justify-between">
            <card-gig-vertical v-for="gig in 6" :key="gig" />
          </div>

          <listing-promotion />

          <pagination />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ListingSidebar from '@/components/Listing/ListingSidebar';
import ListingBanner from '@/components/Listing/ListingBanner';
import ListingPromotion from '@/components/Listing/ListingPromotion';
import CardGigVertical from '@/components/CardGigVertical';
import DropdownBar from '@/components/DropdownsBar';
import BreadCrumb from '@/components/BreadCrumb';
import Pagination from '@/components/Pagination';

export default {
  name: 'ServicesListing',

  components: {
    ListingSidebar,
    ListingBanner,
    ListingPromotion,
    DropdownBar,
    CardGigVertical,
    BreadCrumb,
    Pagination,
  },

  data() {
    return {
      routes: [
        {
          text: 'Home',
          url: '/',
        },
        {
          text: 'Services',
          url: '/',
        },
        {
          text: 'Listing',
          url: '/services/listing',
        },
      ],
    };
  },
};
</script>

<style>
.services-listing {
  max-width: 1140px;
}
.services-listing .main-wrapper .listing-banner {
  margin-bottom: 60px;
}
.services-listing .main-wrapper .listing-banner .breadcrumb {
  margin: 30px auto 40px 0;
}
.services-listing .main-wrapper .listing-banner .listing-banner-card {
  margin-bottom: 25px;
}
.services-listing .main-wrapper .listing-content .content-right {
  margin-left: 30px;
}
.services-listing .main-wrapper .listing-content .content-right .gig-list {
  grid-template-columns: repeat(3, 265px);
  row-gap: 30px;
  column-gap: 30px;
}
.services-listing
  .main-wrapper
  .listing-content
  .content-right
  .listing-promotion {
  margin: 30px 0;
}
.services-listing .main-wrapper .listing-content .content-right .pagination {
  margin: 20px 0 65px 0;
  justify-content: flex-end;
}
.services-listing .content-left {
  max-width: 260px;
}
.services-listing .dot-overlay {
  background-image: radial-gradient(#d9ebe8 16%, transparent 17%);
  background-position: 0 0;
  background-size: 18px 18px;
  bottom: -57px;
  left: -75px;
  width: 145px;
  height: 126px;
  z-index: -1;
}
</style>
