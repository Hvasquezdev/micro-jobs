<template>
  <aside
    class="flex font-manrope flex-col shadow-card items-start profile-sidebar"
  >
    <!-- Post a Job & Invite to Job  -->
    <ul class="header-links flex items-start w-full font-bold">
      <li class="cursor-pointer">Post a Job</li>
      <li class="cursor-pointer is-active">Invite to Job</li>
    </ul>
    <div class="flex-col features w-full items-start">
      <!-- Job Done rate  -->
      <section class="job-done-rate pt-10 flex-col flex">
        <div class="flex justify-between items-start">
          <h2 class="capitalize font-bold text-lg">Job Done Rate</h2>
          <p class="bar-percentage font-bold text-base text-green-primary">
            94%
          </p>
        </div>
        <!-- Progress Bar Container -->
        <div class="bar-placeholder w-full relative">
          <!-- Bar % padding  -->
          <div class="line absolute h-full">
            <!-- Circle  -->
            <div class="circle absolute rounded-full"></div>
          </div>
        </div>
      </section>
      <!-- Work History  -->
      <section class="work-history">
        <h2>Work History</h2>
        <ul class="text-grey-primary">
          <li>10 Jobs Completed</li>
        </ul>
      </section>
      <!-- Availability  -->
      <section class="availability">
        <h2>Availability</h2>
        <ul class="custom-list-style text-grey-primary text text-base">
          <li>Available</li>
          <li>As Needed - Open to Offers</li>
          <li>24h hrs response time</li>
        </ul>
      </section>
      <!-- User Profile Link  -->
      <section class="user-link">
        <h2>User Profile Link</h2>
        <a class="font-normal text-base text-green-primary underline" href="#"
          >http://micro-jobs.com</a
        >
      </section>
      <!-- Search For Others  -->
      <section class="search">
        <h2>Search For Others</h2>
        <!-- Search Input  -->
        <label class="relative w-full" for="search-others">
          <input
            id="search-others"
            type="search"
            class="text-grey-secondary w-full h-full shadow-card rounded-full"
            name="search-others"
            placeholder="Search"
          />
          <button
            class="absolute bg-no-repeat bg-center"
            type="submit"
          ></button>
        </label>
        <!-- Others -->
        <ul class="custom-list-style text-grey-primary text text-base">
          <li><a href="#">PHP Developers & Programmers</a></li>
          <li><a class="is-active" href="#">JQuery Developers</a></li>
          <li><a href="#">HTML5 Developers</a></li>
          <li><a href="#">HTML Developers</a></li>
          <li><a href="#">CSS Developers & Designers</a></li>
        </ul>
      </section>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'ProfileAside',
  components: {},
};
</script>

<style>
.profile-sidebar {
  max-width: 360px;
  padding: 0;
  border-radius: 15px;
}
.profile-sidebar .features > section {
  padding-bottom: 50px;
}
.profile-sidebar .features section:not(:first-child) h2 {
  font-weight: 700; /*bold*/
  font-size: 16px;
  padding-bottom: 14px;
  margin-bottom: 12px;
}
.profile-sidebar .features section:not(:last-child, :first-child) h2 {
  border-bottom: 1px solid theme('colors.grey.light-3');
}
.profile-sidebar .job-done-rate h2 {
  margin-bottom: 10px;
}
.profile-sidebar > *:last-child {
  padding: 0 30px;
}
.profile-sidebar .header-links {
  padding: 18px 23px 0;
  border-bottom: 1px solid theme('colors.grey.light-3');
}
.profile-sidebar .header-links li {
  font-weight: 700; /*extrabold*/
  color: theme('colors.grey.primary');
  padding-bottom: 18px;
}
.profile-sidebar .header-links li:first-child {
  margin-right: 56px;
}
.profile-sidebar .header-links li.is-active {
  border-bottom: 3px solid theme('colors.red.primary');
  color: theme('colors.red.primary');
}
/* Progress Bar Styles */
.profile-sidebar .bar-placeholder {
  background-color: #ecf5f3;
  height: 5px;
  border-radius: 20px;
}
.profile-sidebar .bar-placeholder .line {
  background-color: theme('colors.green.secondary');
  width: 80%;
  border-radius: 20px;
}
.profile-sidebar .bar-percentage {
  margin-right: 50px;
  margin-top: 5px;
}
.profile-sidebar .bar-placeholder .circle {
  border: 4px solid theme('colors.green.secondary');
  height: 18px;
  width: 18px;
  background-color: #ffffff;
  right: 0;
  top: 0;
  transform: translate(0, -6px);
}
/* Progress Bar Styles */
.profile-sidebar .custom-list-style li::before {
  content: '';
  display: inline-block;
  background-color: theme('colors.green.secondary');
  width: 6px;
  height: 6px;
  border-radius: 99999px;
  margin-right: 12px;
  margin-bottom: 3px;
}
.profile-sidebar .features li:not(:last-child) {
  margin-bottom: 12px;
}
.profile-sidebar .search label {
  height: 58px;
  max-width: 302px;
  display: inline-block;
  margin-bottom: 40px;
}
.profile-sidebar .search label button {
  width: 40px;
  height: 40px;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background-image: url('/images/png/search-icon.png');
  outline: none;
}
.profile-sidebar .search input {
  text-indent: 26px;
  font-size: 16px;
  outline: none;
}
.profile-sidebar .user-link a {
  position: relative;
}
.profile-sidebar .user-link a::before {
  content: url('/images/png/link.png');
  position: relative;
  top: 2.5px;
  margin-right: 14px;
}
.profile-sidebar .search a.is-active {
  font-weight: 600; /*semibold*/
  color: theme('colors.green.secondary');
}
</style>
