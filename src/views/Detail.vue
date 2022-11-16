<template >

    <div @click="clickMe" class="container card bg-light my-5">
      <cart v-if="cartToggle" />

      <div class="position-fixed cart_btn">
        <button @click="showCart" type="button" class="btn btn-primary position-relative">
          Cart
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {{ cart.length }}
          </span>
        </button>
      </div>

      <div class="row justify-content-center align-items-center">
            <div class="col-5 text-center">
                <img :src="data.image" class="product_image" alt="">
                <h4>{{ data.title}}</h4>
            </div>
            <div class="col-5 text-center">
                <p>
                    {{ data.description }}
                </p>
                <p><strong>${{ data.price }}</strong></p>
                <div>
                  <router-link to="/" class="btn btn-warning me-2">Find More Products</router-link>
                  <button @click="addToCart(data.id)" class="btn btn-sm btn-outline-warning">{{ cart.includes(data.id)
                      ? "Added" : "Add to cart" }}</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import {mapGetters, mapMutations, mapState} from "vuex";
import Cart from "@/components/Cart";

export default {
    name: "Detail",
  components: {Cart},
  data(){
        return{
            data : [],
            id : this.$route.params.id,
        }
    },
  computed: {
      ...mapState(['cart','cartToggle']),
    ...mapGetters(['addToCart']),
    ...mapMutations(['showCart'])
  },
    methods:{
        clickMe(){
            console.log(this.data);
        }
    },
    mounted(){
        fetch('https:fakestoreapi.com/products/' + this.id)
        .then(res => res.json())
        .then(data => this.data = data)
        .catch(err => console.log(err.message))

    }   
}
</script>
<style scoped >
    .product_image{
        width: 55%;
        height: 55vh;
        padding: 20px;
    }   
    .card{
        padding: 20px;
    }
</style>