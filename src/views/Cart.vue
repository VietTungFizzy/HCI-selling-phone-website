<template>
<div class="container p-8 mx-auto" v-if="isCartEmpty() == false">
  <div class="w-full overflow-x-auto">
    <div class="my-2 text-left">
      <h3 class="text-xl font-bold tracking-wider">GIỎ HÀNG</h3>
    </div>
    <div class="flex">
      <div>
        <table class="w-full h-fit border shadow-md">
          <thead>
            <tr class="bg-gray-100">
              <th class="px-6 py-3 font-bold whitespace-nowrap">Sản phẩm</th>
              <th class="px-6 py-3 font-bold whitespace-nowrap">Đơn giá</th>
              <th class="px-6 py-3 font-bold whitespace-nowrap">Số lượng</th>
              <th class="px-6 py-3 font-bold whitespace-nowrap">Thành tiền</th>
              <th class="px-6 py-3 font-bold whitespace-nowrap">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in products" :key="index">
              <td>
                <div class="flex justify-center items-center mt-2">
                  <img
                    :src="item.image"
                    class="object-cover h-28 w-28 rounded-2xl"
                    alt="image"
                  />
                  <router-link to="/checkout/cart" class="ml-2 hover:text-red-500 font-bold">{{item.title}}</router-link>
                </div>
              </td>
              <td class="p-4 px-6 text-center whitespace-nowrap">
                <div class="flex flex-col items-center justify-center">
                  <h3 class="text-red-500">{{formatPrice(item.price)}}đ</h3>
                </div>
              </td>
              <td class="p-4 px-6 text-center whitespace-nowrap">
                <div>
                  <button @click="decreaseQuantity(item)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="inline-flex w-6 h-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    name="qty"
                    :value="item.quantity"
                    class="w-12 text-center bg-gray-100 outline-none"
                    disabled
                  />
                  <button @click="increaseQuantity(item)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="inline-flex w-6 h-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </td>
              <td class="p-4 px-6 text-center whitespace-nowrap">{{productTotal(item)}}</td>
              <td class="p-4 px-6 text-center whitespace-nowrap">
                <button @click="removeProduct(item)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="my-2 text-left">
          <h3 class="text-xl font-bold tracking-wider">THÔNG TIN MUA HÀNG</h3>
          <div class="border shadow-md p-6">
            <div class="grid grid-cols-2 gap-2 my-2">
              <div class="">
                <label class="block text-sm mb-2" for="cus_name">Họ và Tên (bắt buộc)</label>
                <input class="w-full px-5 py-1 text-gray-700 rounded border" id="cus_name" name="cus_name" type="text" required="" placeholder="Họ và Tên" aria-label="Name" v-model="cusName">
              </div>
              <div class="">
                <label class="block text-sm mb-2" for="cus-tel">Số điện thoại (bắt buộc)</label>
                <input class="w-full px-5 py-1 text-gray-700 rounded border" id="cus-tel" name="cus-tel" type="tel" required="" placeholder="Số điện thoại" aria-label="Phone" v-model="cusPhone">
              </div>
            </div>
            <div class="my-2">
              <label class="block text-sm mb-2" for="cus-email">Email (Vui lòng điền email để nhận hoá đơn VAT)</label>
              <input class="w-full px-5 py-1 text-gray-700 rounded border" id="cus-email" name="cus-email" type="email" required="" placeholder="Email" aria-label="Email" v-model="cusEmail">
            </div>
            <div class="my-2">
              <label class="block text-sm mb-2" for="cus-address">Địa chỉ nhận hàng</label>
              <input class="w-full px-5 py-1 text-gray-700 rounded border" id="cus-address" name="cus-address" type="email" required="" placeholder="Địa chỉ" aria-label="Address" v-model="cusAddress" >
            </div>
            <div class="my-2">
              <label class="block text-sm mb-2" for="cus-note">Lưu ý thêm của quý khách</label>
              <textarea
              class="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
              id="cus-note"
              name="cus-note"
              rows="3"
              v-model="cusNote"
            ></textarea>
            </div>
          </div>
        </div>
        <div class="my-2 text-left">
          <h3 class="text-xl font-bold tracking-wider">HÌNH THỨC GIAO HÀNG</h3>
          <div class="border shadow-md p-6">
            <div class="flex justify-between">
              <div class="form-check form-check-inline">
                <input class="form-check-input form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="NORMAL_EXPRESS" v-model="expressType">
                <label class="form-check-label inline-block text-gray-800" for="inlineRadio10">Giao hàng tiết kiệm</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="FAST_EXPRESS" v-model="expressType">
                <label class="form-check-label inline-block text-gray-800" for="inlineRadio20">Giao hàng nhanh</label>
              </div>
            </div>
          </div>
        </div>
        <div class="my-2 text-left">
          <h3 class="text-xl font-bold tracking-wider">HÌNH THỨC THANH TOÁN <br><span class="text-xs text-red-500 italic">(Khuyến khích thanh toán trả trước và hạn chế tiếp xúc gần để đề phòng dịch COVID-19)</span></h3>
          <div class="border shadow-md p-6">
            <div>
              <div class="form-check my-2">
                <input class="form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="COD" v-model="paymentMethod">

                <label class="form-check-label inline-block text-gray-800 flex" for="flexRadioDefault1">
                  <img class="method-icon" width="32" src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-cod.svg" alt="cod">
                  <span class="ml-2 grid place-items-center">
                    Thanh toán tiền mặt khi nhận hàng
                  </span>
                </label>
              </div>
              <div class="form-check my-2">
                <input class="form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  value="MOMO" v-model="paymentMethod">
                <label class="form-check-label inline-block text-gray-800 flex" for="flexRadioDefault1">
                  <img class="method-icon" width="32" src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-momo.svg" alt="momo">
                  <span class="ml-2 grid place-items-center">
                    Thanh toán bằng ví MoMo
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ml-2">
        <div class="border shadow-md">
          <div class="mt-4">
            <div class="px-4 py-4 rounded-md">
              <label for="coupon code" class="font-semibold text-gray-600"
                >Mã khuyến mãi</label
              >
              <input
                type="text"
                placeholder="coupon code"
                class="
                  w-full
                  px-2
                  py-2
                  border border-blue-600
                  rounded-md
                  outline-none
                "
              />
              <span class="block text-green-600" v-if="isCouponEnter"
                >Áp dụng mã thành công</span
              >
              <button
                class="
                  px-6
                  py-2
                  mt-2
                  text-sm text-red-100
                  bg-red-600
                  rounded-md
                  hover:bg-red-700
                "
                @click="isCouponEnter = true"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
        <div class="border shadow-md mt-4">
          <div class="py-4 rounded-md shadow">
            <div class="flex justify-between px-4">
              <span class="font-bold">Tạm tính</span>
              <span class="font-bold">{{formatPrice(estimatedTotal())}}đ</span>
            </div>
            <div class="flex justify-between px-4">
              <span class="font-bold">Giảm giá</span>
              <span class="font-bold text-red-600">- {{isCouponEnter ? formatPrice(constants.DISCOUNT) : 0}}đ</span>
            </div>
            <div class="flex justify-between px-4">
              <span class="font-bold">Phí vận chuyển</span>
              <span class="font-bold">{{expressFee}}đ</span>
            </div>
            <div class="flex justify-between px-4">
              <span class="font-bold">Thuế VAT</span>
              <span class="font-bold">{{formatPrice(calculateVAT())}}đ</span>
            </div>
            <div
              class="
                flex
                items-center
                justify-between
                px-4
                py-2
                mt-3
                border-t-2
              "
            >
              <span class="text-xl font-bold">Tổng tiền</span>
              <span class="text-2xl font-bold">{{total}}đ</span>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <button
            class="
              w-full
              py-2
              text-center text-white
              bg-red-500
              rounded-md
              shadow
              hover:bg-red-600
            "
            @click="submit"
          >
            Tiến hành đặt hàng
          </button>
          <span class="text-xs">(Xin vui lòng kiểm tra lại đơn hàng trước khi hoàn tất Đặt Hàng)</span>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="container text-center p-8" v-else>
  <div class="mb-4">
    <i class="fas fa-shopping-cart fa-4x"></i>
  </div>
  <div class="text-xl mb-4">
    Không có sản phẩm nào trong giỏ hàng
  </div>
  <div>
    <button type="button" class="px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" @click="returnToHomePage">Tiếp tục mua sắm</button>
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
          <!-- <header class="text-right p-2">
            <button class="focus:outline-none p-2" @click="showModal1 = false">
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                ></path>
              </svg>
            </button>
          </header> -->
          <main class="p-2 text-center">
            <p>
              Cảm ơn bạn đã quan tâm đến sản phẩm công ty chúng tôi.
            </p>
          </main>
          <footer class="flex justify-center p-2">
            <button
              class="bg-red-600 font-semibold text-white p-2 w-64 rounded-full hover:bg-red-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300"
              @click="returnToHomePage"
            >
              Quay về trang chủ
            </button>
          </footer>
        </div>
      </transition>
    </div>
  </div>
