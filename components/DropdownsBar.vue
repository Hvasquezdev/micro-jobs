<template>
  <section class="dropdowns-bar flex items-center">
    <!-- Type  -->
    <div class="text-grey-light-2 text-base flex items-center font-normal">
      <label class="tracking-wide display-none" for="types">
        Types
      </label>
      <!-- Categories  -->
      <select
        id="types"
        class="block appearance-none shadow-card w-full py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white"
      >
        <option value="" disabled selected>Type</option>
        <option>Recently</option>
        <option>Old</option>
      </select>
    </div>
    <!-- File Format  -->
    <div class="text-grey-light-2 text-base flex items-center font-normal">
      <label class="tracking-wide display-none" for="file-format">
        File Format
      </label>
      <!-- Categories  -->
      <select
        id="file-format"
        class="block appearance-none shadow-card w-full py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white"
      >
        <option value="" disabled selected>File Format</option>
        <option>Recently</option>
        <option>Old</option>
      </select>
    </div>
    <!-- Packages Includes  -->
    <div class="text-grey-light-2 text-base flex items-center font-normal">
      <label class="tracking-wide display-none" for="package-includes">
        Package Includes
      </label>
      <!-- Categories  -->
      <select
        id="package-includes"
        class="block appearance-none shadow-card w-full py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white"
      >
        <option value="" disabled selected>Package Includes</option>
        <option>Recently</option>
        <option>Old</option>
      </select>
    </div>
    <!--Sort by  -->
    <div class="text-grey-light-2 text-base flex items-center font-normal">
      <label class="tracking-wide mr-4" for="sort-by">
        Sort by
      </label>
      <!-- Categories  -->
      <select
        id="sort-by"
        class="block appearance-none shadow-card w-full py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white"
      >
        <option value="" disabled selected>Most Popular</option>
        <option>Recently</option>
        <option>Old</option>
      </select>
    </div>
  </section>
</template>

<style>
.dropdowns-bar {
  max-width: 1140px;
}
.dropdowns-bar select {
  width: 210px;
  height: 58px;
  border-width: 0;
  border-radius: 15px;
  background-image: url('/images/png/dropdown-arrow.png'); /*list down icon*/
  background-repeat: no-repeat;
  background-position: 90% center;
}
.dropdowns-bar div:nth-child(3) select {
  width: 258px;
}
.dropdowns-bar div:not(:last-child) label {
  display: none;
}
.dropdowns-bar div:not(:last-child) {
  margin-right: 18px;
}
.dropdowns-bar div:last-child {
  margin: 0 0 0 auto;
}
</style>
