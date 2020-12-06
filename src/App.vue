<template>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:ital@1&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
* {
  transition: 0.3s !important;
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
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
</style>
