<template>
  <base-card class="flex relative flex-col revenues text-white font-manrope">
    <h1 class="font-bold mb-8 w-full text-left">Revenues</h1>
    <!-- Amounts  -->
    <div class="content w-full flex justify-between">
      <!-- Earnings  -->
      <div class="flex flex-col items-start">
        <div class="amount">$20</div>
        <h3>Earnings</h3>
      </div>
      <!-- Withdrawal -->
      <div class="flex flex-col items-start">
        <div class="amount">$20</div>
        <h3>Withdrawal</h3>
      </div>
      <!-- Paid For Orders  -->
      <div class="flex flex-col items-start">
        <div class="amount">$20</div>
        <h3>Paid for Orders</h3>
      </div>
      <!-- Pending  -->
      <div class="flex flex-col items-start">
        <div class="amount">$20</div>
        <h3>Pendind</h3>
      </div>
      <!-- Avaliable  -->
      <div class="flex flex-col items-start">
        <div class="amount">$20</div>
        <h3>Avaliable</h3>
      </div>
    </div>
    <!-- Background shape  -->
    <div class="absolute w-full h-full bottom-0 shape">
      <img
        src="/images/png/revenues-shape.png"
        class="absolute bottom-0"
        alt="background image"
      />
    </div>
  </base-card>
</template>

<script>
import BaseCard from '@/components/BaseComponents/BaseCard';
export default {
  name: 'Revenues',
  components: {
    BaseCard,
  },
};
</script>

<style>
.revenues {
  max-width: 846px;
  background-color: theme('colors.green.tertiary');
  padding: 22px 0;
  margin-bottom: 30px;
}
.revenues h1 {
  font-size: 25px;
}
.revenues .amount {
  font-weight: 600; /*semibold*/
  font-size: 20px;
  margin-bottom: 18px;
}
.revenues h1,
.content {
  padding: 0 48px;
}
.revenues h3 {
  font-size: 16px;
  font-weight: 400; /*regular*/
}
</style>
