<template>
  <transition name="slide" appear>
    <div class="bg" v-if="showModal" @click="$emit('close')">
      <b-card class="card">
        <img src="@/assets/mark.svg" class="img" alt="" />
        <p>Request Submitted <br />We would get back to you soon</p>
      </b-card>
    </div>
  </transition>
</template>

<script>
export default {
  name: "success",
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
