<template>
  <transition name="slide" appear>
    <div class="modal" v-if="show">
      <div class="modal_box">
        <form style="padding: 5%; text-align:start; " class="form" @submit.prevent="submit">
          <b-row class="close" @click="$emit('close')">x</b-row>
          <b-row class="justify-content-center">
            <div class="col-12 col-md-6">
              <label for="nickname">NickName</label>
              <b-form-input
                id="nickname"
                name="nickname"
                type="text"
                class="input mb-3"
                placeholder="Enter Your Nickname"
                v-model="Uploader"
                required
              ></b-form-input>
            </div>
            <div class="col-12 col-md-6">
              <label for="email">Email</label>
              <b-form-input
                id="email"
                name="email"
                type="email"
                class="input mb-1"
                v-model="email"
                placeholder="Enter Your Email"
              ></b-form-input>
              <span class="hint">This wont be made public</span>
            </div>
          </b-row>

          <b-row class="justify-content-center">
            <div class="col-12 col-md-6">
              <label for="Book Name">Book Name</label>
              <b-form-input
                id="Book Name"
                name="Book Name"
                class="input mb-3"
                type="text"
                placeholder="Enter the Book Name"
                v-model="BookName"
                required
              ></b-form-input>
            </div>
            <div class="col-12 col-md-6">
              <label for="Book Author">Book Author</label>
              <b-form-input
                id="Book Author"
                name="Book Author"
                type="text"
                class="input mb-3"
                v-model="BookAuthor"
                placeholder="Enter the Book Author"
                required
              ></b-form-input>
            </div>
          </b-row>

          <b-row class="justify-content-center">
            <div class="col-12 col-md-6">
              <label for="University">University</label>
              <b-form-select
                id="University"
                name="University"
                type="text"
                class="select mb-3"
                placeholder="Enter the University"
                v-model="University"
                required
                :options="universities"
              ></b-form-select>
            </div>
            <div class="col-12 col-md-6">
              <label for="Faculty">Faculty</label>
              <b-form-select
                id="Faculty"
                name="Faculty"
                class="input mb-3"
                type="text"
                v-model="Faculty"
                placeholder="Enter the Faculty"
                :options="faculties"
                required
              ></b-form-select>
            </div>
          </b-row>

          <b-row class="justify-content-center">
            <div class="col-12 col-md-6">
              <label for="Department">Department</label>
              <b-form-input
                id="Department"
                name="Department"
                class="input mb-3"
                type="text"
                v-model="Department"
                placeholder="Enter the Department"
                required
              ></b-form-input>
            </div>
            <div class="col-12 col-md-6">
              <label for="Level">Level</label>
              <b-form-select
                id="Level"
                name="Level"
                class="input mb-3"
                v-model="Level"
                type="text"
                placeholder="Enter the Level"
                :options="level"
                required
              ></b-form-select>
            </div>
          </b-row>
          <b-row>
            <div class="col-12">
              <div class="custom-upload row align-items-center">
                <label class="dropdown cust" for="book" data-element="custom-upload-button"
                  >{{ title }}
                </label>
                <div class="status">{{ perc }}</div>
                <input
                  class="custom"
                  id="book"
                  name="book"
                  type="file"
                  data-behaviour="custom-upload-input"
                  @change="update"
                  required
                />
              </div>
            </div>
          </b-row>

          <b-row class="justify-content-center ">
            <b-button type="submit" class="green mt-2 mx-3">Upload</b-button>
            <b-button type="button" class="red mt-2 mx-3" @click="$emit('close')">close</b-button>
          </b-row>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import firebase from "firebase/app";
import { v4 as uuidv4 } from "uuid";
import "firebase/firestore";
import "firebase/storage";
import faculties from "@/helpers/faculties.js";
import universities from "@/helpers/universities.js";
import level from "@/helpers/level.js";

const BookRef = firebase.firestore().collection("books");

export default {
  name: "Upload_Books",
  props: ["show"],
  data() {
    return {
      universities,
      faculties,
      level,

      perc: "",
      title: "Upload",
      BookName: "",
      BookAuthor: "",
      email: "",
      University: "",
      Faculty: "",
      Department: "",
      Level: "",
      Uploader: "",
    };
  },
  methods: {
    update(evt) {
      const input = evt.currentTarget.value.split("\\").pop();
      console.log(input);
      this.title = input;
    },
    submit() {
      let data = {
        uploader: this.Uploader,
        university: this.University,
        bookName: this.BookName,
        bookAuthor: this.BookAuthor,
        faculty: this.Faculty,
        department: this.Department,
        level: this.Level,
        book: this.title,
      };

      let uid = uuidv4();
      BookRef.doc(uid)
        .set(data)
        .then(() => {
          firebase
            .firestore()
            .collection("uploaders")
            .doc(this.email)
            .set({ email: this.email });
        })
        .then(() => {
          console.log("UPLOAD-FILE called!");
          var storageReference = firebase.storage().ref();
          var file = document.getElementById("book").files[0];

          let uploadTask = storageReference.child("books/" + file.name).put(file);

          uploadTask.on("state_changed", (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.title = Math.floor(progress) + "% uploaded";
          });
          this.$emit("close");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.status {
  font-size: 1rem;
}
.cust {
  text-align: center !important;
  border: 1px solid #00276f;
  min-width: 170px !important;
}
.custom {
  display: none;
}
.close {
  position: relative;
  margin: 0;
  padding: 0;
  top: -5px;
  margin-right: -100%;
  color: #00276f;
  cursor: pointer;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
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
.red {
  background-color: #f52617 !important;
  color: white !important;
  width: 9rem;
}
.green {
  background-color: #006f4a !important;
  color: white !important;
  width: 9rem;
}
.hint {
  color: #545258;
  font-size: 12px;
  margin-top: -120px;
}
button:disabled {
  cursor: not-allowed;
  background-color: grey;
}

::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #748194;
}
input {
  width: 232px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  outline: none;
  border: none;
  background: #eef0f2;
  color: #00276f;
  font-size: 14px;
  font-weight: bold;
}
select {
  width: 232px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  outline: none;
  border: none;
  background: #eef0f2;
  color: #00276f;
  font-size: 14px;
  font-weight: bold;
}

label {
  display: block;
  font-size: 18px;
  padding: 5px 0px;
}
button {
  color: #1b4974 !important;
}
.modal_box {
  background-color: #a1a7b3;
  /* display: flex; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 84vw;
  max-width: 520px;
  /* max-height: 90vh; */
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow-y: auto;
  margin: 4rem 0rem;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  z-index: 99;
  width: 100%;
  height: 100%;
  max-width: 100%;
  background-color: rgb(0, 0, 0, 0.25);
  border: 1px solid #6c63ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: scale(0);
}
</style>
