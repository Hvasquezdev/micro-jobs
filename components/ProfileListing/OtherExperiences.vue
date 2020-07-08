<template>
  <section class="other-experiences flex flex-col items-start font-manrope">
    <h2 class="font-bold text-dark-secondary w-full">Other Experiences</h2>
    <!-- Experiences List  -->
    <ul>
      <li>
        <h3 class="font-bold text-dark-secondary text-lg">
          Arduino/Electronics
        </h3>
        <p class="text-grey-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae labore
          cum neque odit laboriosam dolore totam enim ut ducimus? Iste nihil,
          fuga aperiam magni quisquam sequi illum fugit sed quibusdam.
        </p>
        <!-- Read more  -->
        <div class="read-more">
          <button aria-label="read more">Read More</button>
        </div>
      </li>
      <li>
        <h3 class="font-bold text-dark-secondary text-lg">
          Game Development
        </h3>
        <p class="text-grey-primary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
          accusamus quasi architecto reprehenderit ea vitae assumenda nam
          accusantium nihil explicabo esse veniam quis sit vero corporis
          recusandae quaerat consectetur voluptatum.
        </p>
        <!-- Read more  -->
        <div class="read-more">
          <button aria-label="read more">Read More</button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style>
.other-experiences {
  max-width: 751px;
  padding-bottom: 58px;
}
.other-experiences h2 {
  font-size: 25px;
  padding-bottom: 16px;
  border-bottom: 1px solid theme('colors.grey.light-3');
  margin-bottom: 26px;
}
.other-experiences li {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.other-experiences p {
  margin: 16px 0;
}
.other-experiences li:not(:last-child) {
  margin-bottom: 30px;
}
.other-experiences .read-more button {
  color: theme('colors.green.secondary');
  font-weight: 700; /*semi-bold*/
  border-bottom: 1px solid theme('colors.green.secondary');
  font-size: 14px;
}
</style>
