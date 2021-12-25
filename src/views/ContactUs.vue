<template>
<div>
  <div class="bg-gradient-to-b from-red-800 to-red-600 h-96"></div>
  <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
    <div class="bg-white w-full shadow-lg rounded p-8 sm:p-12 -mt-72">
      <p class="text-3xl font-bold leading-7 text-center">Chúng tôi luôn đón nhận những phản hồi và câu hỏi của các bạn. Hãy cho chung tôi biết câu hỏi của bạn!</p>
      <form action="" method="post">
        <div class="md:flex items-center mt-12">
          <div class="w-full md:w-1/2 flex flex-col">
            <label class="font-semibold leading-none">Họ tên</label>
            <input type="text" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-red-700 mt-4 bg-gray-100 border rounded border-gray-200" placeholder="Họ tên của bạn"/>
          </div>
          <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
            <label class="font-semibold leading-none">Số điện thoại</label>
            <input type="tel" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-red-700 mt-4 bg-gray-100 border rounded border-gray-200" placeholder="Số điện thoại của bạn" />
          </div>
        </div>
        <div>
          <div class="w-full flex flex-col mt-8">
            <label class="font-semibold leading-none">Nội dung</label>
            <textarea type="text" class="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-red-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
          </div>
        </div>
        <div class="flex items-center justify-center w-full">
          <button class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-red-700 rounded hover:bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-700 focus:outline-none" @click.prevent="showModal1=true">
              Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  <!-- Modal -->
  <transition
  enter-active-class="transition duration-300"
  enter-from-class="opacity-0"
  enter-to-class="opacity-100"
  leave-active-class="transition duration-300"
  leave-from-class="opacity-100"
  leave-to-class="opacity-0">
    <div
      class="fixed inset-0 w-full h-full z-20 bg-black bg-opacity-50 duration-300 overflow-y-auto"
      v-show="showModal1">
      <div class="relative sm:w-3/4 md:w-1/2 lg:w-1/3 mx-2 sm:mx-auto my-10 opacity-100">
        <transition
          enter-active-class="transition transform duration-300"
          enter-from-class="scale-0"
          enter-to-class="scale-100"
          leave-active-class="transition transform duration-300"
          leave-from-class="scale-100"
          leave-to-class="scale-0">
          <div
            class="relative bg-white shadow-lg rounded-md text-gray-900 z-20"

            v-show="showModal1">
            <header class="text-right p-2">
              <!-- <h2 class="font-semibold"></h2> -->
              <button class="focus:outline-none p-2" @click="showModal1 = false">
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                  <path
                    d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                  ></path>
                </svg>
              </button>
            </header>
            <main class="p-2 text-center">
              <p>
                Cảm ơn bạn đã gửi ý kiến đóng góp cho chúng tôi.
              </p>
            </main>
            <footer class="flex justify-center p-2">
              <button
                class="bg-red-600 font-semibold text-white p-2 w-32 rounded-full hover:bg-red-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300"
                @click="showModal1 = false"
              >
                Go back
              </button>
            </footer>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</div>
</template>
<script>

export default {
  name: "ContactUs",
  data() {
    return {
      showModal1: false
    }
  },
  methods: {
    submit() {
      console.log("test")
    }
  }
}
</script>
<style lang="scss" scoped></style>