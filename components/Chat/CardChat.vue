<template>
  <div
    :class="{ 'is-active': isActive }"
    class="chat-card cursor-pointer flex items-center justify-start w-full bg-grey-light-9 flex-shrink-0"
  >
    <!-- User picture -->
    <div class="card-thumb rounded-full bg-white flex-shrink-0 relative">
      <img
        class="rounded-full object-cover w-full h-full"
        src="/images/jpg/profile.jpg"
        width="53px"
        height="53px"
        alt="User name"
      />
      <div class="user-status absolute rounded-full bg-white">
        <div
          class="status-color w-full h-full rounded-full bg-green-primary"
        ></div>
      </div>
    </div>

    <div class="card-content w-full">
      <!-- title and date -->
      <div
        class="content-head font-manrope w-full flex items-center justify-between"
      >
        <h3 class="title text-dark-secondary font-semibold">Name</h3>
        <span class="date text-grey-light-10">Today</span>
      </div>

      <!-- message preview and counter -->
      <div
        class="content-body font-manrope w-full flex items-center justify-between"
      >
        <p class="message-preview text-grey-primary text-base">
          Lorem, ipsum dolor.
        </p>
        <span
          class="message-counter flex items-center justify-center text-white bg-red-primary rounded-full font-extrabold"
        >
          4
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatCard',

  props: {
    isActive: Boolean,
  },
};
</script>

<style>
.chat-card {
  padding: 40px 43px 30px 25px;
  border-bottom: 1px solid theme('colors.grey.light-11');
}
.chat-card.is-active {
  background-color: theme('colors.white');
  border-left: 3px solid theme('colors.red.primary');
  box-shadow: 4px 0px 38px rgba(139, 149, 169, 0.29);
  transform: scale(1);
}
.chat-card .card-thumb {
  width: 55px;
  height: 55px;
  padding: 2px;
  margin-right: 22px;
  box-shadow: 2px 0px 24px rgba(139, 149, 169, 0.24);
}
.chat-card .card-thumb .user-status {
  width: 12px;
  height: 12px;
  right: 2px;
  top: 2px;
  padding: 2px;
}
.chat-card .card-content .content-head {
  margin-bottom: 5px;
}
.chat-card .card-content .content-head .title {
  font-size: 18px;
}
.chat-card .card-content .content-head .date {
  font-size: 15px;
}
.chat-card .card-content .content-body .message-counter {
  width: 24px;
  height: 24px;
  font-size: 12px;
  box-shadow: 4px 0px 21px rgba(237, 133, 144, 0.26);
}
</style>
