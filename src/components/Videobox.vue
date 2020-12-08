<template>
  <div class="d-flex column">
    <div class="box d-flex justify-content-center align-items-center">
      <img src="@/assets/video.svg" alt="" />
    </div>
    <b-button v-b-toggle="data" class="mb-2 primary ">Details</b-button>

    <b-collapse :id="data">
      <div class=" card p-3 d-flex justify-content-center align-items-center">
        <div>
          <span>Title</span>
          <p class="text">A video on fluid mechanics and the surrounding magic blah blah blah</p>
        </div>
        <div>
          <span>University</span>
          <p class="text">University of Lagos</p>
        </div>
        <div>
          <span>Faculty</span>
          <p class="text">Engineering</p>
        </div>
        <div>
          <span>Department</span>
          <p class="text">Computer Engineering</p>
        </div>
        <div>
          <span>Level</span>
          <p class="text">Year 2</p>
        </div>
        <div>
          <span>Semester</span>
          <p class="text">First</p>
        </div>
        <div>
          <span>Uploader</span>
          <p class="text">Young John Tommy</p>
        </div>

        <b-button class="green mt-2">Play</b-button>
      </div>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: "VideoBox",
  props: ["data"],
};
</script>

<style scoped>
.card {
  max-width: 300px;
}
.text {
  color: #08204d !important;
  font-weight: 540;
  font-size: 1rem;
  word-spacing: 3px;
  line-height: 1.3rem;
}
div {
  text-align: center;
  margin: 3px 0px;
}
span {
  display: block;
  font-weight: 550;
  color: #00276f;
}
.box {
  width: 200px;
  height: 150px;
  background: #000;
  border-radius: 8px;
  margin: 1rem;
}
.column {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.primary,
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
.primary:hover,
.btn-secondary:hover {
  background: #00276f94 !important;
  border-color: #00276f94 !important;
}
.green {
  background-color: #006f4a !important;
}
</style>
