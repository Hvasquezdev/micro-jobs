<template>
  <base-card
    class="join-us ml-auto mr-auto flex flex-col items-center justify-center"
  >
    <h2 class="font-manrope text-dark-secondary">
      Join our <strong class="font-extrabold">community.</strong>
    </h2>

    <div class="action-list">
      <base-button class="capitalize" color="white" outlined rounded shadow>
        Hire profressionals
      </base-button>
      <base-button class="capitalize" color="danger" rounded shadow>
        Apply as a freelancer
      </base-button>
    </div>
  </base-card>
</template>

<script>
import BaseCard from '@/components/BaseComponents/BaseCard';
import BaseButton from '@/components/BaseComponents/BaseButton';

export default {
  name: 'JoinUs',

  components: {
    BaseCard,
    BaseButton,
  },
};
</script>

<style>
.join-us {
  width: 90%;
  max-width: 1140px;
  padding: 55px 50px 50px 50px;
  margin-bottom: 75px;
  box-shadow: 2px 0px 24px rgba(139, 149, 169, 0.24);
}
.join-us h2 {
  font-size: 35px;
  margin-bottom: 50px;
}
.join-us .action-list > *:not(:last-child) {
  margin-right: 20px;
}
.join-us .action-list .base-button {
  font-size: 18px;
  min-height: 60px;
  min-width: 245px;
}
.join-us .action-list .base-button:first-child.shadow-btn {
  box-shadow: 2px 0px 24px rgba(139, 149, 169, 0.24);
}
.join-us .action-list .base-button:last-child.shadow-btn {
  box-shadow: 4px 0px 21px rgba(237, 133, 144, 0.26);
}
</style>
