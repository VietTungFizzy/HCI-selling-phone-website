<template>
<div id="headline" class="px-5">
  <div class="headline-height relative z-0">
    <div class="gradient h-full">
    <!-- <img src="dung-smartphone-ngoai-duong-1-1140x596.jpg" class="h-full from-transparent to-black"> -->
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi
        tenetur, voluptatibus harum consequuntur alias quaerat excepturi
        temporibus nisi commodi
      </div>
    </div>
  </div>
  <div class="mt-2">
    <carousel :settings="carouselSettings" :autoplay="constants.AUTOPLAY_TIME" :wrap-around="true">
      <Slide v-for="slide in 10" :key="slide">
        <div class="owl-headline">
          <blog-card type="2"/>
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
<div>
  <blog-card type="1"/>
  <blog-card type="1"/>
  <blog-card type="1"/>
  <blog-card type="1"/>
  <blog-card type="1"/>
  <blog-card type="1"/>
  <blog-card type="1"/>
</div>
</template>
<script>
import BlogCard from '../components/BlogCard.vue'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';

export default {
  name: "Blogs",
  components: {
    BlogCard,
    Carousel,
    Slide
  },
  data() {
    return {
      carouselSettings: {
        itemsToShow: 2.85,
        snapAlign: 'center',
      },
    }
  },
  created() {
    this.constants = {
      AUTOPLAY_TIME: 2000
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.headline-height {
  height: 430px;
  background-image: url("/dung-smartphone-ngoai-duong-1-1140x596.jpg");
  background-size: cover;

  .gradient {
    background: rgb(2,0,36);
    background: linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(18,18,18,0.18531162464985995) 35%, rgba(0,0,0,0.7259278711484594) 100%);
  }
}

.owl-headline {
  max-height: 240px;
  padding-right: 20px;
}
</style>