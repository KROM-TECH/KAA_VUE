<template>
  <transition name="slide" appear>
    <div class="body">
      <img src="@/assets/error.svg" class="res-img grow" alt="" />
      <p class="text">
        Oops, Looks like something went wrong <br />Check your network and wifi connection and try
        again
      </p>
      <div class="d-flex flex-wrap"></div>
      <b-button
        class="blue Obtn btn-large"
        style="border:2px solid; margin-top:1rem;"
        @click="reload"
      >
        Reload
      </b-button>
      <b-button
        class="red Obtn btn-large"
        style="border:2px solid; margin-top:1rem;"
        @click="$emit('close')"
      >
        Close
      </b-button>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    reload() {
      location.reload();
    },
  },
};
</script>

<style scoped>
.blue {
  background-color: #00276f !important;
  color: white !important;
}
.red {
  background-color: #f52617 !important;
  color: white !important;
}
.text {
  text-align: center;
  color: #00276f;
  font-weight: 550;
  margin: 15px 4px;
}
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 100;
  position: fixed;
  overflow-x: hidden;
  top: 0;
  left: 0;
  background-color: rgb(220, 220, 220);
}
.grow {
  width: 35%;
  height: auto;
}

@media screen and (max-width: 640px) {
  .grow {
    width: 65%;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: 1s;
}

.slide-enter,
.slide-leave-to {
  transform: scale(1);
}
</style>
