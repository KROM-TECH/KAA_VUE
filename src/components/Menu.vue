<template>
  <div @mouseenter="expand = true" @mouseleave="expand = false">
    <transition>
      <div :class="[expand ? 'awidth' : 'swidth', 'con']">
        <img src="@/assets/72px.png" alt="" class="img-fluid" />

        <div class="links">
          <router-link class="box" to="/" style="margin: 1rem;">
            <img src="@/assets/menu/home.svg" class="res-img" alt="" />
            <p v-if="expand" class="text">Home</p>
          </router-link>
          <router-link class="box" to="/book" style="margin: 1rem;">
            <img src="@/assets/menu/book.svg" class="res-img" alt="" />
            <p v-if="expand" class="text">Books</p>
          </router-link>
          <router-link class="box" to="/video" style="margin: 1rem;">
            <img src="@/assets/menu/videocam.svg" class="res-img" alt="" />
            <p v-if="expand" class="text">Videos</p>
          </router-link>
          <router-link class="box" to="/article" style="margin: 1rem;">
            <img src="@/assets/menu/bookmark.svg" class="res-img" alt="" />
            <p v-if="expand" class="text">Articles</p>
          </router-link>
          <router-link class="box" to="/guide" style="margin: 1rem;">
            <img src="@/assets/menu/help-circle.svg" class="res-img" alt="" />
            <p v-if="expand" class="text">Help</p>
          </router-link>
        </div>

        <router-link class="box last" to="/upload" style="margin: 1rem;">
          <img src="@/assets/menu/cloud-upload.svg" class="res-img" alt="" />
          <p v-if="expand" class="text">Upload</p>
        </router-link>
      </div>
    </transition>
    <div class="nav">
      <router-link to="/" class="box">
        <img src="@/assets/menu/home.svg" class="res-img" alt="" />
      </router-link>

      <router-link class="box" to="/book">
        <img src="@/assets/menu/book.svg" class="res-img" alt="" />
      </router-link>
      <router-link class="box" to="/video">
        <img src="@/assets/menu/videocam.svg" class="res-img" alt="" />
      </router-link>
      <router-link class="box" to="/article">
        <img src="@/assets/menu/bookmark.svg" class="res-img" alt="" />
      </router-link>
      <router-link class="box" to="/guide">
        <img src="@/assets/menu/help-circle.svg" class="res-img" alt="" />
      </router-link>
      <router-link class="box" to="/upload">
        <img src="@/assets/menu/cloud-upload.svg" class="res-img" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      expand: false
    };
  }
};
</script>

<style scoped>
a {
  text-decoration: none !important;
}
.box:hover {
  background: #7867ddb7;
  padding: 7px;
  border-radius: 4px;
}
a.box.router-link-exact-active.router-link-active {
  background: #7c69ef;
  padding: 7px;
  border-radius: 4px;
}
.res-img {
  height: 30px;
  width: 30px;
}
.links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.last {
  /* background-color: #7c69ef; */
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  /* width: 44px; */
  /* display: flex; */
  /* justify-content: center; */
}
.box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.text {
  color: white;
  font-size: 17px;
  font-weight: 700;
  margin-top: 17px;
  margin-left: 12px;
  width: 63px;
}
.con {
  background-color: #00276f;
  height: 94vh;
  position: fixed;
  left: 10px;
  top: 3vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 7px;
  transition: 1.3s;
  z-index: 100;
}
@media (max-width: 1000px) {
  .con {
    display: none;
  }
}
.nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #00276f;
  width: 100%;
  height: 48px;
  position: fixed;
  bottom: 0;
  z-index: 100;
}

@media (min-width: 1000px) {
  .nav {
    display: none;
  }
}
.swidth {
  width: 60px;
  transition: 1.3s;
  animation: spread 1s 1 forward;
}
.awidth {
  width: fit-content;
  transition: 1.3s;
  animation: spread 1s 1 forward;
}

.img-fluid {
  border-radius: 100%;
  width: 43px;
  height: 43px;
}

@keyframes spread {
  from {
    width: 0px;
  }
  to {
    width: auto;
  }
}
</style>
