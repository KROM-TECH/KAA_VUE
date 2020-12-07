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

          <b-button
            class="primary my-3 mt-3"
            :disabled="selected == 'Search by' || searchInput == ''"
            @click="searchButton"
            >Search</b-button
          >
        </b-row>

        <div style="overflow-x: auto;">
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
              <b-tr :hidden="hidden">
                <b-td><b-spinner type="grow" label="Loading..."></b-spinner></b-td>
                <b-td><b-spinner type="grow" label="Loading..."></b-spinner></b-td>
                <b-td><b-spinner type="grow" label="Loading..."></b-spinner></b-td>
                <b-td><b-spinner type="grow" label="Loading..."></b-spinner></b-td>
                <b-td><b-spinner type="grow" label="Loading..."></b-spinner></b-td>
                <b-td><b-spinner type="grow" label="Loading..."></b-spinner></b-td>
                <b-td><b-spinner type="grow" label="Loading..."></b-spinner></b-td>
                <b-td><b-spinner type="grow" label="Loading..."></b-spinner></b-td>
                <b-td><b-spinner type="grow" label="Loading..."></b-spinner></b-td>
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
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/storage";
import Menu from "@/components/Menu.vue";

export default {
  components: { Menu },
  data() {
    return {
      NumBook: "",
      selected: "Search by",
      placeholder: "",
      searchInput: "",
      hidden: false,
      modalShow: false,
    };
  },

  mounted() {},
};
</script>

<style>
.table th,
.table td {
  border: none !important;
  border-color: transparent;
}
.row {
  border: none !important;
  border-color: transparent;
}
table {
  border: none;
  border-color: transparent;
}
.table {
  border: none !important;
  border-color: transparent;
}
tr {
  color: #00276f;
  border: none !important;
}
th {
  border: none !important;
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
  /* background-color: #28a745; */
  border-color: #1a6b2d;
  background: #488b89;
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
  border-color: #00276f !important;
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
