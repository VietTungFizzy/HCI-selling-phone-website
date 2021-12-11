<template>
<div class="p-5" id="type-1" v-if="type == 1">
  <!--Card 1-->
  <div class="shadow-md rounded-md w-full flex">
    <div class="cursor-pointer img-size flex-none">
      <img :src="post.image" class="h-full w-full" @click="goToPost"/>
    </div>
    <div class="p-5 text-left">
      <h5 class="
      text-xl
      font-semibold
      mb-2
      hover:text-red-500
      cursor-pointer
      "
      @click="goToPost">{{post.title}}</h5>

      <div class="text-sm text-gray-400 mb-2">
        Bởi <strong class="text-red-500 mr-2 cursor-pointer">{{post.author}}</strong> <i class="far fa-clock"></i> 4 Giây trước
      </div>

      <p class="mb-4">
        {{trimmedTitle(200, post.content)}}
      </p>
    </div>
  </div>
</div>
<div v-else-if="type==2">
  <div class="cursor-pointer max-height-for-type-2">
    <img :src="post.image" class="h-full w-full" @click="goToPost"/>
  </div>
  <div>
    <h5 class="text-sm font-semibold mb-2 cursor-pointer text-justify" @click="goToPost">{{trimmedTitle(50, post.title)}}</h5>
  </div>
</div>
<div v-else-if="type==3" class="flex">
  <div class="cursor-pointer max-height-for-type-2 flex-none thumbail-size">
    <img :src="post.image" class="h-full w-full" @click="goToPost"/>
  </div>
  <div class="ml-2 flex flex-col justify-between">
    <div>
      <h5
      class="
      text-sm
      font-semibold
      mb-2
      cursor-pointer
      text-justify"
      @click="goToPost">
        {{trimmedTitle(100, post.title)}}
      </h5>
    </div>
    <div class="text-sm text-gray-400 text-left ml-5">
      <i class="far fa-clock"></i> 4 Giây trước
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "BlogCard",
  props: {
    type: Number,
    post: Object
  },
  created() {
  },
  computed: {

  },
  methods: {
    trimmedTitle(maxLength, content) {
      if(content.length <= maxLength) return content

      const CLAMP = "..."
      let temp = content.slice(0, maxLength - CLAMP.length)
      let last = temp.length - 1

      while(last > 0 && temp[last] !== ' ' && temp[last] !== CLAMP[0]) last--

      last = last || maxLength - CLAMP.length
      return content.substr(0, last) + CLAMP
    },
    goToPost() {
      this.$router.push({path: `/blog/${this.post.id}`})
    }
  }
}
</script>
<style lang="scss" scoped>
.max-height-for-type-2 {
  height: 180px;
}

.img-size {
  width: 260px;
}

.thumbail-size {
  width: 130px;
  height: 100px;
}
</style>