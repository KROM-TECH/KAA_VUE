import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGPuiAwA6-BkL-r7qGsWNEpxucW-3TXjM",
  authDomain: "kromtech-archive.firebaseapp.com",
  databaseURL: "https://kromtech-archive.firebaseio.com",
  projectId: "kromtech-archive",
  storageBucket: "kromtech-archive.appspot.com",
  messagingSenderId: "147947718015",
  appId: "1:147947718015:web:c1afcf6e27d8a3a8e2c64a",
  measurementId: "G-7C2TXMJXZR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App)
    }).$mount('body');
  }
});
