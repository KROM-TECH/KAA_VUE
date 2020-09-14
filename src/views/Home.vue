<template>
  <div>
    <section class="pt-4 pt-md-11">
      <b-container fluid>
        <b-row align-v="center">
          <b-col md="6" order-md="2">
            <img src="@/assets/kaa.svg" class="img-fluid mb-6 mb-md-0" alt="..." />
          </b-col>

          <b-col md="6" order-md="1" class="text-center font">
            <h1 class="display-4">
              Welcome <br />
              to <br />
              <span class="text-primary">Kromtech Academic Archive</span>
            </h1>

            <!-- Text -->
            <p class="lead text-muted mb-0">
              Our Goal is to reduce the stress it takes to find academic resources in Nigeria tertiary institution today.
              <br />
              We solve this by creating a database of every academic material in Nigeria Universities, these are categorized according to Universities. <br />
              Although we are currently trying our best to fill up the archive, We believe that with your help we can achieve this faster. <br />
              below are two buttons to Upload and Share.
              <br />
              Read our <a href="./guide.html">Guide</a> if this is your first time uploading
            </p>
            <b-container class="my-3">
              <b-button class="btn-success-soft mx-1 mt-2 btn" @click="showModal('share')">Tell a Friend</b-button>
              <b-button class="btn-info-soft mx-1 mt-2 btn" @click="showModal('upload')">Upload</b-button>
              <b-button class="btn-primary-soft mx-1 mt-2 btn" @click="showModal('book')">Available Books</b-button>
              <b-button class="btn-secondary-soft mx-1 mt-2 btn" @click="showModal('request')">Request a book</b-button>

              <div class="text-muted mt-3">
                Follow Us on
                <br />
                <a href="https://twitter.com/KROMTECH1"><i class="fa fa-twitter mx-1"></i></a>
                <a href="#"><i class="fa fa-instagram mx-1"></i></a>
                <a href="https://github.com/krom-tech"><i class="fa fa-github mx-1"></i></a>
                <br />
                You can also support us on
                <a href="https://dashboard.flutterwave.com/donate/9dbk6ywhxjl1">Rave</a>
              </div>
            </b-container>
          </b-col>
        </b-row>

        <!-- //Modal Section -->

        <!-- Upload Modal================================================== -->
        <b-modal id="modal-prevent-closing" ref="upload" @show="resetModal" @hidden="resetModal" @ok="handleOk">
          <template v-slot:modal-header="{ close }" class="modal-header">
            <i class="fa fa-close ml-auto" @click="close()"></i>
          </template>
          <div class="image">
            <img src="@/assets/128px.png" class="img-fluid" alt="..." />
          </div>

          <form ref="form" @submit.stop.prevent="handleSubmit" class="form">
            <b-form-group
            label="Enter your Name / Nickname" 
            label-for="name">
             <b-form-input id="name" v-model="Name" placeholder="Enter your Name / Nickname"></b-form-input>
            </b-form-group>

            <b-form-group
            label="Enter your University" 
            label-for="university">
             <b-form-input id="university" v-model="University" placeholder="Enter your University"></b-form-input>
            </b-form-group>

            <b-form-group
            label="Enter the Book Name" 
            label-for="bookName">
            <b-form-input id="bookName" v-model="bookName" placeholder="Enter the Book Name"></b-form-input>
            </b-form-group>

            <b-form-group
            label="Enter the Book Author" 
            label-for="bookAuthor">
             <b-form-input id="bookAuthor" v-model="bookAuthor" placeholder="Enter the Book Author"></b-form-input>
            </b-form-group>

            <b-form-group
            label="Faculty" 
            label-for="Faculty">
            <b-form-input id="Faculty" v-model="Faculty" placeholder="This Book is used in what Faculty"></b-form-input>
            </b-form-group>

            <b-form-group
            label="Department" 
            label-for="input-1">
             <b-form-input v-model="Department" placeholder="This Book is used in what Department"></b-form-input>
            </b-form-group>

            <b-form-group
            label="Enter your name" 
            label-for="input-1">
            <b-form-input v-model="Level" placeholder="This Book is used in what Level"></b-form-input>
            </b-form-group>          
            
          </form>
        </b-modal>

        <!-- Request Modal ==========================================-->
        <b-modal id="modal-prevent-closing" ref="request" @show="resetModal" @hidden="resetModal" @ok="handleOk">
          <template v-slot:modal-header="{ close }" class="modal-header">
            <i class="fa fa-close ml-auto" @click="close()"></i>
          </template>
          <div class="image">
            <img src="@/assets/128px.png" class="img-fluid" alt="..." />
          </div>

          <form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-input v-model="Email" placeholder="Enter your Email"></b-form-input>
            <b-form-input v-model="University" placeholder="Enter your University"></b-form-input>
            <b-form-input v-model="bookName" placeholder="Enter the Book Name"></b-form-input>
            <b-form-input v-model="bookAuthor" placeholder="Enter the Book Author"></b-form-input>
            <b-form-input v-model="Specifications" placeholder="Enter any other Specifications"></b-form-input>
          </form>
        </b-modal>
      </b-container>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        Email: '',
        Name: '',
        University: '',
        bookName: '',
        bookAuthor: '',
        Faculty: '',
        Department: '',
        Level: '',
        Specifications: ''
      };
    },
    methods: {
      showModal(x) {
        console.log(x);
        this.$refs[`${x}`].show();
      },
      hideModal(x) {
        this.$refs[`${x}`].hide();
      },
      toggleModal(x) {
        this.$refs[`${x}`].toggle('#toggle-btn');
      }
    }
  };
</script>

<style scoped>

  .image {
    display: flex;
    justify-content: center;
  }
  .fa {
    font-size: 28px;
    cursor: pointer;
  }
  .btn {
    outline: none;
    border: none;
    font-weight: 700;
  }

  .display-4 {
    line-height: 1.2;
    letter-spacing: -0.02em;
    font-size: 2.2rem;
    font-weight: 400;
  }
  .text-primary {
    color: #335eea !important;
  }
  .text-muted {
    color: #869ab8 !important;
  }
  .lead {
    font-size: 1.3125rem;
    font-weight: 400;
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
