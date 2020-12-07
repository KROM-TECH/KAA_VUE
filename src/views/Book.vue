<template>
  <div>
    <Menu />
    <section class="pt-4 pt-md-11">
      <b-container>
        <b-row align-h="center" class="font text-center">
          <b-col>
            <h1>
              <span class="tex-primary">Books</span>
            </h1>
            <p class="lead text-gray-700">
              We currently have {{ NumBook }} in the Archive but you can view only 15.
              <br />
              <a>Learn More</a>
            </p>
          </b-col>
        </b-row>

        <b-row class="justify-content-center">
          <b-dropdown text="Search By" class="soft" variant="outline-success">
            <template v-slot:button-content>
              {{ selected }}
            </template>
            <b-dropdown-item @click="dropdown('Uploader')">Uploader</b-dropdown-item>
            <b-dropdown-item @click="dropdown('University')">University</b-dropdown-item>
            <b-dropdown-item @click="dropdown('Book Name')">Book Name</b-dropdown-item>
            <b-dropdown-item @click="dropdown('Book Author')">Book Author</b-dropdown-item>
            <b-dropdown-item @click="dropdown('Faculty')">Faculty</b-dropdown-item>
            <b-dropdown-item @click="dropdown('Department')">Department</b-dropdown-item>
          </b-dropdown>
        </b-row>

        <b-row class="justify-content-center ">
          <b-form-input
            class="input my-3"
            :placeholder="placeholder"
            v-model="searchInput"
            :disabled="selected == 'Search by'"
          ></b-form-input>

          <button
            class="primary my-3 mt-3"
            :disabled="selected == 'Search by' || searchInput == ''"
            @click="searchButton"
          >
            Search
          </button>
        </b-row>

        <div style="overflow-x: auto;">
          <Table
            class="tw-ml-24"
            :loading="loading"
            :headers="headers"
            :tableData="overtimeRequest"
            :newDesign="true"
          />
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
import Table from "@/components/Table.vue";

export default {
  components: { Menu, Table },
  data() {
    return {
      NumBook: "",
      selected: "Search by",
      placeholder: "",
      searchInput: "",
      hidden: false,
      modalShow: false,

      headers:[
        
      ]
    };
  },

  methods: {
    dropdown(x) {
      this.selected = x;
    },
    loadTableData(querySnapshot) {
      const table = document.querySelector(".tbodyData");
      const storageReference = firebase.storage().ref();
      querySnapshot.forEach((doc) => {
        const document = doc.data();
        storageReference
          .child("books/" + `${document.book}`)
          .getDownloadURL()
          .then((url) => {
            console.log(document);
            this.hidden = true;
            let tableRow = ``;
            tableRow += `<tr class="rolling" >`;
            tableRow += `<td class="book"><a href=${url}; download=${document.bookName} target='_blank'><i class="fa fa-arrow-down"  style="color:green"></i> </a></td>`;
            tableRow += `<td class="bookName"> ${document.bookName}</td>`;
            tableRow += `<td class="bookAuthor"> ${document.bookAuthor}</td>`;
            tableRow += `<td class="university"> ${document.university}</td>`;
            tableRow += `<td class="faculty"> ${document.faculty} </td>`;
            tableRow += `<td class="department"> ${document.department} </td>`;
            tableRow += `<td class="level"> ${document.level} </td>`;
            tableRow += `<td class="semester"> ${document.semester} </td>`;
            tableRow += `<td class="uploader"> ${document.uploader}</td>`;
            tableRow += `</tr>`;
            table.innerHTML += tableRow;
          })
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
      document.querySelector(".tbodyData").innerHTML = "";
      this.hidden = false;
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
    },
  },

  mounted() {
    this.initTable();
  },
};
</script>

<style scoped>
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
</style>
