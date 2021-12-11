<template>
<div id="headline" class="px-5">
  <div class="headline-height relative z-0 cursor-pointer" @click="goToHeadlinePost">
    <div class="gradient h-full">
      <div class="
      inset-x-0
      bottom-0
      absolute
      ml-5
      mb-5
      text-left
      text-white
      text-4xl
      font-bold
      ">
        OPPO A95 4G ra mắt với chip Snapdragon 662, pin 5,000 mAh và sạc nhanh 33W, giá chỉ 5.98 triệu đồng
      </div>
    </div>
  </div>
  <div class="mt-2">
    <carousel
    :settings="carouselSettings"
    :autoplay="constants.AUTOPLAY_TIME"
    :breakpoints="carouselBreakpoints"
    :wrap-around="true"
    >
      <Slide v-for="(post, index) in posts" :key="index">
        <div class="owl-headline">
          <blog-card :type="2" :post="post"/>
        </div>
      </Slide>
    </carousel>
  </div>
</div>
<div>
  <div class="
  h-6
  pl-2
  mx-5
  text-left
  text-white
  font-bold
  bg-red-600
  ">
    Tin tức mới nhất
  </div>
</div>
<div ref="scrollComponent">
  <blog-card :type="1" v-for="(post, index) in posts" :post="post" :key="index"/>
</div>
<scroll-to-top-button :visibleY="600"></scroll-to-top-button>
</template>
<script>
import BlogCard from '../components/BlogCard.vue';
import ScrollToTopButton from '../components/ScrollToTopButton.vue'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import axios from "axios";

export default {
  name: "Blogs",
  components: {
    BlogCard,
    Carousel,
    Slide,
    ScrollToTopButton
  },
  data() {
    return {
      carouselSettings: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      carouselBreakpoints: {
        500: {
          itemsToShow: 2,
          snapAlign: 'even',
        },
        700: {
          itemsToShow: 3,
          snapAlign: 'odd',
        },
        1720: {
          itemsToShow: 4,
          snapAlign: 'even',
        }
      },
      posts: []
    }
  },
  created() {
    this.constants = {
      AUTOPLAY_TIME: 0,
      FOOTER_HEIGHT: 376
    }
    this.fetchPost()
  },

  computed: {
  },

  mounted() {
    window.addEventListener("scroll",this.handleScroll)
  },
  unmounted() {
    window.removeEventListener("scroll",this.handleScroll)
  },
  methods: {
    handleScroll() {
      if(this.$refs.scrollComponent.getBoundingClientRect().bottom + this.constants.FOOTER_HEIGHT <= window.innerHeight) {
        this.fetchPost()
      }
    },
    fetchPost() {
      const _this = this
      axios.get("/api/blog/blog-post-thumbnails.json")
      .then(response => {
        _this.posts = _this.posts.concat(response.data.result.data)
      })
    },
    goToHeadlinePost() {
      this.$router.push({path: "/blog/1"})
    }
  }
}
</script>
<style lang="scss" scoped>
.headline-height {
  height: 430px;
  background-image: url("/images/Galaxy-A33-5G-1.jpg");
  background-size: cover;

  .gradient {
    background: rgb(2,0,36);
    background: linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(18,18,18,0.18531162464985995) 35%, rgba(0,0,0,0.7259278711484594) 100%);
  }
}

.owl-headline {
  max-height: 250px;
  padding-right: 5px;
  padding-left: 5px;
}
</style>