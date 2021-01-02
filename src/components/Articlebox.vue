<template>
  <div class="d-flex column">
    <div class="box d-flex column align-item-center  p-3">
      <p class="header">{{ data.title }}</p>

      <div class="d-flex flex-wrap justify-content-center">
        <div v-for="(item, index) in data.tags" :key="index" class="badge">
          {{ item }}
        </div>
      </div>

      <b-button class="purple mt-2" @click="showModal = !showModal"
        >Details</b-button
      >
    </div>

    <transition name="slide" appear>
      <div class="modall" v-if="showModal">
        <div
          class=" card p-5 mx-2 d-flex justify-content-center align-items-center"
        >
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
              <b-button class="green mt-2 mx-2">Read</b-button></a
            >
            <b-button class="red mt-2  mx-2" @click="showModal = !showModal"
              >Close</b-button
            >
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "VideoBox",
  props: ["data"],
  data() {
    return {
      showModal: false
    };
  },

  mounted() {
    console.log(this.data);
  }
};
</script>

<style scoped>
a {
  color: inherit;
}
.red {
  background-color: #f52617 !important;
  color: white !important;
  width: 9rem;
}
.green {
  background-color: #006f4a !important;
  width: 9rem;
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
.card {
  max-width: 550px;
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
.purple {
  background-color: #7c69ef !important;
}
.badge {
  background: #000;
  border-radius: 5px;
  color: #fff;
  padding: 7px;
  margin: 4px;
  font-weight: 200;
  letter-spacing: 1.4px;
}

.header {
  color: rgba(255, 255, 255, 0.877) !important;
  text-align: center;
  font-weight: 540;
  font-size: 1rem;
  word-spacing: 2.4px;
  letter-spacing: 1.7px;
  line-height: 1.3rem;
}

.box {
  width: 250px;
  height: 210px;
  background: #111156;
  border-radius: 8px;
  margin: 1rem;
}
.column {
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: scale(0);
}
</style>
