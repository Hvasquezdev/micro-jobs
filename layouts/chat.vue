<template>
  <div>
    <chat-navbar class="w-full z-50" />
    <Nuxt />
  </div>
</template>

<script>
import ChatNavbar from '@/components/ChatNavbar';

export default {
  components: {
    ChatNavbar,
  },
};
</script>

<style></style>
