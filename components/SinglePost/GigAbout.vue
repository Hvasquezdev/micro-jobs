<template>
  <section class="about-this-gig font-manrope flex-col items-start">
    <h1 class="font-bold text-dark-secondary">About This Gig</h1>
    <p class="bg-light-green">
      Offering Commercial Rights Transfer on each of the orders via
      micro-jobs.com will send complete documents.
    </p>
    <p>
      Planning to get <strong>2D animation</strong> for your product, service or
      business? Well there are quite a few hurdles that you would need to face
      including.
    </p>
    <ul class="my-8">
      <li>High production charges</li>
      <li>identication of correct</li>
      <li>supplier</li>
    </ul>
    <p>
      Well, now all you need to do is order the deal package and get a high
      quality <strong>2D animated</strong> video for you business in just
      <strong>7 days.</strong>
    </p>
  </section>
</template>

<style>
.about-this-gig {
  font-size: 16px;
  max-width: 751px;
  margin-bottom: 60px;
}

.about-this-gig h1 {
  font-size: 22px;
}
.about-this-gig p {
  color: theme('colors.grey.primary');
}
.about-this-gig li {
  font-weight: 700; /*bold*/
  display: flex;
  align-items: center;
}
/*Custom list bullets */
.about-this-gig ul li::before {
  content: '';
  display: inline-block;
  background-color: theme('colors.green.secondary');
  width: 6px;
  height: 6px;
  border-radius: 99999px;
  margin-right: 12px;
}
.about-this-gig li:not(:last-child) {
  margin-bottom: 20px;
}
.about-this-gig strong {
  font-weight: 700; /*bold*/
  color: theme('colors.green.secondary');
}
.about-this-gig .bg-light-green {
  background-color: theme('colors.green.light');
  padding: 25px 80px 25px 20px;
  font-weight: 500; /*medium*/
  color: theme('colors.green.secondary');
  border-radius: 15px;
  margin: 34px 0;
}
</style>
