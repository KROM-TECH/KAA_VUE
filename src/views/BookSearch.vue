<template>
  <div>
    <Error v-if="Error" />
    <Menu />
    <section class="pt-4 pt-md-11">
      <b-container>
        <b-row align-h="center" class="font text-center">
          <b-col>
            <h1>
              <span class="tex-primary">Book Search</span>
            </h1>
            <p class="lead text-gray-700">
              Use this Option if you have a particular book you are looking for.

              {{ searchResult }}
              <br />
              <a>Learn More</a>
            </p>
          </b-col>
        </b-row>

        <b-row class="justify-content-center ">
          <b-form-input
            class="input my-3"
            :placeholder="placeholder"
            v-model="searchInput"
            type="search"
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
          <NotFound v-if="empty && !data.length" />
          <div class="d-flex justify-content-center" v-if="!data.length && !empty">
            <b-spinner type="grow load" label="Loading..."></b-spinner>
          </div>

          <h6 class="list">
            Fundamentals of Electric Circuits
          </h6>
          <h6 class="list">
            Numerical Techniques in Electromagnetics with MATLAB, Third Edition
          </h6>
        </div>
      </b-container>
    </section>
  </div>
</template>

<script>
import Error from "@/components/Error.vue";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import Menu from "@/components/Menu.vue";
import NotFound from "@/components/404.vue";

import faculties from "@/helpers/faculties.js";
import universities from "@/helpers/universities.js";
import level from "@/helpers/level.js";

export default {
  components: { Menu, Error, NotFound },
  data() {
    return {
      universities,
      faculties,
      level,

      empty: false,
      Error: false,
      searchResult: "",
      placeholder: "",
      searchInput: "",
      data: [],
      options: [
        { value: "", text: "Search by", disabled: true },
        { value: "Uploader", text: "Uploader" },
        { value: "University", text: "University" },
        { value: "Book Name", text: "Book Name" },
        { value: "Book Author", text: "Book Author" },
        { value: "Faculty", text: "Faculty" },
        { value: "Department", text: "Department" },
        { value: "Level", text: "Level" },
      ],
      modalShow: false,
      loading: true,
      headers: [
        { text: "Dw", value: "url", width: 4 },
        { text: "Book Name", value: "BN", width: 12 },
        { text: "Book Author", value: "BA", width: 12 },
        { text: "University", value: "Uni", width: 12 },
        { text: "Faculty", value: "Fac", width: 12 },
        { text: "Department", value: "Dep", width: 12 },
        { text: "Level", value: "Lev", width: 12 },
        { text: "Uploader", value: "Upl", width: 12 },
      ],
    };
  },
  computed: {
    availableView() {
      return this.NumBook > 15 ? "15" : this.NumBook;
    },
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
              Upl: document.uploader,
            };
            console.log(content);
            this.data.push(content);
          }, (this.loading = false))
          .catch((error) => {
            console.log(error);
            this.Error = true;
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
        })
        .catch((error) => {
          console.log(error);
          this.Error = true;
        });
    },
    searchButton() {
      this.data = [];
      this.empty = false;

      const booksRef = firebase.firestore().collection("books");
      const searchValue = this.searchInput;

      if (this.selected == "Uploader") {
        booksRef
          .orderBy("uploader")
          .startAt(searchValue)
          .endAt(searchValue + "\uf8ff")
          .onSnapshot((querySnapshot) => {
            if (!querySnapshot.empty) {
              this.loadTableData(querySnapshot);
            } else {
              this.empty = true;
            }
          });
      } else if (this.selected == "University") {
        booksRef
          .orderBy("university")
          .startAt(searchValue)
          .endAt(searchValue + "\uf8ff")
          .onSnapshot((querySnapshot) => {
            if (!querySnapshot.empty) {
              this.loadTableData(querySnapshot);
            } else {
              this.empty = true;
            }
          });
      } else if (this.selected == "Book Name") {
        booksRef
          .orderBy("bookName")
          .startAt(searchValue)
          .endAt(searchValue + "\uf8ff")
          .onSnapshot((querySnapshot) => {
            if (!querySnapshot.empty) {
              this.loadTableData(querySnapshot);
            } else {
              this.empty = true;
            }
          });
      } else if (this.selected == "Book Author") {
        booksRef
          .orderBy("bookAuthor")
          .startAt(searchValue)
          .endAt(searchValue + "\uf8ff")
          .onSnapshot((querySnapshot) => {
            if (!querySnapshot.empty) {
              this.loadTableData(querySnapshot);
            } else {
              this.empty = true;
            }
          });
      } else if (this.selected == "Faculty") {
        booksRef
          .orderBy("faculty")
          .startAt(searchValue)
          .endAt(searchValue + "\uf8ff")
          .onSnapshot((querySnapshot) => {
            if (!querySnapshot.empty) {
              this.loadTableData(querySnapshot);
            } else {
              this.empty = true;
            }
          });
      } else if (this.selected == "Department") {
        booksRef
          .orderBy("department")
          .startAt(searchValue)
          .endAt(searchValue + "\uf8ff")
          .onSnapshot((querySnapshot) => {
            if (!querySnapshot.empty) {
              this.loadTableData(querySnapshot);
            } else {
              this.empty = true;
            }
          });
      } else if (this.selected == "Level") {
        booksRef
          .orderBy("level")
          .startAt(searchValue)
          .endAt(searchValue + "\uf8ff")
          .onSnapshot((querySnapshot) => {
            if (!querySnapshot.empty) {
              this.loadTableData(querySnapshot);
            } else {
              this.empty = true;
            }
          });
      }

      this.loading = false;
    },
  },

  created() {
    // this.initTable();
  },
};
</script>

<style scoped>
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
