<template>
  <section
    class="gig-details-list flex flex-col items-start text-grey-primary font-manrope"
  >
    <!-- What You Get  -->
    <h1 class="font-bold text-dark-secondary mb-3">What You Get</h1>
    <p class="mb-8">
      For <strong>$155</strong> i will provide you a 90 second high quality
      video. You also get:
    </p>
    <ul class="custom-list-style mb-10">
      <li>Script</li>
      <li>Animation</li>
      <li>Voice Over</li>
      <li>Sync</li>
      <li>Background Music</li>
      <li>Logo/URL Addition</li>
      <li>Unlimited Alterations</li>
      <li>(ANIMATION)</li>
      <li>Copyright Transfer</li>
    </ul>
    <!-- Price Breakdown  -->
    <h1 class="font-bold text-dark-secondary mb-3">Price Breakdown</h1>
    <ul class="custom-list-style mb-10">
      <li>Script Writing: $10 (150 words)</li>
      <li>Animation: $5 per second animation (2 second - words)</li>
      <li>Voice Over: $10 (150 words)</li>
      <li>Sync: $10 (150 words)</li>
      <li>Background Music: $5</li>
      <li>Logo Addition: $5</li>
      <li>URL Addition: $5</li>
      <li>Unlimited Alterations Addition: Free</li>
    </ul>
    <!-- Time  -->
    <h1 class="font-bold text-dark-secondary mb-3">Time</h1>
    <ul class="custom-list-style mb-10 days-list">
      <li>Script Writing <span class="days"> 2 Days</span></li>
      <li>Animation <span class="days"> 2 Days</span></li>
      <li>Voice Over <span class="days"> 2 Days</span></li>
      <li>Voice Sync <span class="days"> 2 Days</span></li>
    </ul>
  </section>
</template>

<style>
.gig-details-list h1 {
  font-size: 22px;
}

.gig-details-list strong {
  font-weight: 700; /*bold*/
  color: theme('colors.green.secondary');
}
.gig-details-list .days {
  color: theme('colors.dark.secondary');
  font-weight: 700; /*bold*/
}
.custom-list-style li {
  position: relative;
  font-weight: 400; /*regular*/
}
.custom-list-style li:not(:last-child) {
  margin-bottom: 16px;
}
.custom-list-style li::before {
  content: url('/images/svg/check-filled.svg');
  margin-right: 12px;
  position: relative;
  top: 2px;
}
.custom-list-style.days-list li {
  min-width: 276px;
  display: flex;
}
.custom-list-style.days-list .days {
  margin: auto 0 auto auto;
}
.custom-list-style.days-list .days::before {
  content: ':';
  margin-right: 10px;
}
</style>
