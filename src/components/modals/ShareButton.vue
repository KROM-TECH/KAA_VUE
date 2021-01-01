<template>
  <transition name="slide" appear>
    <div class="bg" v-if="showModal" @click="$emit('close')">
      <b-card class="card">
        <twitter-button
          shareUrl="https://github.com/"
          shareDescription=" test GitHub is where people build software."
        />
        <FacebookButton
          shareUrl="https://github.com/"
          shareDescription=" test GitHub is where people build software."
        />
        <WhatsappButton
          shareUrl="https://github.com/"
          shareDescription=" test GitHub is where people build software."
        />
        <TelegramButton
          shareUrl="https://github.com"
          shareDescription=" test GitHub is where people build software."
        />
        <LinkedInButton
          shareUrl="https://github.com"
          shareDescription=" test GitHub is where people build software."
        />
      </b-card>
    </div>
  </transition>
</template>

<script>
import TwitterButton from "vue-share-buttons/src/components/TwitterButton";
import FacebookButton from "vue-share-buttons/src/components/FacebookButton";
import WhatsappButton from "vue-share-buttons/src/components/WhatsAppButton";
import TelegramButton from "vue-share-buttons/src/components/TelegramButton";
import LinkedInButton from "vue-share-buttons/src/components/LinkedInButton";
export default {
  name: "success",
  components: {
    TwitterButton,
    FacebookButton,
    WhatsappButton,
    TelegramButton,
    LinkedInButton,
  },
  props: ["showModal"],
};
</script>

<style scoped>
.bg {
  position: fixed;
  background-color: rgba(41, 37, 37, 0.336);
  min-width: 100vw;
  min-height: 100vh;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img {
  width: 100px;
}
.card {
  min-width: 310px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: scale(0);
}
</style>
