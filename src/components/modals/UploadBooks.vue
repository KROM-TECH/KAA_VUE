<template>
  <transition name="slide" appear>
    <div class="modal" v-if="show">
      <div class="modal_box">
        <form style="padding: 5%; text-align:start; " class="form">
          <b-row class="justify-content-center">
            <div class="col-12 col-md-6">
              <label for="nickname">NickName</label>
              <b-form-input
                id="nickname"
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
                class="input mb-3"
                placeholder="Enter the Book Name"
                v-model="BookName"
                required
              ></b-form-input>
            </div>
            <div class="col-12 col-md-6">
              <label for="Book Author">Book Author</label>
              <b-form-input
                id="Book Author"
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
                class="input mb-3"
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
                class="input mb-3"
                v-model="Department"
                placeholder="Enter the Department"
                required
              ></b-form-input>
            </div>
            <div class="col-12 col-md-6">
              <label for="Level">Level</label>
              <b-form-select
                id="Level"
                class="input mb-3"
                v-model="Level"
                placeholder="Enter the Level"
                :options="level"
                required
              ></b-form-select>
            </div>
          </b-row>

          <b-row class="justify-content-center ">
            <b-button class="green mt-2 mx-3">Upload</b-button>
            <b-button class="red mt-2 mx-3" @click="$emit('close')">close</b-button>
          </b-row>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import faculties from "@/helpers/faculties.js";
import universities from "@/helpers/universities.js";
import level from "@/helpers/level.js";
export default {
  name: "Upload_Books",
  props: ["show"],
  data() {
    return {
      universities,
      faculties,
      level,

      BookName: "",
      BookAuthor: "",
      email: "",
      University: "",
      Faculty: "",
      Department: "",
      Level: "",
      Semester: "",
      Uploader: "",
    };
  },
  methods: {},
};
</script>

<style scoped>
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
  background-color: #fff;
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
}</style
>>
