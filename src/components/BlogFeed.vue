<template>
<transition-group tag="ul" :name="transition" class="blog__feed">
  <li v-for="post in feed" class="preview" :key="post.id">
    <figure class="preview__figure" :style="getBgImg(post.image)">
      <transition name="v--fade">
        <figcaption class="preview__details">
          <router-link class="preview__title"
          :to="`/blog/${post.id}`"
          @click="scrollTo(0, 220, scrollDelay)"
          >
          {{ post.title }}
          </router-link>

          <div class="preview__meta">
            <time class="preview__published">
              {{ prettyDate(post.published) }}
            </time>

            <router-link class="preview__author"
            :to="`/by/${kebabify(post.author)}`"
            @click="scrollTo(0, 220, scrollDelay)"
            >
              {{ post.author }}
            </router-link>
          </div>
        </figcaption>
      </transition>
    </figure>
  </li>
</transition-group>
</template>
<script>
import { scrollTo, kebabify, prettyDate } from '../helper'

export default {
  name: 'blog-feed',
  resource: 'BlogFeed',

  // props: {},
  data() {
    return {
      posts: [],
      transition: 'preview-appear',
      scrollDelay: 500,
    }
  },

  computed: {
    feed() {
      console.log("Hit", this.posts)
      return this.posts
    }
  },

  methods: {
    scrollTo,
    kebabify,
    prettyDate,
    getBgImg(src) {
      return { backgroundImage: `url(${src})`}
    },
    stackPosts(posts) {
      let interval
      const stack = () => {
        this.posts.push(posts.shift())
        if(!posts.length) {
          this.transition = 'preview'
          clearInterval(interval)
        }
      }

      interval = setInterval(stack, 125)
    }
  },

  mounted() {
    this.$getResource('feed')
    .then(posts => {
      this.stackPosts(posts)
    })
  }
}

</script>