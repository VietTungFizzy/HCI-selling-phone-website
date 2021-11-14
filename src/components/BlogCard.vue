<template>
<div class="p-5" id="type-1" v-if="type == 1">
  <!--Card 1-->
  <div class="shadow-md rounded-md w-full flex">
    <div class="cursor-pointer">
      <img src="ngay-ra-mat-Redmi-Note-11T-face-350x250.jpg" class="h-full" width="350" height="250"/>
    </div>
    <div class="p-5 text-left ">
      <h5 class="
      text-xl
      font-semibold
      mb-2
      hover:text-red-500
      cursor-pointer
      ">Card title</h5>

      <div class="text-sm text-gray-400 mb-2">
        Bởi <strong class="text-red-500 mr-2 cursor-pointer">Fizzy</strong> <i class="far fa-clock"></i> 4 Giây trước
      </div>

      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi
        tenetur, voluptatibus harum consequuntur alias quaerat excepturi
        temporibus nisi commodi, ex, ratione quae soluta! Saepe alias dolores
        dolorem assumenda totam?
      </p>
    </div>
  </div>
</div>
<div v-else-if="type==2">
  <div class="cursor-pointer">
    <img src="data_science_covid19-350x250.jpg" class="h-full"/>
  </div>
  <div class="p-4">
    <h5 class="text-xl font-semibold mb-2 cursor-pointer">Card title</h5>
  </div>
</div>
</template>
<script>
export default {
  name: "BlogCard",
  props: {
    type: Number
  }
}
</script>
<style lang="scss" scoped>

</style>