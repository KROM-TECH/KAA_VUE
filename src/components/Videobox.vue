<template>
  <div class="d-flex column">
    <div class="box d-flex justify-content-center align-items-center">
      <img src="@/assets/video.svg" alt="" />
    </div>
    <b-button @click="showModal = !showModal" class="mb-2 primary ">Details</b-button>

    <transition name="slide" appear>
      <div class="modall" v-if="showModal">
        <div class=" card p-5 mx-2 d-flex justify-content-center align-items-center">
          <div class="close" @click="showModal = false">X</div>
          <div>
            <span>Title</span>
            <p class="text">{{ data.title }}</p>
          </div>
          <div>
            <span>University</span>
            <p class="text">{{ data.university }}</p>
          </div>
          <div>
            <span>Faculty</span>
            <p class="text">{{ data.faculty }}</p>
          </div>
          <div>
            <span>Department</span>
            <p class="text">{{ data.department }}</p>
          </div>
          <div>
            <span>Level</span>
            <p class="text">{{ data.level }}</p>
          </div>
          <div>
            <span>Uploader</span>
            <p class="text">{{ data.uploader }}</p>
          </div>

          <div class="d-flex">
            <a :href="data.link" target="_blank">
              <b-button class="green mt-2 mx-2">Watch</b-button></a
            >
            <b-button class="red mt-2  mx-2" @click="showModal = !showModal">Close</b-button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "VideoBox",
  props: ["data", "index"],
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style scoped>
a {
  color: inherit;
}
.card {
  max-width: 550px;
}
.text {
  color: #08204d !important;
  font-weight: 540;
  font-size: 1rem;
  word-spacing: 3px;
  line-height: 1.3rem;
}
div {
  text-align: center;
  margin: 3px 0px;
}
span {
  display: block;
  font-weight: 700;
  color: #00276f;
}
.box {
  width: 200px;
  height: 150px;
  background: #000;
  border-radius: 8px;
  margin: 1rem;
}
.column {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.primary,
.btn-secondary {
  background-color: #00276f !important;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff !important;
  width: 9rem;
  height: 2.4rem;
  border-radius: 0.2rem;
  font-weight: 600;
  border: none;
}
.primary:hover,
.btn-secondary:hover {
  background: #00276f94 !important;
  border-color: #00276f94 !important;
}
.green {
  background-color: #006f4a !important;
}
.red {
  background-color: #f52617 !important;
  color: white !important;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: scale(0);
}

span {
  display: block;
  font-weight: 700;
  color: #00276f;
}
.text {
  color: #08204d !important;
  font-weight: 540;
  font-size: 1rem;
  word-spacing: 3px;
  line-height: 1.3rem;
}
div {
  text-align: center;
  margin: 3px 0px;
}
.modall {
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  z-index: 99;
  width: 100%;
  height: 100%;
  max-width: 100%;
  background-color: rgb(0, 0, 0, 0.25);
  border: 1px solid #6c63ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.close {
  position: absolute;
  top: 3px;
  right: 10px;
  font-weight: 900;
  font-size: 1.5rem;
  color: #000 !important;
  cursor: pointer;
}
</style>
