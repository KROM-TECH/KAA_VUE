<template>
  <div>
    <Menu />
    <section class="pt-4 pt-md-11">
      <b-container>
        <b-row align-h="center" class="font text-center">
          <b-col>
            <h1>
              <span class="tex-primary">Upload</span>
            </h1>
            <p class="lead text-gray-700">
              Upload books, videos and articles that would be benefical to other students
              <br />
              <span>If this is your first time uploading please read the <a>Guides</a></span>
            </p>
          </b-col>
        </b-row>

        <b-row class="justify-content-center">
          <b-dropdown text="Search By" class="soft" variant="outline-success">
            <template v-slot:button-content>
              {{ selected }}
            </template>
            <b-dropdown-item @click="dropdown('Book')">Book</b-dropdown-item>
            <b-dropdown-item @click="dropdown('Video')">Video</b-dropdown-item>
            <b-dropdown-item @click="dropdown('Article')">Article</b-dropdown-item>
          </b-dropdown>
        </b-row>

        <b-row class="justify-content-center align-items-center">
          <div class="upload justify-content-center align-items-center">
            <Upload :type="selected" :disable="selected == 'Type'" />
          </div>
        </b-row>
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
import Upload from "@/components/Upload.vue";

export default {
  components: { Menu, Upload },
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
