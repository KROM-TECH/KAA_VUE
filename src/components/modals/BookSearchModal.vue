<template>
  <div class="d-flex column">
    <transition name="slide" appear>
      <div class="modall" v-if="modal">
        <div class="d-flex justify-content-center" v-if="!data.length">
          <b-spinner type="grow load" label="Loading..."></b-spinner>
        </div>
        <div class=" card p-5 mx-2 d-flex justify-content-center align-items-center" v-else>
          <div class="close" @click="$emit('close')">X</div>
          <img
            src="https://covers.zlibcdn2.com/covers299/books/87/ee/7c/87ee7c737855d38cdfc20b6da94e69d4.jpg"
            alt=""
          />

          <p class="desc">
            This new translation offers a faithful yet accessible English-language rendering of the
            twelfth-century Gesta Francorum et aliorum Hierosolomitanorum, the earliest known Latin
            account of the First Crusade. Although an anonymous work, it has become the exemplar for
            all later histories and retellings of the First Crusade. As such, it is filled with
            vivid descriptions of the hardships suffered by the crusaders, with deeds of personal
            heroism, with courtly intrigues, with betrayal and cowardice, and with a relentless
            faith that would see the attainment of the desired goal: the capture of Jerusalem by the
            crusaders in 1095. There is a great deal of mystery surrounding this anonymous account,
            especially in regard to its authorship; place, date, and purpose of composition;
            narrative methodology; and point of view. It is also a sweeping tale that swiftly moves
            from the first preaching of the crusade by Pope Urban II, to the ragtag and ultimately
            doomed effort of the popular People's Crusade, and then the more disciplined and
            concerted campaign by the French and
          </p>
          <div class="d-flex">
            <b-button class="green mt-2 mx-2">Download (pdf, 1.91 MB)</b-button>

            <b-button class="red mt-2  mx-2" @click="$emit('close')">Close</b-button>
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
      data: [],
      Error: false,
    };
  },
  filters: {
    truncate: function(text, length = 24, clamp) {
      clamp = clamp || "...";
      var node = document.createElement("div");
      node.innerHTML = text;
      var content = node.textContent;
      return content.length > length ? content.slice(0, length) + clamp : content;
    },
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
    getDetails() {
      this.data = [];
      console.log(`https://book-web-scraper-api.herokuapp.com/details/?link=${this.link}`);
      fetch(encodeURI(`https://book-web-scraper-api.herokuapp.com/details/?link=${this.link}`))
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.data = data;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.Error = true;
        });
    },
    download() {
      fetch(encodeURI(`https://book-web-scraper-api.herokuapp.com/download/?link=${this.link}`));
    },
  },
};
</script>

<style scoped>
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
