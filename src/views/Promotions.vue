<template>
<div class="grid grid-cols-3 gap-x-4 gap-y-4 mb-5">
  <div class="promotion-card" v-for="(item, index) in promotions" :key="index">
    <div class="shadow-lg rounded-md overflow-hidden">
  <img
    :src="item.banner"
    class="cursor-pointer"
    alt=""
    @click="goToPromotionDetail"
  />

  <div class="p-4 text-left">
    <h5 class="text-xl font-semibold mb-5 hover:underline cursor-pointer" @click="goToPromotionDetail">{{item.title}}</h5>
    <div class="flex justify-between">
      <strong class="text-red-500">Đang diễn ra</strong>
      <button
        class="
          bg-red-500
          text-white
          active:bg-red-600
          font-bold
          uppercase
          text-xs
          px-4
          py-2
          rounded
          shadow
          hover:shadow-md
          outline-none
          focus:outline-none
          mr-1
          mb-1
          ease-linear
          transition-all
          duration-150
        "
        type="button"
        @click="goToPromotionDetail"
      >
        Xem chi tiết
      </button>
    </div>
  </div>
</div>
  </div>
</div>
</template>
<script>
import axios from "axios";

export default {
  name: "Promotion",
  data() {
    return {
      promotions: []
    }
  },
  created() {
    const _this = this
    axios.get("/api/promotion/promotions.json")
    .then(response => {
      console.log(response.data.result)
      _this.promotions = response.data.result.data.promotions
      console.log(_this.promotions)
    })
  },
  methods: {
    goToPromotionDetail() {
      this.$router.push({path: "/promotion/1"})
    }
  }
}
</script>
<style lang="scss" scoped></style>