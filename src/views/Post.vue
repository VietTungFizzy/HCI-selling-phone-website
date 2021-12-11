<template>
<div class="text-left text-4xl">
  <h1><strong>{{post.title}}</strong></h1>
</div>
<div class="flex flex-row mt-2">
  <div>
    <img src="Generic-avatar.jpg" class="rounded-full h-10 w-10">
  </div>
  <div class="flex items-center ml-2 text-gray-400 text-sm">
    <span>
      Bởi <strong class="text-red-500">{{post.author}}</strong>
    </span>
    <span class="mx-2 dosh"></span>
    <span class="mr-5">
      6 giây trước
    </span>
    <span class="text-black cursor-pointer">
      <i class="far fa-comment"></i> hỏi đáp
    </span>
  </div>
</div>
<div class="text-justify content-area" v-html="post.content"></div>
<div class="border-top-bottom text-left pl-8 py-3 font-bold">
  Bình luận
</div>
<div class="p-2 border-b">
  <textarea
    class="
    mt-1
    block
    w-full
    border-solid
    border
    border-gray-800"
    rows="5"
    placeholder="Bình luận"
    v-model="commentEntered"
    ></textarea>
</div>
<div class="py-2 border-b text-right">
  <button
  class="
    bg-gray-200
    text-black
    active:bg-gray-300
    font-bold
    uppercase
    text-sm
    px-6
    py-3
    rounded
    shadow
    hover:shadow-lg
    outline-none
    focus:outline-none
    mr-1
    mb-1
    ease-linear
    transition-all
    duration-150
  "
  type="button"
  @click="sendComment"
  >
  Gửi
</button>
</div>
<div v-if="comments.length !== 0">
  <Comment v-for="comment in comments" :key="comment.id" :data="comment"/>
</div>
<div v-else class="text-center my-5 border-b">
  <em><Strong>Hiện tại không có bình luận nào</Strong></em>
</div>
<div>
  <div class="
  h-6
  pl-2
  mb-5
  text-left
  text-white
  font-bold
  bg-red-600
  ">
    Bài viết liên quan
  </div>
</div>
<div class="grid grid-cols-2">
    <blog-card :type="3" v-for="(post, index) in relatedBlogs" :post="post" :key="index" class="ml-2 mb-2"/>
</div>
<scroll-to-top-button :visibleY="600"></scroll-to-top-button>
</template>
<script>
import axios from "axios";
import Comment from "../components/Comment.vue"
import BlogCard from '../components/BlogCard.vue'
import ScrollToTopButton from '../components/ScrollToTopButton.vue'
// import jQuery from "jquery";
// const $ = jQuery;
// window.$ = $;

export default {
  name: "Post",
  props: {
    id: String
  },
  components: {
    Comment,
    BlogCard,
    ScrollToTopButton
  },
  data() {
    return {
      post: null,
      comments: [],
      commentEntered: "",
      relatedBlogs: []
    }
  },
  created() {
    const _this = this
    axios.get(`/api/blog/post-content-${this.id}.json`)
    .then(response => {
      _this.post = response.data.result.data
    })
    axios.get(`/api/comment/comment-post-${this.id}.json`)
    .then(response => {
      _this.comments = response.data.result.data
    })
    axios.get("/api/blog/blog-post-thumbnails.json")
    .then(response => {
      _this.relatedBlogs = response.data.result.data
    })
  },
  methods: {
    sendComment: function() {
      this.comments.push({
        author: "Fizzy",
        comment: this.commentEntered
      })
      this.commentEntered = ""
    }
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
  margin-top: 20px;
  margin-bottom: 20px;
}

.content-area::v-deep h2 {
  font-size: 30px;
}

.content-area::v-deep a {
  color: red;
}

.content-area::v-deep .related-link {
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 30px;
  list-style: square;

  border-top: 1px solid #E8E7E7;
  border-bottom: 1px solid #E8E7E7;
}

.content-area::v-deep .related-link li {
  margin-top: 5px;
  margin-bottom: 5px;
}

.dosh {
  border: 1px solid #E8E7E7;
  width: 15px;
}

.border-top-bottom {
  border-top: 1px solid #E8E7E7;
  border-bottom: 1px solid #E8E7E7;
}

textarea {
  resize: none;
}
</style>