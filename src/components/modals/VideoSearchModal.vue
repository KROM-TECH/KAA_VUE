<template>
  <div class="d-flex column">
    <transition name="slide" appear>
      <div class="modall" v-if="modal">
        <div class="d-flex justify-content-center" v-if="!data.name">
          <b-spinner type="grow load" label="Loading..."></b-spinner>
        </div>
        <div class=" card p-5 mx-2 d-flex justify-content-center align-items-center" v-else>
          <div class="close" @click="$emit('close')">X</div>
          <img :src="data.thumbnail" alt="" />

          <p class="desc">
            {{ data.name }}
          </p>
          <div class="d-flex flex-wrap justify-content-center">
            <a :href="data.vidOne.url" :download="data.name" type="download" target="_blank">
              <b-button class="green mt-2 mx-2">{{ data.vidOne.label }}</b-button></a
            >
            <a :href="data.vidTwo.url" :download="data.name" type="download" target="_blank">
              <b-button class="green mt-2 mx-2">{{ data.vidTwo.label }}</b-button></a
            >

            <b-button class="red mt-2  mx-2" @click="close">Close</b-button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "VideoBox",
  props: ["showModal", "link"],
  data() {
    return {
      data: {},
      Error: false,
    };
  },

  computed: {
    modal() {
      return this.showModal;
    },
  },
  watch: {
    modal() {
      this.getDetails();
    },
  },
  methods: {
    close() {
      this.$emit("close");
      this.data = null;
    },
    getDetails() {
      this.data = {};
      console.log(
        //   https://us-central1-kromtech-archive.cloudfunctions.net/YT/?link=https://www.youtube.com/watch?v=dtKciwk_si4
        `https://us-central1-kromtech-archive.cloudfunctions.net/GetDownloadLink/?link=${this.link}`,
      );
      fetch(
        encodeURI(
          `https://us-central1-kromtech-archive.cloudfunctions.net/YT/ ?link=${this.link}`,
          {
            mode: "no-cors",
          },
        ),
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log(data.vidOne);
          this.data = data;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
          this.Error = true;
        });
    },
  },
};
</script>

<style scoped>
img {
  height: 100%;
  width: auto;
  max-height: 120px;
}
.desc {
  font-size: 0.8rem;
  line-height: 1.2rem;
}
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
  width: fit-content;
  font-size: small;
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
