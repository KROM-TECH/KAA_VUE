<template>
  <div>
    <Error v-if="Error" @close="Error = !Error" />
    <Menu />
    <section class="pt-4 pt-md-11">
      <b-container>
        <b-row align-h="center" class="font text-center">
          <b-col>
            <h1>
              <span class="tex-primary">Video Search</span>
            </h1>
            <p class="lead text-gray-700">
              Input the Youtube link below to initialize download
              <br />
              <!-- <span class="result" v-if="data.length" v-html="searchResult"></span> -->
              <br />
              <router-link class="box" to="/guide" style="margin: 1rem;">
                Learn More
              </router-link>
            </p>
          </b-col>
        </b-row>

        <b-row class="justify-content-center ">
          <b-form-input
            class="input my-3"
            :placeholder="placeholder"
            v-model="searchInput"
            type="search"
          ></b-form-input>

          <button
            class="primary my-3 mt-3"
            :disabled="searchInput == ''"
            @click="search"
            @keypress.enter="search"
          >
            Search
          </button>
        </b-row>
      </b-container>
    </section>
    <VideoSearchModal :showModal="showModal" @close="showModal = !showModal" :link="link" />
  </div>
</template>

<script>
import Error from "@/components/Error.vue";
import Menu from "@/components/Menu.vue";
import ytpl from "ytpl";
import VideoSearchModal from "@/components/modals/VideoSearchModal.vue";
export default {
  components: { Menu, Error, VideoSearchModal },
  data() {
    return {
      showModal: false,
      loading: false,
      Error: false,
      link: "",
      placeholder: "",
      searchInput: "",
      data: [],
      modalShow: false,
    };
  },

  methods: {
    search() {
      let check = ytpl.validateID(this.searchInput);
      console.log(this.searchInput);
      console.log(check);
      if (check) {
        ytpl.getPlaylistID(this.searchInput).then((id) => {
          ytpl(id, { limit: Infinity }).then((data) => {
            console.log(data);
          });
        });
      } else {
        console.log("object");
        this.link = this.searchInput;
        this.showModal = true;
      }
    },
  },

  // created() {
  //   this.search();
  // },
};
</script>

<style scoped>
.result {
  font-weight: 700;
  font-size: normal;
  text-transform: capitalize;
  color: #00276f;
}
.edit {
  color: #051127;
  text-decoration-line: underline;
}
.list {
  border-radius: 5px;
  background: #5976ac;
  padding: 10px;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #00276f;
  cursor: pointer;
}
.img-fluid {
  height: 20px;
  width: 20px;
}
.input {
  width: 60% !important;
  background: #ffffff7a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0px 9px;
  margin-right: 3rem;
  font-weight: 550;
}
.form-control {
  width: 60% !important;
  background: #ffffff7a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0px 9px;
  margin-right: 3rem;
  font-weight: 550;
}
@media (max-width: 1000px) {
  .form-control {
    width: 80% !important;
    background: #ffffff7a;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 0px 9px;
    /* margin-right: 3rem; */
  }

  .mt-3 {
    margin-top: 0rem !important;
  }
}
.btn-outline-success {
  color: #fff !important;
}
.soft {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff !important;
  border-color: #1a6b2d;
  /* background: #488b89; */
  width: 9rem;
  height: 2.4rem;
  border-radius: 0.2rem;
  font-weight: 600;
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

.spinner {
  margin: 10px auto 0;
  width: 70px;
  text-align: center;
}
a {
  color: #00276f !important;
  cursor: pointer;
}
.tex-primary {
  color: #00276f !important;
  font-weight: 600;
  font-size: 2.5rem;
}
.load {
  background-color: #00276f !important;
  height: 3rem !important;
  width: 3rem !important;
}
</style>