</transition>
</template>
<script>
export default {
  name: "Cart",
  data() {
    return {
      products: null,
      expressType: "FAST_EXPRESS",
      isCouponEnter: false,
      paymentMethod: "COD",
      cusName: "",
      cusPhone: "",
      cusEmail: "",
      cusAddress: "",
      cusNote: "",
      showModal1: false
    }
  },
  created() {
    this.products = this.$store.state.cart
    this.constants = {
      FAST_EXPRESS:70000,
      NORMAL_EXPRESS: 35000,
      EXPRESS_TYPE: ["FAST_EXPRESS", "NORMAL_EXPRESS"],
      DISCOUNT: 100000,
      PAYMENT_METHOD: ["COD", "MOMO"]
    }
  },
  computed: {
    expressFee() {
      if(this.expressType == this.constants.EXPRESS_TYPE[0]) return this.formatPrice(this.constants.FAST_EXPRESS)
      else return this.formatPrice(this.constants.NORMAL_EXPRESS)
    },
    total() {
      const result = this.estimatedTotal() + this.calculateVAT() - (this.isCouponEnter ? this.constants.DISCOUNT : 0) + (this.expressType == this.constants.EXPRESS_TYPE[0] ? this.constants.FAST_EXPRESS : this.constants.NORMAL_EXPRESS)
      return this.formatPrice(result)
    }
  },
  methods: {
    isCartEmpty() {
      return this.$store.state.cart.length < 1
    },
    returnToHomePage() {
      this.$router.push({path: "/"})
    },
    decreaseQuantity(product) {
      if(product.quantity > 1) product.quantity--
      this.$store.commit("updateCart", this.products)
    },
    increaseQuantity(product) {
      product.quantity++
      this.$store.commit("updateCart", this.products)
    },
    formatPrice(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    removeProduct(product) {
      this.products = this.products.filter(item => item.id != product.id)
      this.$store.commit("updateCart", this.products)
    },
    productTotal(item) {
      return this.formatPrice(item.quantity * item.price)
    },
    estimatedTotal() {
      let result=0
      this.products.forEach(e => {
        result += e.quantity * e.price
      })
      return result
    },
    calculateVAT() {
      return Math.trunc(this.estimatedTotal() * 0.1)
    },
    submit() {
      if(!this.cusName || !this.cusPhone || !this.cusAddress) {
        alert("Vui lòng điền các thông tin cần thiết như Họ tên, SDT, Địa chỉ")
        return
      }
      this.showModal1= true
    }
  }
}
</script>
<style lang="scss" scoped></style>