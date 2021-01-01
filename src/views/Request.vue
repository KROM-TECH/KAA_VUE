<template>
  <div>
    <Menu />
    <Success :showModal="showModal" @close="showModal = false" />
    <section class="pt-4 pt-md-11">
      <b-container>
        <b-row align-h="center" class="font text-center">
          <b-col>
            <h1>
              <span class="tex-primary">Request</span>
            </h1>
            <p class="lead text-gray-700">
              Fill out the form to request a book and we would try to get it for you
            </p>
          </b-col>
        </b-row>

        <b-row class="justify-content-center align-items-center">
          <form
            @click="showModal"
            name="submit-to-google-sheet"
            @submit.prevent="send($event)"
            style="padding: 5%; text-align:start; "
            class="form justify-content-center align-items-center"
          >
            <b-row class="justify-content-center  mb-3">
              <div class="col-12 col-md-6">
                <label for="nickname">Phone num</label>
                <input
                  id="Phone"
                  name="Phone"
                  type="text"
                  aria-autocomplete="number"
                  class="input mb-3"
                  placeholder="Enter Your phone number"
                  v-model="a"
                  required
                />
              </div>
              <div class="col-12 col-md-6">
                <label for="email">Email</label>
                <input
                  id="Email"
                  name="Email"
                  type="email"
                  class="input mb-1"
                  v-model="b"
                  placeholder="Enter Your Email"
                />
              </div>
            </b-row>
            <b-row class="justify-content-center  mb-3">
              <div class="col-12 col-md-6">
                <label for="Topic">Topic/Title</label>
                <input
                  id="Topic"
                  name="Topic"
                  type="text"
                  class="input mb-3"
                  placeholder="Enter the Topic"
                  v-model="c"
                  required
                />
              </div>
              <div class="col-12 col-md-6">
                <label for="Author">Author</label>
                <input
                  id="Author"
                  name="Author"
                  type="text"
                  class="input mb-1"
                  v-model="d"
                  placeholder="Enter the Author"
                />
              </div>
            </b-row>

            <b-row class="justify-content-center  mb-3">
              <div class="col-12 col-md-6">
                <label for="Type">type</label>
                <select
                  name="Type"
                  id="Type"
                  class="input"
                  required
                  v-model="e"
                  style="display: block;"
                >
                  <option value="" disabled selected>Select Your type</option>
                  <option value="Book">Book</option>
                  <option value="Video">Video</option>
                  <option value="Article">Article</option>
                  <option value="Any">Any</option>
                </select>
              </div>
              <div class="col-12 col-md-6">
                <label for="Faculty">Department</label>
                <input
                  v-model="f"
                  id="Department"
                  name="Department"
                  type="text"
                  class="input mb-1"
                  placeholder="Enter Your Department"
                />
              </div>
            </b-row>

            <b-row class="justify-content-center  mb-3">
              <div class="col-12 col-md-6">
                <label for="Department">Level</label>
                <input
                  v-model="g"
                  id="Level"
                  name="Level"
                  type="text"
                  class="input mb-1"
                  placeholder="Enter Your Level"
                />
              </div>
              <div class="col-12 col-md-6">
                <label for="Level">other Specifications</label>
                <input
                  id="Spec"
                  name="Spec"
                  v-model="h"
                  type="text"
                  class="input mb-1"
                  placeholder=""
                />
              </div>
            </b-row>

            <b-row class="justify-content-center align-item-center mb-3">
              <b-button v-if="!loading" type="submit" class="green mt-2 mx-3">Sumbit</b-button>
              <b-spinner v-else label="Spinning"></b-spinner>
            </b-row>
          </form>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Success from "@/components/modals/success.vue";

export default {
  components: { Menu, Success },
  data() {
    return {
      a: "",
      b: "",
      c: "",
      d: "",
      e: "",
      f: "",
      g: "",
      h: "",
      showModal: false,
      loading: false,
      NumBook: "",
      selected: "",
      placeholder: "",
      searchInput: "",
      data: [],
      options: [
        { value: "", text: "Type", disabled: true },
        { value: "Book", text: "Book" },
        { value: "Video", text: "Video" },
        { value: "Article", text: "Article" },
      ],
    };
  },

  methods: {
    reset() {
      this.a = "";
      this.b = "";
      this.c = "";
      this.d = "";
      this.e = "";
      this.f = "";
      this.g = "";
      this.h = "";
    },
    send(e) {
      this.loading = true;
      e.preventDefault();
      console.log(e);
      this.submitBtn = true;
      console.log("object");
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbxZjdjhySBOAj_5Jxt9DtpViKjjqUM9GvoGVB9QYIQ8QunlrhKZ6or6/exec";
      const form = document.forms["submit-to-google-sheet"];
      console.log(form);
      fetch(scriptURL, { method: "POST", mode: "no-cors", body: new FormData(form) })
        .then(() => {
          let text = document.getElementsByTagName("input");
          text.value = "";
          this.loading = false;
          this.showModal = true;
          this.reset();
        })
        .catch((error) => {
          console.log(error);
          alert("Something went wrong! please try again");
          this.loading = false;
        });
    },
  },

  mounted() {},
};
</script>

<style scoped>
::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #748194;
}
.input {
  width: 232px !important;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) !important;
  outline: none !important;
  border: none !important;
  background: #eef0f2 !important;
  color: #00276f !important;
  font-size: 14px !important;
  font-weight: bold !important;
  padding: 10px;
  border-radius: 3px;
  display: block;
}
select {
  width: 232px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  outline: none;
  border: none;
  background: #eef0f2;
  color: #00276f;
  font-size: 14px;
  font-weight: bold;
}

.lead {
  color: rgba(0, 0, 0, 0.726) !important;
  font-weight: 540;
  font-size: 1.1rem;
  padding: 1rem;
  word-spacing: 2px;
  line-height: 1.5rem;
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
}
.primary:hover,
.btn-secondary:hover {
  background: #00276f94 !important;
  border-color: #00276f94 !important;
}

.upload {
  color: #00276f !important;
  text-align: center;
  font-weight: 550 !important;
}
.tex-primary {
  color: #00276f !important;
  font-weight: 600;
  font-size: 2.5rem;
}
</style>
