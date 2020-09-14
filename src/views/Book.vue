<template>
  <div>
    <section class="pt-4 pt-md-11">
      <b-container>
        <b-row align-h="center" class="font text-center">
          <b-col>
            <h1>
              <span class="text-primary">Kromtech Academic Archive</span>
            </h1>
            <p class="lead text-gray-700">We currently have {{ NumBook }} in the Archive but you can view only 15. <a href="http://jombo.com">Learn More</a></p>
          </b-col>
        </b-row>

        <b-row align-h="center" class="my-3 px-2">
          <b-input-group>
            <b-form-input :placeholder="placeholder" v-model="searchInput" :disabled="selected == 'Search by'"></b-form-input>

            <template v-slot:append>
              <b-dropdown text="Search By" class="btn-primary-soft" variant="outline-success">
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
              <b-button class="btn-primary-soft" variant="outline-primary" :disabled="selected == 'Search by' || searchInput == ''" @click="searchButton">Search</b-button>
            </template>
          </b-input-group>
        </b-row>

        <div style="overflow-x: auto;">
          <!-- <b-table striped hover :items="items" :fields="fields" ></b-table> -->
          <b-table-simple class="table table-striped">
            <b-thead class="thead-inverse">
              <b-tr>
                <b-th colspan="1">Dw</b-th>
                <b-th colspan="1">Book Name</b-th>
                <b-th colspan="1">Book Author</b-th>
                <b-th colspan="1">University</b-th>
                <b-th colspan="1">Faculty</b-th>
                <b-th colspan="1">Department</b-th>
                <b-th colspan="1">Level</b-th>
                <b-th colspan="1">Semester</b-th>
                <b-th colspan="1">Uploader</b-th>
              </b-tr>
            </b-thead>
            <b-tbody class="tbodyData"> </b-tbody>
          </b-table-simple>
        </div>
      </b-container>
    </section>
  </div>
</template>

<script>
  import firebase from 'firebase/app';
  import 'firebase/auth';
  import 'firebase/firestore';
  import 'firebase/storage';

  export default {
    data() {
      return {
        NumBook: '',
        selected: 'Search by',
        placeholder: '',
        searchInput: ''
      };
    },

    methods: {
      dropdown(x) {
        this.selected = x;
      },
      loadTableData(querySnapshot) {
        const table = document.querySelector('.tbodyData');
        const storageReference = firebase.storage().ref();
        querySnapshot.forEach((doc) => {
          const document = doc.data();
          storageReference
            .child('books/' + `${document.book}`)
            .getDownloadURL()
            .then((url) => {
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
          .collection('books')
          .get()
          .then((querySnapshot) => {
            this.NumBook = querySnapshot.size;
            this.loadTableData(querySnapshot);
          });
      },
      searchButton() {
        document.querySelector('.tbodyData').innerHTML = '';
        const booksRef = firebase.firestore().collection('books');
        const searchValue = this.searchInput;

        if (this.selected == 'Uploader') {
          booksRef
            .orderBy('uploader')
            .startAt(searchValue.toLowerCase())
            .endAt(searchValue.toLowerCase() + '\uf8ff')
            .onSnapshot((querySnapshot) => {
              this.loadTableData(querySnapshot);
            });
        } else if (this.selected == 'University') {
          booksRef
            .orderBy('university')
            .startAt(searchValue.toLowerCase())
            .endAt(searchValue.toLowerCase() + '\uf8ff')
            .onSnapshot((querySnapshot) => {
              this.loadTableData(querySnapshot);
            });
        } else if (this.selected == 'Book Name') {
          booksRef
            .orderBy('bookName')
            .startAt(searchValue.toLowerCase())
            .endAt(searchValue.toLowerCase() + '\uf8ff')
            .onSnapshot((querySnapshot) => {
              this.loadTableData(querySnapshot);
            });
        } else if (this.selected == 'Book Author') {
          booksRef
            .orderBy('bookAuthor')
            .startAt(searchValue.toLowerCase())
            .endAt(searchValue.toLowerCase() + '\uf8ff')
            .onSnapshot((querySnapshot) => {
              this.loadTableData(querySnapshot);
            });
        } else if (this.selected == 'Faculty') {
          booksRef
            .orderBy('faculty')
            .startAt(searchValue.toLowerCase())
            .endAt(searchValue.toLowerCase() + '\uf8ff')
            .onSnapshot((querySnapshot) => {
              this.loadTableData(querySnapshot);
            });
        } else if (this.selected == 'Department') {
          booksRef
            .orderBy('department')
            .startAt(searchValue.toLowerCase())
            .endAt(searchValue.toLowerCase() + '\uf8ff')
            .onSnapshot((querySnapshot) => {
              this.loadTableData(querySnapshot);
            });
        }
      }
    },

    mounted() {
      this.initTable();
    }
  };
</script>

<style scoped></style>
