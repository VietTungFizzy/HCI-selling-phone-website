<template>
<header>
  <nav class="relative flex flex-wrap flex-row items-center justify-between">
    <div class="branding">
      <router-link to="/" custom>
        <img src="../assets/icon.png" width="60" height="60">
      </router-link>
    </div>
    <div class="nav-links">
      <ul>
        <router-link active-class="text-pink-color background-transparent font-bold uppercase px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1" to="#" id="link">Thị trường</router-link>
        <router-link active-class="text-pink-color background-transparent font-bold uppercase px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1" to="#" id="link">Đánh giá</router-link>
        <router-link active-class="text-pink-color background-transparent font-bold uppercase px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1" to="#" id="link">Khuyến mãi</router-link>
        <router-link active-class="text-pink-color background-transparent font-bold uppercase px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1" to="#" id="link">Liên lạc</router-link>
      </ul>
    </div>
  </nav>
</header>
</template>
<script>
export default {
  name: "Navigation"
}
</script>
<style lang="scss" scoped>
.nav-links {
  ul {
    a#link{
      color: #EC4899;
    }
  }
}
</style>