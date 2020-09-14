<template>
  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital@1&display=swap');
*{
  padding: 0;
  margin: 0;
}
div#modal-prevent-closing{
  padding: 0 !important;
}
  .lead, .font {
    font-family: HKGroteskPro, serif;
  }
.modal-header {
  border-bottom: none !important;
  padding: 0rem 1rem !important;
}
.modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 0rem 1rem 1rem 1rem !important;
}
form.form{
font-family: 'Work Sans', sans-serif !important;
}
</style>
