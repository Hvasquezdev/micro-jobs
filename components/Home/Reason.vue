<template>
  <section class="card-reason-section flex flex-col items-center">
    <h1 class="text-black font-normal font-manrope">
      Why
      <span class="font-extrabold"> Micro-Jobs</span>
    </h1>
    <div class="flex card-container items-center">
      <card-reason class="card is-light-purple" />
      <card-reason class="card is-light-red" />
      <card-reason class="card is-light-blue" />
    </div>
  </section>
</template>

<script>
import CardReason from '@/components/CardReason';

export default {
  name: 'Reason',
  components: {
    CardReason,
  },
};
</script>

<style>
.card-reason-section {
  padding: 90px 0 96px;
}
.card-reason-section h1 {
  font-size: 45px;
  margin-bottom: 56px;
}
.card-reason-section .card-container {
  max-width: 1140px;
}

.card-reason-section .card:not(:last-child) {
  margin-right: 30px;
}
.is-light-purple {
  background-color: #f9f3ff;
}
.is-light-red {
  background-color: #fff5f4;
}
.is-light-blue {
  background-color: #eaf2f3;
}
.is-light-purple .card-reason__number {
  background-color: #f3e9fd;
  color: #af5fff;
}
.is-light-red .card-reason__number {
  background-color: #ffeeec;
  color: #f27a6e;
}
.is-light-blue .card-reason__number {
  background-color: #daecee;
  color: #7ca5ab;
}
</style>
