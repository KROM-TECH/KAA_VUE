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
          ></b-form-input>

          <button class="primary my-3 mt-3" :disabled="searchInput == ''" @click="search">
            Search
          </button>
        </b-row>

        <div style="overflow-x: auto;">
          <NotFound v-if="empty && !data.length" />
          <div class="d-flex justify-content-center" v-if="!data.length && !empty">
            <b-spinner type="grow load" label="Loading..."></b-spinner>
          </div>

          <h6 class="list" v-for="(n, index) in data" :key="index">
            {{ n.name }}
          </h6>
        </div>
      </b-container>
    </section>
  </div>
</template>

<script>
import Error from "@/components/Error.vue";
import Menu from "@/components/Menu.vue";
import NotFound from "@/components/404.vue";

export default {
  components: { Menu, Error, NotFound },
  data() {
    return {
      empty: false,
      Error: false,
      placeholder: "",
      searchInput: "",
      data: [],
      modalShow: false,
      loading: true,
    };
  },
  computed: {
    searchResult() {
      return this.NumBook > 15 ? "15" : this.NumBook;
    },
  },

  methods: {
    search() {
      fetch(`https://book-web-scraper-api.herokuapp.com/search/?name=${this.searchInput}`)
        .then((response) => response.json())
        .then((data) => (this.data = data))
        .catch(console.log());
    },
  },

  created() {
    this.search();
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
