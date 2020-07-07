<template>
  <base-card class="custom-card-order flex flex-col font-manrope">
    <p class="text-base text-dark-primary mb-5">
      Do you have any special requeriments?
    </p>
    <base-button shadow outlined rounded color="white">
      Require Custom Order
    </base-button>
  </base-card>
</template>

<script>
import BaseCard from '@/components/BaseComponents/BaseCard';
import BaseButton from '@/components/BaseComponents/BaseButton';
export default {
  name: 'CardCustomOrder',
  components: {
    BaseCard,
    BaseButton,
  },
};
</script>

<style>
.custom-card-order {
  max-width: 360px;
  padding: 28px 0;
}
.custom-card-order p {
  line-height: 1.8;
  text-align: center;
  max-width: 176px;
  font-weight: 500; /*medium*/
}
</style>
