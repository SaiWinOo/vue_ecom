import { createStore } from 'vuex'

export default createStore({
  state: {
    cart:[1],
    name:"Sai WIn oo",
    cartToggle: true,
  },
  getters: {
    addToCart: (state) => (x)=>{
      if(!state.cart.includes(x)){
        state.cart.push(x);
      }
    },
  },
  mutations:{
    showCart(state){
      state.cartToggle = !state.cartToggle
    }
  }
  ,
  actions: {
  },
  modules: {
  }
})
