<template>
  <!-- Table -->
  <section class="packages-table font-manrope shadow-card">
    <!-- Row 1 -->
    <div class="package grid row-1">
      <div
        class="table-column font-normal pt-5 pl-5 font-bold text-grey-primary"
      >
        Package
      </div>
      <!-- Standard -->
      <section class="package-name table-column">
        <h2>
          Standard
        </h2>
        <div class="price">
          $45.99
        </div>
      </section>
      <!-- Advanced -->
      <section class="package-name table-column">
        <h2>
          Advanced
        </h2>
        <div class="price">
          $80.00
        </div>
      </section>
      <!-- Premium -->
      <section class="package-name table-column">
        <h2>
          Premium
        </h2>
        <div class="price">
          $120.00
        </div>
      </section>
    </div>
    <!-- Row 2 -->
    <div class="package-info grid row-2">
      <!--Emtpy-->
      <div class="table-column"></div>
      <!-- Standard -->
      <section v-for="plan in 3" :key="plan" class="package-data table-column">
        <h2>
          Standard
        </h2>
        <p>
          1 web app dcreen ui according mterial design.
        </p>
      </section>
    </div>
    <!-- Row 3  -->
    <div class="package-attribute grid">
      <section class="table-column">Voyce-Over-Sync</section>
      <section v-for="icon in 3" :key="icon" class="table-column">
        <base-icon name="check-filled" />
      </section>
    </div>
    <!-- Row 4  -->
    <div class="package-attribute grid is-white">
      <section class="table-column">Voyce-Over Recording</section>
      <section v-for="icon in 3" :key="icon" class="table-column">
        <base-icon name="check-filled" />
      </section>
    </div>
    <!-- Row 5  -->
    <div class="package-attribute grid">
      <section class="table-column">Full HD (1080p)</section>
      <section v-for="icon in 3" :key="icon" class="table-column">
        <base-icon name="check-filled" />
      </section>
    </div>
    <!-- Row 6  -->
    <div class="package-attribute grid is-white">
      <section class="table-column">Background Music</section>
      <section v-for="icon in 3" :key="icon" class="table-column">
        <base-icon name="check-filled" />
      </section>
    </div>
    <!-- Row 7  -->
    <div class="package-attribute grid">
      <section class="table-column">Running Time</section>
      <section v-for="icon in 3" :key="icon" class="table-column">
        <base-icon name="check-filled" />
      </section>
    </div>
    <!-- Row 8 -->
    <div class="package-attribute grid is-white">
      <section class="table-column">Revisions</section>
      <section v-for="icon in 3" :key="icon" class="table-column">
        <base-icon name="check-filled" />
      </section>
    </div>
    <!-- Row 9  -->
    <div class="package-attribute grid">
      <section class="table-column">Delivery Time</section>
      <!-- Radio Inputs -->
      <section
        v-for="input in 3"
        :key="input"
        class="options table-column text-grey-primary"
      >
        <!-- Days -->
        <label for="10-days">
          <input id="10-days" type="radio" name="delivery-days" />
          10 Days
        </label>
        <label for="5-days">
          <input id="5-days" type="radio" name="delivery-days" />
          5 Days (+&50)
        </label>
      </section>
    </div>
    <!-- Row 10 -->
    <div class="package-attribute grid is-white">
      <section class="table-column">Enter Word Count</section>
      <section
        v-for="button in 3"
        :key="button"
        class="word-count table-column"
      >
        <h2 class="number font-bold text-dark-secondary">150</h2>
        <base-button shadow rounded color="white" outlined class="buy-button">
          Buy $45.99
        </base-button>
      </section>
    </div>
  </section>
</template>

<script>
import BaseIcon from '@/components/BaseComponents/BaseIcon';
import BaseButton from '@/components/BaseComponents/BaseButton';
export default {
  name: 'Packages',
  components: {
    BaseIcon,
    BaseButton,
  },
};
</script>

<style>
.packages-table {
  max-width: 751px;
  border-radius: 50%;
  border-radius: 15px;
  margin: 0 auto;
}
.packages-table .table-column:not(:last-child) {
  border-right: 1px solid theme('colors.grey.light-3');
}
.packages-table > *:first-child {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
.packages-table > *:last-child {
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.packages-table .row-1 {
  grid-template-rows: 110px; /* Row 1 height*/
  grid-template-columns: 205px repeat(3, 1fr);
  border-bottom: 1px solid theme('colors.grey.light-3');
}
.packages-table .row-2 {
  grid-template-rows: 245px; /* Row 2 height*/
  grid-template-columns: 205px repeat(3, 1fr);
}
.package-attribute {
  min-height: 49px;
  grid-template-columns: 205px repeat(3, 1fr);
  background-color: theme('colors.grey.light-4');
}
.package-attribute.is-white {
  background-color: transparent;
  min-height: 62px;
}
.packages-table .package-name,
.package-data {
  /* standard,advanced,premium grids & info grids*/
  padding-left: 24px;
  padding-bottom: 26px;
  padding-top: 18px;
}
.packages-table .package-data {
  padding-bottom: 16px;
}
.packages-table .package .price {
  margin-top: 10px;
  color: theme('colors.green.primary');
  font-weight: 700; /*bold*/
}
.packages-table .package .package-name {
  /* Row 1 */
  font-weight: 400; /*regular*/
  font-size: 20px;
}
.packages-table .package-data {
  display: flex;
  flex-direction: column;
}
.packages-table .package-data h2 {
  /* Row 2 */
  font-weight: 700; /*Bold*/
  font-size: 16px;
  margin-bottom: 24px;
  min-height: 50px;
}
.packages-table .package-data p {
  color: theme('colors.grey.primary');
  font-size: 16px;
  font-weight: 400;
  padding-right: 18px;
}
.package-attribute .table-column {
  display: flex;
  align-items: center;
  padding-left: 20px;
  color: theme('colors.grey.primary');
  font-weight: 400; /*regular*/
}
.package-attribute .options {
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 14px 0 12px 24px;
}
.package-attribute .options input[type='radio'] {
  border-color: theme('colors.green.primary');
}
.package-attribute .options label:last-child {
  margin-top: 16px;
}
.packages-table .word-count {
  flex-direction: column;
  padding: 26px 0 32px;
}
.packages-table .buy-button {
  padding: 10px 0;
  width: 150px;
  font-size: 16px;
  font-weight: 700; /* bold*/
  margin-top: 36px;
}
</style>
