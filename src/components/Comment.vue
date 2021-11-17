<template>
<div class="flex text-justify">
  <div class="flex-shrink-0 mr-3">
    <img class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src="Generic-avatar.jpg" alt="">
  </div>
  <div class="flex-1 px-4 py-2 sm:px-6 sm:py-4">
    <p><strong class="mr-2">{{data.author}}</strong> {{data.comment}}</p>
    <div class="text-right">
      <span class="text-xs text-gray-400">3:34 PM</span>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "Comment",
  props: {
    data: Object
  }
}
</script>
<style scoped>

</style>