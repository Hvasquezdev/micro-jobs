<template>
  <div class="chat flex">
    <sidebar class="chat-list flex-shrink-0 overflow-y-scroll">
      <card-chat v-for="chat in 8" :key="chat" />
    </sidebar>

    <!-- Messages of selected chat -->
    <main
      class="chat-messages w-full h-full flex flex-col items-center justify-center"
    >
      <div class="messages-list w-full mb-auto">
        <div class="messages-wrapper w-full overflow-y-scroll">
          <card-message v-for="message in 4" :key="message" />
        </div>

        <div class="is-typing flex w-full items-center justify-start">
          <div class="thumb rounded-full">
            <img
              class="w-full h-full object-cover rounded-full"
              src="/images/jpg/profile.jpg"
              alt="User name"
            />
          </div>
          <h4 class="title text-dark-secondary font-semibold">Name</h4>
          <p class="text-grey-light-10">Typing...</p>
        </div>
      </div>

      <chat-form class="w-full" />
    </main>
  </div>
</template>

<script>
import CardChat from '@/components/Chat/CardChat';
import CardMessage from '@/components/Chat/CardMessage';
import ChatForm from '@/components/Chat/ChatForm';

export default {
  name: 'Chat',

  layout: 'chat',

  components: {
    CardChat,
    CardMessage,
    ChatForm,
  },
};
</script>

<style>
.chat {
  height: calc(100vh - 108px);
}
.chat .chat-list {
  flex-basis: 30%;
  max-width: 475px;
  border-right: 1px solid #f6e7e9;
  max-height: 100%;
}
.chat .chat-list::-webkit-scrollbar {
  width: 11px;
}
.chat .chat-list {
  scrollbar-width: thin;
  scrollbar-color: #ed8590 #f6e7e9;
}
.chat .chat-list::-webkit-scrollbar-track {
  background: #f6e7e9;
}
.chat .chat-list::-webkit-scrollbar-thumb {
  background-color: #ed8590;
  border-radius: 6px;
  border: 3px solid #f6e7e9;
}
.chat .chat-messages {
  padding: 40px 55px 20px 55px;
}
.chat .chat-messages .messages-list {
  max-height: calc(100% - 95px);
}
.chat .chat-messages .messages-list .messages-wrapper {
  max-height: calc(100% - 95px);
}
.chat .chat-messages .messages-list .messages-wrapper {
  scrollbar-width: none;
  scrollbar-color: #ed8590 #f6e7e9;
}
.chat .chat-messages .messages-input {
  padding: 25px 45px;
  box-shadow: 2px 0px 24px rgba(139, 149, 169, 0.24);
}
.chat .chat-messages .messages-list .is-typing {
  padding: 25px 0 20px 0;
}
.chat .chat-messages .messages-list .is-typing .thumb {
  width: 55px;
  height: 55px;
  padding: 2px;
  margin-right: 22px;
  box-shadow: 2px 0px 24px rgba(139, 149, 169, 0.24);
}
.chat .chat-messages .messages-list .is-typing .title {
  font-size: 18px;
  margin-right: 20px;
}
.chat .chat-messages .messages-list .is-typing p {
  font-size: 18px;
}
</style>
