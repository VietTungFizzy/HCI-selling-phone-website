<template>
<div class="text-left text-4xl">
  <h1><strong>{{post.title}}</strong></h1>
</div>
<div class="text-justify content-area" v-html="post.content"></div>
</template>
<script>
import axios from "axios";
// import jQuery from "jquery";
// const $ = jQuery;
// window.$ = $;

export default {
  name: "Post",
  props: {
    id: String
  },
  data() {
    return {
      post: null
    }
  },
  created() {
    const _this = this
    axios.get(`http://localhost:8080/api/blog/post-content-${this.id}.json`)
    .then(response => {
      _this.post = response.data.result.data
    })
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.content-area::v-deep p,
.content-area::v-deep h1,
.content-area::v-deep h2,
.content-area::v-deep h3,
.content-area::v-deep h4,
.content-area::v-deep h5,
{
  margin-top: 10px;
  margin-bottom: 10px;
}

.content-area::v-deep h2 {
  font-size: 30px;
}
</style>