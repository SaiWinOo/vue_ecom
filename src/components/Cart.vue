<template >
    <div class="container-fluid  cart_container   position-fixed">
        <div class="row position-relative ">
            <div class="col-7  mx-auto left-50 card animate__animated animate__zoomIn position-absolute">
              <div class=" height mt-3">
                <div class="text-end mb-2">
                  <button @click="showCart" class="btn btn-sm btn-warning">
                    <i class="bi bi-x"></i>
                  </button>
                </div>
                <div v-for="product in productsInCart" @click="showConsole"
                     class="card  px-5 mb-3 ">
                  <div class="d-flex align-items-center product_cart justify-content-between">
                    <div class="">
                      <img class="w-50px me-2" :src="product.image" alt="">
                      <small>
                        {{ ((product.title).split(" ")).slice(0,3).join(" ") }}</small>
                    </div>
                    <div>
                      <div>
                        <button :disabled="items === 0" @click="decrement(product.id)"
                                class="btn btn-sm btn-outline-primary">-
                        </button>
                        {{ items }}
                        <button @click="increment(product.id)" class="btn btn-sm btn-outline-primary">+</button>
                      </div>
                      {{  }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name:'Cart',
  data() {
    return {
      productsInCart: [],
      items: 0,
    }
  },
  computed: {
    ...mapState(['name','cart']),
    ...mapMutations(['showCart']),
  },
  methods: {
    increment(id){
      this.items +=1
    },
    decrement(id){
        this.items -=1
    },
    calcForItems(){

    }
  },
  mounted() {
    this.cart.map(id =>{
      fetch("https://fakestoreapi.com/products/"+id)
      .then(res => res.json())
      .then(data => {
        this.productsInCart.push(data)
      })

    })

  }
}
</script>
<style lang="scss">
    .left-50{
        left: 0;
        right: 0;
        top:100px;
        z-index: 100;
        overflow-y: scroll;

      @media screen and (max-width: 480px) {
        top: 50px;
      }
    }
    .height{
        max-height: 500px;
        min-height: 500px;
    }
    .cart_container{
      top: 0;
      right: 0;
      bottom: 0;
      background: #ffffff90;
      z-index: 100;
      width: 100%;
      height: 100vh;
    }
    .product_cart{
      height: 150px;

    }
    .w-50px{
      width: 60px;
    }
</style>