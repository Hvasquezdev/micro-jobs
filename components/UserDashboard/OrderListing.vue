<template>
  <base-card class="font-manrope order-listing">
    <!-- My order & Task -->
    <ul class="header-links shadow-card flex items-start w-full font-bold">
      <li class="cursor-pointer is-active">My order</li>
      <li class="cursor-pointer">My Favorite</li>
    </ul>
    <!-- Order List  -->
    <ul class="order-list">
      <li><card-order class="is-active" /></li>
      <li><card-order class="is-delivered" /></li>
      <li><card-order class="is-late" /></li>
      <li><card-order class="is-canceled" /></li>
      <li><card-order class="is-disputed" /></li>
    </ul>
    <!-- View All Button  -->
    <base-button class="view-all-button mt-10" color="danger" rounded>
      View All
    </base-button>
  </base-card>
</template>

<script>
import BaseCard from '@/components/BaseComponents/BaseCard';
import CardOrder from '@/components/CardOrder';
import BaseButton from '@/components/BaseComponents/BaseButton';
export default {
  name: 'OrderListing',
  components: {
    BaseCard,
    CardOrder,
    BaseButton,
  },
};
</script>

<style>
.order-listing {
  flex-direction: column;
  max-width: 846px;
  padding: 0 0 34px;
  margin-bottom: 30px;
}
.order-listing .header-links {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 20px 36px 0;
}
.order-listing .header-links li {
  font-weight: 700; /*extrabold*/
  color: theme('colors.grey.primary');
  padding: 0 13px 18px;
}
.order-listing .header-links li:first-child {
  margin-right: 82px;
}
.order-listing .header-links li.is-active {
  border-bottom: 2px solid theme('colors.green.primary');
  color: theme('colors.green.primary');
}
.order-listing .view-all-button {
  width: 216px;
  height: 62px;
}
.order-listing .order-list li:last-child .card-order {
  border-bottom: none;
}
.order-listing .card-order.is-active .state {
  color: #2ba229;
  background-color: #eaf8ea;
}
.order-listing .card-order.is-delivered .state {
  color: #935ac0;
  background-color: #f2ecf7;
}
.order-listing .card-order.is-late .state {
  color: #d86f7a;
  background-color: #ffebe5;
}
.order-listing .card-order.is-canceled .state {
  color: #ea443a;
  background-color: #ffebe4;
}
.order-listing .card-order.is-disputed .state {
  color: #cd8420;
  background-color: #fff5e8;
}
</style>
