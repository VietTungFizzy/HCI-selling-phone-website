<template>
    <div class="product-container">
      <img class="product-image" :src="product.imageUrl" />
      <div class="details-wrap">
        <h3>{{ product.name }}</h3>
        <p>${{ product.price }}</p>
      </div>
      <button
        class="
          bg-red-500
          text-white
          active:bg-red-600
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
          ease-linear
          transition-all
          duration-150
        "
        type="button"
        
      >
        Xoá khỏi giỏ
      </button>
      
    </div>
</template>

<script>
export default {
    name: 'ProductsListItem',
    props: ['product'],
}
</script>

<style scoped>
  .product-container {
    align-content: 'center';
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 16px;
    width: 100%;
  }

  .product-image {
    flex: 1;
    height: 100px;
    max-width: 100px;
  }

  .details-wrap {
    padding: 0 16px;
    flex: 3;
  }

  .remove-button {
    flex: 1;
    margin: auto;
  }
</style>