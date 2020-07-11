<template>
  <section class="tests flex-col flex items-start font-manrope">
    <h2 class="font-bold w-full mb-6">Tests</h2>
    <div class="table-data w-full flex flex-col items-start shadow-card">
      <!-- Row 1 -->
      <div class="t-row text-dark-primary text-base font-bold">
        <div class="t-column">Name</div>
        <div class="t-column">Rating (out of 5)</div>
        <div class="t-column">Time to Complete</div>
      </div>
      <!-- Row 2 -->
      <div class="t-row is-grey">
        <div class="t-column">C Programming Test</div>
        <div class="t-column">4.00</div>
        <div class="t-column">28 mins</div>
      </div>
      <!-- Row  -->
      <div class="t-row">
        <div class="t-column">Java Test v3</div>
        <div class="t-column">4.25</div>
        <div class="t-column">31 mins</div>
      </div>
      <!-- Row 4 -->
      <div class="t-row is-grey">
        <div class="t-column">U.S. English Basic Skills Test</div>
        <div class="t-column">4.50</div>
        <div class="t-column">25 mins</div>
      </div>
      <!-- Row 5  -->
      <div class="t-row">
        <div class="t-column">Java Test v3</div>
        <div class="t-column">4.25</div>
        <div class="t-column">31 mins</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Test',
  components: {},
};
</script>

<style>
.tests {
  max-width: 751px;
  padding-bottom: 50px;
}
.tests .table-data {
  border-radius: 15px;
}
.tests h2 {
  font-size: 25px;
}
.tests > *:first-child {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
.tests > *:last-child {
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.tests .t-row {
  display: grid;
  width: 100%;
  grid-template-columns: 316px repeat(2, 1fr);
  height: 65px;
}
.tests .t-row:first-child {
  height: 71px;
}
.tests .t-row.is-grey {
  background-color: theme('colors.grey.light-4');
  height: 49px;
}
.tests .t-column {
  height: 100%;
  padding-left: 42px;
  display: flex;
  align-items: center;
}
.tests .t-column:not(:last-child) {
  border-right: 1px solid theme('colors.grey.light-3');
}
.tests .t-row:not(:first-child) {
  font-size: 16px;
  font-weight: 400; /*regular*/
  color: theme('colors.grey.primary');
}
</style>
