<template>
<div>
  <transition name="fade">
    <button
    class="
    bg-gray-200
    text-black
    active:bg-purple-300
    font-bold
    uppercase
    text-xs
    px-4
    py-2
    rounded
    shadow
    hover:shadow-md
    outline-none
    focus:outline-none
    mr-1
    mb-1
    fixed
    scrollButton"
    v-if="isVisible" @click="goToTop(duration)"><i class="fas fa-chevron-up"></i></button>
  </transition>
</div>
</template>
<script>
export default {
  name: 'ScrollToTopButton',
  props: {
    visibleY:{
      type: Number,
      default: 400,
    },
    duration:{
      type: Number,
      default: 800,
    }
  },
  data(){
    return {
      isVisible: false
    }
  },
  created() {
    window.addEventListener('scroll', this.scrollEvent);
  },
  unmounted() {
    window.removeEventListener('scroll', this.scrollEvent);
  },
  methods: {
    scrollEvent() {
      this.isVisible = (this.visibleY < window.scrollY)
    },
    goToTop(duration) {
      if(document.scrollingElement.scrollTop === 0) return
      const totalScrollDistance = document.scrollingElement.scrollTop
      let scrollY = totalScrollDistance
      let oldTimestamp = null

      function step(newTimestamp) {
        if(oldTimestamp !== null) {
          scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / duration
          if(scrollY <= 0) return document.scrollingElement.scrollTop = 0
          document.scrollingElement.scrollTop = scrollY
        }
        oldTimestamp = newTimestamp
        window.requestAnimationFrame(step)
      }
      window.requestAnimationFrame(step)
      this.$emit('scrolledOnTop')
    }
  }
}
</script>
<style lang="scss" scoped>
.scrollButton {
  z-index: 1000;
  top: 90%;
  left: 95%;
}
</style>