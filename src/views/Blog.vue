<template>
  <main class="blog" :class="{'blog--reading': this.post}">
    <navigation/>
    <blog-feed/>
    <blog-post :post="post"/>
    <site-footer/>
  </main>
</template>
<script>
import Navigation from '../components/Navigation.vue'
import SiteFooter from '../components/SiteFooter.vue'
import BlogFeed from '../components/BlogFeed.vue'
import BlogPost from '../components/BlogPost.vue'

export default {
  name: 'blog',
  components: {
    Navigation,
    SiteFooter,
    BlogFeed,
    BlogPost
  },
  resource: 'Blog',
  props: {
    post: String,
    author: String
  },
  data() {
    return {
      title: '',
      labels: {
        post: '',
        author: ''
      }
    }
  },
  computed: {
    content() {
      return {
        title: this.title,
        labels: this.labels
      }
    },
  },
  watch: {
    '$route.name' (to, from) {
      if(to !== from) console.log("this.nav++")
    }
  },
  mounted() {
    this.$getResource('blog')
    .then(x => {
      console.log(x)
    })
  }
}

</script>