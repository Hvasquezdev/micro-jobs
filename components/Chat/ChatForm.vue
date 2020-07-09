<template>
  <div
    class="chat-form relative text-grey-tertiary bg-white rounded-full shadow-btn flex items-center justify-between"
  >
    <!-- <div class="is-typing flex w-full items-center justify-start absolute">
      <div class="thumb rounded-full">
        <img
          class="w-full h-full object-cover rounded-full"
          src="/images/jpg/profile.jpg"
          alt="User name"
        />
      </div>
      <h4 class="title text-dark-secondary font-semibold">Name</h4>
      <p class="text-grey-light-8">Typing...</p>
    </div> -->

    <div class="form-input flex items-center flex-start w-full mr-4">
      <base-icon name="mic" />
      <base-input
        class="w-full"
        placeholder="Type a message here..."
        :border="false"
      />
    </div>

    <div class="form-actions flex items-center justify-end">
      <base-button
        class="fav-btn flex items-center justify-center"
        color="white"
        rounded
      >
        <base-icon name="happy" />
      </base-button>
      <base-button
        class="fav-btn flex items-center justify-center"
        color="white"
        rounded
      >
        <base-icon name="file" />
      </base-button>
      <base-button color="danger" class="capitalize flex-shrink-0" rounded>
        send
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseComponents/BaseInput';
import BaseButton from '@/components/BaseComponents/BaseButton';
import BaseIcon from '@/components/BaseComponents/BaseIcon';

export default {
  name: 'ChatForm',

  components: {
    BaseInput,
    BaseButton,
    BaseIcon,
  },
};
</script>

<style>
.chat-form {
  padding: 8px 8px 8px 45px;
  box-shadow: 2px 0px 24px rgba(139, 149, 169, 0.24);
}
.chat-form .form-input .svg-icon {
  font-size: 25px;
  margin-right: 15px;
}
.chat-form .base-input {
  color: theme('colors.grey.tertiary');
}
.chat-form .form-actions .base-button {
  box-shadow: 4px 0 21px rgb(237, 133, 144, 0.26);
  height: 59px;
  padding-left: 50px;
  padding-right: 50px;
}
.chat-form .form-actions .fav-btn {
  padding: 10px;
  height: auto;
  font-size: 25px;
  box-shadow: none;
}
.chat-form .form-actions > *:not(:last-child) {
  margin-right: 20px;
}
.chat-form .is-typing {
  padding: 25px 0;
  left: 0;
  top: -110px;
}
/* .chat-form .is-typing .thumb {
  width: 55px;
  height: 55px;
  padding: 2px;
  margin-right: 22px;
  box-shadow: 2px 0px 24px rgba(139, 149, 169, 0.24);
}
.chat-form .is-typing .title {
  font-size: 18px;
  margin-right: 20px;
}
.chat-form .is-typing p {
  font-size: 18px;
} */
</style>
