<template>
  <div>
    <Menu />
    <section class="pt-4 pt-md-11">
      <b-container>
        <b-row align-h="center" class="font text-center">
          <b-col>
            <h1>
              <span class="tex-primary">Videos</span>
            </h1>
            <p class="lead text-gray-700">
              We currently have {{ NumBook }} in the Archive but you can view only
              {{ availableView }}.
              <br />
              <a>Learn More</a>
            </p>
          </b-col>
        </b-row>

        <b-row class="justify-content-center">
          <b-form-select
            class="dropdown mb-3"
            v-model="selected"
            :options="options"
            required
          ></b-form-select>
        </b-row>

        <b-row class="justify-content-center ">
          <b-form-input
            class="input my-3"
            :placeholder="placeholder"
            v-model="searchInput"
            :disabled="selected == ''"
          ></b-form-input>

          <button
            class="primary my-3 mt-3"
            :disabled="selected == '' || searchInput == ''"
            @click="searchButton"
          >
            Search
          </button>
        </b-row>

        <div style="overflow-x: auto;">
          <div class="d-flex justify-content-center" v-if="false">
            <b-spinner type="grow load" label="Loading..."></b-spinner>
          </div>

          <div class="d-flex flex-wrap justify-content-center" v-else>
            <VideoBox v-for="n in 10" :key="n" :data="n.toString()" />
          </div>
        </div>
      </b-container>
    </section>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import Menu from "@/components/Menu.vue";
import VideoBox from "@/components/Videobox.vue";

export default {
  components: { Menu, VideoBox },
  data() {
    return {
      NumBook: "",
      selected: "",
      placeholder: "",
      searchInput: "",
      data: [],
      options: [
        { value: "", text: "Search by", disabled: true },
        { value: "Uploader", text: "Uploader" },
        { value: "University", text: "University" },
        { value: "Faculty", text: "Faculty" },
        { value: "Department", text: "Department" },
      ],
      loading: true,
    };
  },
  computed: {
    availableView() {
      return this.NumBook > 15 ? "15" : this.NumBook;
    },
  },

  methods: {
    dropdown(x) {
      this.selected = x;
    },
    loadTableData(querySnapshot) {
      const storageReference = firebase.storage().ref();
      querySnapshot.forEach((doc) => {
        const document = doc.data();
        storageReference
          .child("books/" + `${document.book}`)
          .getDownloadURL()
          .then((url) => {
            console.log(document);
            const content = {
              url: url,
              BN: document.bookName,
              BA: document.bookAuthor,
              Uni: document.university,
              Fac: document.faculty,
              Dep: document.department,
              Lev: document.level,
              Sem: document.semester,
              Upl: document.uploader,
            };
            console.log(content);
            this.data.push(content);
          }, (this.loading = false))
          .catch((error) => {
            console.log(error);
          });
      });
    },
    initTable() {
      firebase
        .firestore()
        .collection("books")
        .get()
        .then((querySnapshot) => {
          this.NumBook = querySnapshot.size;
          this.loadTableData(querySnapshot);
        });
    },
    searchButton() {
      this.loading = true;
      this.data = [];

      const booksRef = firebase.firestore().collection("books");
      const searchValue = this.searchInput;

      if (this.selected == "Uploader") {
        booksRef
          .orderBy("uploader")
          .startAt(searchValue.toLowerCase())
          .endAt(searchValue.toLowerCase() + "\uf8ff")
          .onSnapshot((querySnapshot) => {
            this.loadTableData(querySnapshot);
          });
      } else if (this.selected == "University") {
        booksRef
          .orderBy("university")
          .startAt(searchValue.toLowerCase())
          .endAt(searchValue.toLowerCase() + "\uf8ff")
          .onSnapshot((querySnapshot) => {
            this.loadTableData(querySnapshot);
          });
      } else if (this.selected == "Book Name") {
        booksRef
          .orderBy("bookName")
          .startAt(searchValue.toLowerCase())
          .endAt(searchValue.toLowerCase() + "\uf8ff")
          .onSnapshot((querySnapshot) => {
            this.loadTableData(querySnapshot);
          });
      } else if (this.selected == "Book Author") {
        booksRef
          .orderBy("bookAuthor")
          .startAt(searchValue.toLowerCase())
          .endAt(searchValue.toLowerCase() + "\uf8ff")
          .onSnapshot((querySnapshot) => {
            this.loadTableData(querySnapshot);
          });
      } else if (this.selected == "Faculty") {
        booksRef
          .orderBy("faculty")
          .startAt(searchValue.toLowerCase())
          .endAt(searchValue.toLowerCase() + "\uf8ff")
          .onSnapshot((querySnapshot) => {
            this.loadTableData(querySnapshot);
          });
      } else if (this.selected == "Department") {
        booksRef
          .orderBy("department")
          .startAt(searchValue.toLowerCase())
          .endAt(searchValue.toLowerCase() + "\uf8ff")
          .onSnapshot((querySnapshot) => {
            this.loadTableData(querySnapshot);
          });
      }

      this.loading = false;
    },
  },

  mounted() {},
};
</script>

<style scoped>
.img-fluid {
  height: 20px;
  width: 20px;
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
  border: none;
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
