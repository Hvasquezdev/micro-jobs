<template>
  <article class="card-order flex relative flex-col items-star font-manrope">
    <!-- Title  -->
    <h2 class="font-semibold text-lg text-dark-secondary mb-4">
      I will record a BRITISH female voice over in
      <strong class="text-green-primary">48 hours</strong>
    </h2>
    <!-- Description  -->
    <p class="text-grey-primary mb-5">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
      cumque pariatur quidem molestias laudantium fugit quas.
    </p>
    <!-- Hour & Messages  -->
    <div class="hour-messages relative flex items-start text-grey-light-7">
      <span class="hour">4 hr ago</span>
      <a href="#" class="messages">2 Messages</a>
    </div>
    <!-- State  -->
    <div class="state cursor-pointer">Lorem</div>
  </article>
</template>

<script></script>

<style>
.card-order {
  padding: 32px 0;
  border-bottom: 1px solid theme('colors.grey.light-5');
  max-width: 781px;
}
.card-order p {
  max-width: 75%;
}
.card-order .hour-messages * {
  margin-right: 38px;
}
.card-order .hour-messages {
  font-size: 15px;
}
.card-order .hour-messages ::before {
  margin-right: 13px;
}
.card-order .hour:before {
  content: url('/images/png/clock.png');
  position: relative;
  top: 2px;
}
.card-order .messages::before {
  content: url('/images/png/message.png');
}
/* State Tag  */
.card-order .state {
  height: 44px;
  width: 126px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  font-weight: 700; /*bold*/
  justify-content: center;
  position: absolute;
  top: 50%;
  right: -10px;
  transform: translateY(-50%);
}
</style>
