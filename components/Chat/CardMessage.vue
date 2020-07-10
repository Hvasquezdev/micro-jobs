<template>
  <div
    class="card-message w-full flex flex-col items-start justify-center bg-white"
  >
    <div
      class="message-header font-manrope w-full flex items-center justify-between"
    >
      <div class="user-info flex items-center justify-start">
        <div class="user-thumb rounded-full bg-white">
          <img
            class="w-full h-full rounded-full object-cover"
            src="/images/jpg/profile.jpg"
            alt="User name"
          />
        </div>
        <h3 class="user-name text-dark-secondary font-semibold">
          Nombre
        </h3>
      </div>

      <span class="date text-grey-light-10">
        11:45pm
      </span>
    </div>

    <p class="message-content text-grey-primary text-base">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, veritatis.
    </p>

    <div class="message-images grid w-full">
      <a href="#" class="image-link flex items-center justify-center">
        <img
          class="w-full h-full"
          src="/images/jpg/gallery-img.jpg"
          alt="Image description"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardMessage',
};
</script>

<style>
.card-message {
  padding: 18px 0 20px 0;
  border-bottom: 1px solid #e5e5e5;
}
.card-message .message-header {
  margin-bottom: 10px;
}
.card-message .message-header .user-info .user-thumb {
  width: 55px;
  height: 55px;
  padding: 2px;
  margin-right: 22px;
  box-shadow: 2px 0px 24px rgba(139, 149, 169, 0.24);
}
.card-message .message-header .user-info .user-name {
  font-size: 18px;
}
.card-message .message-header .date {
  font-size: 15px;
}
.card-message .message-images {
  margin-top: 20px;
  grid-template-columns: repeat(auto-fit, 90px);
  column-gap: 15px;
  row-gap: 15px;
}
.card-message .message-images .image-link {
  width: 90px;
  height: 80px;
  border-radius: 14px;
}
.card-message .message-images .image-link img {
  border-radius: 14px;
}
</style>
