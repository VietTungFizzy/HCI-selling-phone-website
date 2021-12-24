<template>
<div>
  <div class="text-center pt-10 pb-5">
    <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
      Xin chào, Tôi có thể giúp gì cho bạn?
    </h1>
    <div class="pt-2 mx-auto text-gray-600">
      <span class="relative">
        <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-3/5"
          type="text" name="search" placeholder="Mời bạn nhập câu hỏi hay từ khóa" v-model="searchQuery" @keyup.enter="search">
        <button type="submit" class="absolute right-3 top-0" @click="search">
          <i class="fas fa-search"></i>
        </button>
      </span>
    </div>
  </div>
  <section class="text-gray-700">
    <div class="container px-5 py-24 mx-auto">
      <div class="-mx-2">
        <div class="text-center text-3xl font-bold mb-5">
          CÂU HỎI THƯỜNG GẶP
        </div>
        <div class="w-full px-4 py-2">
          <details class="mb-4 text-left cursor-pointer" v-for="item in data" :key="item.id" v-show="item.visible">
            <summary class="font-semibold bg-red-500 text-white rounded-md py-2 px-4">
              {{item.question}}
            </summary>
            <div v-html="item.answear"></div>
          </details>
        </div>
      </div>
    </div>
  </section>
</div>
</template>
<script>
import axios from "axios";

export default {
  name: "FAQ",
  data() {
    return {
      searchQuery: "",
      data: null
    }
  },
  methods: {
    stringToASCII(str) {
      try {
        return str.replace(/[àáảãạâầấẩẫậăằắẳẵặ]/g, 'a')
          .replace(/[èéẻẽẹêềếểễệ]/g, 'e')
          .replace(/[đ]/g, 'd')
          .replace(/[ìíỉĩị]/g, 'i')
          .replace(/[òóỏõọôồốổỗộơờớởỡợ]/g, 'o')
          .replace(/[ùúủũụưừứửữự]/g, 'u')
          .replace(/[ỳýỷỹỵ]/g, 'y')
      } catch {
        return ''
      }
    },
    search() {
      if(this.searchQuery == null || this.searchQuery == "") {
        this.data.forEach((el) => {
          el.visible = true
        })
      }

      const convertedQuery = this.stringToASCII(this.searchQuery.toLowerCase())
      this.data.forEach((el) => {
        const convertedQuestion = this.stringToASCII(el.question.toLowerCase())
        const convertedAnswear = this.stringToASCII(el.answear.replace(/(<p>|<\/p>|<br>)/ig, "").toLowerCase())
        const regex = new RegExp(`\\b(${convertedQuery})\\b`, 'g')
        const searchResult = (regex.test(convertedQuestion) || regex.test(convertedAnswear))
        el.visible = searchResult
      })
    }
  },
  created() {
    const _this = this
    axios.get("/api/faq.json")
    .then(response => {
      _this.data = response.data.result.data
      _this.data.forEach((i) => {
        i.visible = true
      })
    })
  }
}
</script>
<style lang="scss" scoped>

</style>