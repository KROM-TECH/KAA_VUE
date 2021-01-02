<template>
  <div>
    <Menu />
    <ShareButton :showModal="showModal" @close="showModal = false" />
    <section class="pt-4 pt-md-11">
      <b-container fluid>
        <b-row align-v="center">
          <b-col md="6" order-md="2">
            <img
              src="@/assets/kaa.svg"
              class="img-fluid mb-6 mb-md-0"
              alt="..."
            />
          </b-col>

          <b-col
            md="6"
            order-md="1"
            class="text-center font align-items-center"
          >
            <h1 class="display-7">
              Welcome <br />
              to <br />
              <span class="text-primary">Kromtech Academic Archive</span>
            </h1>

            <!-- Text -->
            <p class="text-muted mb-0 px-12">
              Our Goal is to reduce the stress it takes to find academic
              resources in Nigeria tertiary institution today.
              <br />
              We solve this by creating a database of every academic material in
              Nigeria Universities, these are categorized according to
              Universities. <br />
              Although we are currently trying our best to fill up the archive,
              We believe that with your help we can achieve this faster. <br />
              below are two buttons to Upload and Share.
              <br />
              Read our <a href="./guide.html">Guide</a> if this is your first
              time uploading
            </p>
            <b-container class="my-3">
              <b-row class="justify-content-center mt-2">
                <b-button class="soft btn" @click="showModal = true"
                  >Share</b-button
                >
                <b-button class="primary   btn" to="/upload">Upload</b-button>
                <b-button class="secondary btn" to="/request">Request</b-button>
              </b-row>

              <div class="text-muted mt-3">
                Follow Us on
                <br />
                <a href="https://twitter.com/KROMTECH1"
                  ><i class="fa fa-twitter mx-1"></i
                ></a>
                <a href="#"><i class="fa fa-instagram mx-1"></i></a>
                <a href="https://github.com/krom-tech"
                  ><i class="fa fa-github mx-1"></i
                ></a>
                <br />
                You can also support us on
                <a href="https://dashboard.flutterwave.com/donate/9dbk6ywhxjl1"
                  >Rave</a
                >
              </div>
            </b-container>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import ShareButton from "@/components/modals/ShareButton.vue";
export default {
  components: { Menu, ShareButton },
  data() {
    return {
      showModal: false
    };
  }
};
</script>

<style scoped>
.fa {
  color: #00276f !important;
  font-size: 1.5rem;
}
.px-12 {
  padding: 0px 2rem;
}

.display-7 {
  font-size: 2.35rem;
  font-weight: 550;
}
.text-primary {
  color: #00276f !important;
}
.text-muted {
  color: #08204d !important;
  font-weight: 540;
  font-size: 1.1rem;
  padding: 1rem;
  word-spacing: 3px;
  line-height: 1.9rem;
}

.btn {
  height: 45px;
  width: 8rem;
  margin: 10px 9px;
  font-size: 21px;
  font-weight: 550;
  color: #00276f !important;
  outline: none;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
@media (max-width: 1000px) {
  .btn {
    width: 7rem;
    margin: 10px 4px;
  }
}
.btn:hover {
  background-color: #ffffff36;
}
.soft {
  background: #42ba9680;
}
.primary {
  background: #7c69ef80;
}

.secondary {
  background: #335eea80;
}
</style>
