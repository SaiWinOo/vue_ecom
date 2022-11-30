<template>
    <div class="position-fixed cart_btn">
        <button @click="showCart" type="button" class="btn btn-primary position-relative">
          Cart
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {{ cart.length }}
          </span>
        </button>
    </div>
  <cart v-if="cartToggle" />
    <div class="container mx-auto mt-5">
        <div class="row">
            <div v-for="p in data" class="col-12 col-lg-3 mb-4 ">
                <div class="card_style">
                    <img :src=" p.image" class="card_image" alt="">
                    <div class="card-body">
                        {{ ((p.title).split(" ")).slice(0,3).join(" ") }}
                        <hr>
                      $ {{ p.price }}
                    </div>
                    <div class="d-flex justify-content-between">
                        <router-link :to="{name:'detail',params: {id:p.id}}" class="btn btn-sm btn-outline-info">More
                          detail</router-link>
                        <button @click="addToCart(p)" class="btn btn-sm btn-outline-warning">{{ cart.includes(p.id) ? " Added" : "Add to cart" }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Cart from '@/components/Cart.vue';
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
    name:'Home',
    components: { Cart },
  computed: {
    ...mapState(['cart','cartToggle']),
    ...mapMutations(['showCart']),
    ...mapGetters(['addToCart'])
  },
    data(){
        return{
            data:[],
            isAdded: false,
        }
    },
    methods:{
    },
    mounted(){
      if(localStorage.getItem('cart')){
        this.cart = JSON.parse(localStorage.getItem('cart'));
        console.log('ok')
      }

        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => this.data = data)
        .catch(e => console.log(e.message))
    }
}
</script>=
<style >
   
    .card_style:hover{
        transform: scale(1.1);
        box-shadow: 1px 15px 19px -11px rgba(0,0,0,0.75);
    }
    .card_image{
        width: 50%;
        height: 190px;
    }
    .card_style{
        transition: 0.3s;
        border-radius: 10px;
        min-height: 250px;
        padding: 10px 20px;
        box-shadow: 1px 3px 16px -6px rgba(0,0,0,0.75);
    }
    .cart_btn{
        bottom: 50px;
        right: 50px;
        z-index: 10;
    }
</style>