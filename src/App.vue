<template>
  <router-view />
</template>

<style>
.table th, .table td {
    padding: 0.5rem !important;
    vertical-align: middle !important;
    border-top: 1px solid #dee2e6;
    font-family: 'Work Sans', sans-serif !important;
}
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
  .btn-success-soft {
    background-color: rgba(66, 186, 150, 0.1);
    color: #42ba96;
  }
  .btn-success-soft:hover {
    background-color: rgba(66, 186, 150, 0.3);
    color: #42ba96;
  }
  .btn-success-soft:focus {
    background-color: rgba(66, 186, 150, 0.3);
    color: #42ba96;
    border-color: transparent;
    box-shadow: none;
  }
  .btn-info-soft {
    background-color: rgba(124, 105, 239, 0.1);
    color: #7c69ef;
  }
  .btn-info-soft:hover {
    background-color: rgba(124, 105, 239, 0.3);
    color: #7c69ef;
  }
  .btn-info-soft:focus {
    background-color: rgba(124, 105, 239, 0.3);
    color: #7c69ef;
    border-color: transparent;
    box-shadow: none;
  }
  .btn-primary-soft {
    background-color: rgba(51, 94, 234, 0.1);
    color: #335eea;
  }
  .btn-primary-soft:hover {
    background-color: rgba(51, 94, 234, 0.3);
    color: #335eea;
  }
  .btn-primary-soft:focus {
    background-color: rgba(51, 94, 234, 0.3);
    color: #335eea;
    border-color: transparent;
    box-shadow: none;
  }
  .btn-secondary-soft {
    background-color: #d34f4233;
    color: #d34f42;
  }
  .btn-secondary-soft:hover {
    background-color: #d34f4270;
    color: #d34f42;
  }
  .btn-secondary-soft:focus {
    background-color: #d34f4270;
    color: #d34f42;
    border-color: transparent;
    box-shadow: none;
  }
</style>
