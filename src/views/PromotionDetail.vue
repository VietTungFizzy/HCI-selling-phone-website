<template>
<div>
  <img src="SIS_1920x400_1.png">
</div>
<div class="my-5 text-center text-white text-2xl font-bold">
  <a v-for="(promotion, index) in promotions"
  :key="index"
  @click.prevent="scrollToSection(index)"
  class="table-of-content-item">
    {{promotion['section-title']}}
  </a>
</div>
<div v-for="(promotion, index) in promotions" :key="index" class="my-5" :id="`section-${index}`">
  <promotion-section :title="promotion['section-title']" :data="promotion['section-data']"/>
</div>
</template>
<script>
import axios from "axios";
import PromotionSection from "../components/PromotionSection.vue"
export default {
  name: "PromotionDetail",
  components: {
    PromotionSection
  },
  props: {
    id: String
  },
  created() {
    const _this = this
    axios.get(`/api/promotion/promotion-${this.id}.json`)
    .then(response => {
      _this.promotions = response.data.result.data.promotions
    })
  },
  data() {
    return {
      promotions: null,
    }
  },
  methods: {
    scrollToSection(sectionId) {
      document.querySelector(`#section-${sectionId}`).scrollIntoView({
        behavior: "smooth"
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.table-of-content-item:first-child {
  border-left: none;
  padding-left: 0px;
}
.table-of-content-item:last-child {
  border-right: none;
  padding-right: 0px;
}
.table-of-content-item {
  border-left: 2px solid white;
  border-right: 2px solid white;
  padding-left: 10px;
  padding-right: 10px;
}
</style>