<template>
<header class="grid grid-cols-12">
  <div class="col-span-2"></div>
  <div class="col-span-8">
    <nav class="relative flex flex-wrap flex-row items-center justify-between">
      <div class="branding">
        <router-link to="/" custom v-slot="{navigate}">
          <img src="../assets/icon.png" width="60" height="60" @click="navigate">
        </router-link>
      </div>
      <div class="nav-links">
        <ul>
          <router-link class="text-pink-color background-transparent font-bold uppercase px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1" to="/blogs" id="link">Thị trường</router-link>
          <router-link class="text-pink-color background-transparent font-bold uppercase px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1" to="/blogs" id="link">Đánh giá</router-link>
          <router-link class="text-pink-color background-transparent font-bold uppercase px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1" to="/promotions" id="link">Khuyến mãi</router-link>
          <router-link class="text-pink-color background-transparent font-bold uppercase px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1" to="/contact-us" id="link">Liên lạc</router-link>
        </ul>
      </div>
    </nav>
  </div>
  <div class="col-span-2"></div>
</header>
</template>
<script>
export default {
  name: "Navigation"
}
</script>
<style lang="scss" scoped>
header {
  z-index: 99;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 0 25px;
}

.nav-links ul a#link {
  color: #EC4899;
}
</style>