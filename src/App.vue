<template>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");
* {
  transition: 0.3s !important;
  padding: 0;
  margin: 0;
  /* font-family: "Roboto", sans-serif; */
  font-family: "Noto Sans", sans-serif;
}
html {
  background: #4d5c7c;
}
section {
  margin-left: 4.5rem;
}
@media (max-width: 1000px) {
  section {
    margin-left: 0px !important;
    margin-bottom: 49px;
  }
}

.dropdown {
  width: 100px !important;
  color: #00276f !important;
  background-color: transparent !important;
  font-size: 1rem !important;
  line-height: 1.5 !important;
  border-radius: 0.25rem !important;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) !important;
  width: 10rem !important;
  height: 2.4rem !important;
  border-radius: 0.2rem !important;
  font-weight: 600 !important;
  border-color: #00276f !important;
}
button {
  outline: none !important;
  border: none !important;
}
</style>
