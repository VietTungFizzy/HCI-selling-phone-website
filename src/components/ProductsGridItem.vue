<template>
    <div class="bg-white
          rounded-lg
          p-2
          my-1
          flex
          flex-col
          justify-between
          relative
          border
          shadow-md">
        <div class="text-center">
          <img v-bind:src="product.imageUrl" class="inline product-image"/>
        </div>
        <div>
          <h3 class="product-name">{{ product.name }}</h3>
        </div>
        <div class="text-left text-red-500">
          <p class="product-price">{{ product.price }}đ</p>
        </div>
        <div>
          <router-link v-bind:to="'/products'">
              <button type="button" class="px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Xem chi tiết</button>
          </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductsGridItem',
    props: ['product'],
}
</script>

<style scoped>
.product-item {
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 2px 5px #888;
    display: flex;
    flex-direction: column;
    margin-bottom: 2%;
    padding: 20px;
    position: relative;
    width: 32%;
  }

  .product-name {
    margin-bottom: 0;
  }
  /*
    img {
      height: 200px;
      width: 200px;
    }

    a {
      width: 100%;
    }

    button {
      width: 100%;
    }*/
</style>