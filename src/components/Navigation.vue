<template>
<header class="grid grid-cols-12 bg-red-500">
  <div class="col-span-2"></div>
  <div class="col-span-8">
    <nav class="relative flex flex-wrap flex-row items-center justify-between">
      <div class="branding">
        <router-link to="/" custom v-slot="{navigate}">
          <img src="../assets/icon.png" width="60" height="60" @click="navigate">
        </router-link>
      </div>
      <div class="nav-links flex flex-row text-white" v-if="urlType2List.includes(currentRouteName())">
        <div class="flex items-center justify-center">
          <router-link class="background-transparent font-bold uppercase px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1" to="/blogs" id="link">Thị trường</router-link>
          <router-link class="background-transparent font-bold uppercase px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1" to="/blogs" id="link">Đánh giá</router-link>
          <router-link class="background-transparent font-bold uppercase px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1" to="/promotions" id="link">Khuyến mãi</router-link>
          <router-link class="background-transparent font-bold uppercase px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1" to="/contact" id="link">Liên lạc</router-link>
        </div>
        <div class="flex flex-row cursor-pointer hover:bg-red-400 rounded px-2" v-if="isUserLogin() == false" @click="login">
          <div class="grid place-items-center">
            <i class="far fa-user fa-2x"></i>
          </div>
          <div>
            <span v-if="isUserLogin() == true">
              <span>Xin chào</span><br><span class="font-bold">{{getUserName()}}</span>
            </span>
            <span v-else class="text-sm">
              Đăng ký / Đăng nhập<br>Tài khoản
            </span>
          </div>
        </div>
      </div>
      <div class="nav-links text-white flex flex-row" v-else>
        <div class="flex flex-row mr-16">
          <div class="grid place-items-center">
            <i class="fas fa-phone-alt fa-2x"></i>
          </div>
          <div>
            <span>Gọi mua hàng</span>
            <br>
            <span class="font-bold">1800.2097</span>
          </div>
        </div>
        <div class="flex flex-row cursor-pointer hover:bg-red-400 rounded px-2" @click="login">
          <div class="grid place-items-center">
            <i class="far fa-user fa-2x"></i>
          </div>
          <div class="" @click="login">
            <span v-if="isUserLogin() == true">
              <span>Xin chào</span><br><span class="font-bold">{{getUserName()}}</span>
            </span>
            <span v-else class="text-sm">
              Đăng ký / Đăng nhập<br>Tài khoản
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <div class="col-span-2"></div>
</header>
</template>
<script>
export default {
  name: "Navigation",
  data() {
    return {
      urlType2List: [
        "Blogs",
        "Post",
        "FAQ",
        "ContactUs"
      ]
    }
  },
  methods: {
    currentRouteName() {
      return this.$route.name
    },
    isUserLogin() {
      return this.$store.state.userLogged != null
    },
    getUserName() {
      return this.$store.state.userLogged.name
    },
    login() {
      this.$router.push({path: "/login"})
    }
  }
}
</script>
<style lang="scss" scoped>
header {
  z-index: 99;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 0 25px;
}

.nav-links ul a#link {
  color: white;
}
</style>