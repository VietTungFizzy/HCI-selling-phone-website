<template>
<div class="section rounded-lg">
  <div class="text-center mb-3">
    <span class="text-white text-3xl font-bold">{{title}}</span>
  </div>
  <div class="grid grid-cols-4 gap-x-4 gap-y-2">
    <div v-for="(item, index) in data"
    :key="index"
    class="
      bg-white
      rounded-lg
      p-2
      my-1
      flex
      flex-col
      justify-between
      relative">
      <div v-if="item.type == 2 && item.discount > 2" class="absolute sticker">
        <img src="images/discount-sticker.svg" >
        <span class="discount-text">Giảm {{item.discount}}%</span>
      </div>
      <div>
        <img :src="item.image" class="inline">
      </div>
      <div class="text-left">
        <strong>{{item.title}}</strong>
      </div>
      <div v-if="item.type == 1" class="text-left">
        <strong class="text-red-500">{{item.price}} ₫</strong>
      </div>
      <div v-else-if="item.type == 2" class="text-left">
        <strong class="text-red-500">{{item['new-price']}} ₫</strong>
        <span class="text-gray-500 text-sm line-through ml-4">{{item['old-price']}} ₫</span>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "PromotionSection",
  props: {
    title: String,
    data: Array
  }
}
</script>
<style lang="scss">
.section {
  background: linear-gradient(90deg, #4A0394, #AC08B6);
  padding: 10px;
}

.sticker {
  width: 80px;
  height: 31px;
  left: -5px;
  top: 0px;
}

.discount-text {
  position: absolute;
  top: 2px;
  left: 11px;
  color: white;
  font-size: 13px;
  font-weight: bold;
}
</style>