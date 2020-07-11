<template>
  <section class="employment-history flex flex-col items-start font-manrope">
    <h2 class="font-bold text-dark-secondary w-full">Employment History</h2>
    <!-- History  -->
    <ol>
      <li>
        <h3 class="font-bold text-dark-secondary text-lg mb-2">
          Programmer | Freelancer
        </h3>
        <p class="date text-grey-primary">January 2014 - Present</p>
      </li>
    </ol>
  </section>
</template>

<script>
export default {};
</script>

<style>
.employment-history {
  max-width: 751px;
  padding-bottom: 58px;
}
.employment-history h2 {
  font-size: 25px;
  padding-bottom: 16px;
  border-bottom: 1px solid theme('colors.grey.light-3');
  margin-bottom: 26px;
}
.employment-history li:not(:last-child) {
  margin-bottom: 30px;
}
</style>
