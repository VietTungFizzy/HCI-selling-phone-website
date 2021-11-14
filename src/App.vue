<template>
  <div id="nav">
    <Navigation/>
  </div>
  <div class="grid grid-cols-12 mt-3">
    <div class="col-span-2"></div>
    <div class="col-span-8">
      <router-view/>
    </div>
    <div class="col-span-2"></div>
  </div>
  <div class="inset-x-0 bottom-0" id="footer">
    <Footer/>
  </div>
</template>
<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

export default {
  name: "app",
  components: {
    Navigation,
    Footer
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

#footer {
  margin-top: 50px;
}
</style>
