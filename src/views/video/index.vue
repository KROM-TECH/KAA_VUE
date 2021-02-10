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
              Select your Option below <br />Read the guide
              <router-link to="/guide"> here </router-link> if you are uncertain on what to select
            </p>
          </b-col>
        </b-row>

        <b-row class="justify-content-center align-items-center">
          <router-link to="/videoindex">
            <b-card class="card"><h4>Indexed Search</h4></b-card>
          </router-link>
          <router-link to="/videosearch">
            <b-card class="card"><h4>Worldwide Search</h4></b-card>
          </router-link>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
  components: { Menu },
  data() {
    return {
      NumBook: "",
      selected: "Type",
      placeholder: "",
      searchInput: "",
      data: [],
      loading: true,
    };
  },

  methods: {
    dropdown(x) {
      this.selected = x;
    },
  },

  mounted() {},
};
</script>

<style scoped>
.header {
  font-size: 1.3rem;
  font-weight: 800;
}
h1 {
  font-weight: 550 !important;
}
.card {
  text-align: center;
  max-width: 90vw;
  margin-bottom: 1rem;
  width: 600px;
}
.lead {
  color: rgba(0, 0, 0, 0.726) !important;
  font-weight: 540;
  font-size: 1.1rem;
  padding: 1rem;
  word-spacing: 2px;
  line-height: 1.5rem;
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
