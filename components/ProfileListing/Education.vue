<template>
  <section class="education flex flex-col items-start font-manrope">
    <h2 class="font-bold text-dark-secondary w-full">Education</h2>
    <!-- History  -->
    <ol>
      <li>
        <h3 class="font-bold text-dark-secondary text-lg mb-2">
          Bachelor of Applied Science (B.A.Sc.), Computer science | Faculty Of
          Mathematics
        </h3>
        <p class="date text-grey-primary">2012 - 2015</p>
      </li>
      <li>
        <h3 class="font-bold text-dark-secondary text-lg mb-2">
          High School degree, Mathematics High School
        </h3>
        <p class="date text-grey-primary">2008 - 2012</p>
      </li>
    </ol>
  </section>
</template>

<script>
export default {};
</script>

<style>
.education {
  max-width: 751px;
  padding-bottom: 58px;
}
.education h2 {
  font-size: 25px;
  padding-bottom: 16px;
  border-bottom: 1px solid theme('colors.grey.light-3');
  margin-bottom: 26px;
}
.education li:not(:last-child) {
  margin-bottom: 30px;
}
</style>
