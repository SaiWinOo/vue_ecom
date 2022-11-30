import { createStore } from 'vuex'

function updateLocalStorage(cart){
  localStorage.setItem('cart', JSON.stringify(cart));
}
export default createStore({
  state: {
    cart:[],
    name:"Sai WIn oo",
    cartToggle: true,
  },
  getters: {
    cartTotal(state){
      return state.cart.reduce((a,b)=> a + (b.price * b.quantity ),0);
    },
    addToCart: (state) => (product)=>{
      const item = state.cart.find(i => i.id === product.id)
      if(item){
        item.quantity++;
      }else{
        state.cart.push({...product, quantity : 1})
      }
      updateLocalStorage(state.cart);
    },
    increaseQuantity:state => product =>{
      const item = state.cart.find(i=> i.id === product.id);
      if(item){
        item.quantity++;
      }
      updateLocalStorage(state.cart);
    },
    decreaseQuantity:state=>product=>{
      const   item = state.cart.find(i => i.id === product.id)
      if(item){
        if(item.quantity > 1){
          item.quantity--;
        }else{
          state.cart = state.cart.filter(i => i.id !== product.id);
        }
        updateLocalStorage(state.cart);
      }
    }
  },
  mutations:{
    showCart(state){
      state.cartToggle = !state.cartToggle
    },
    updateCartFromLocalStorage(state){
      const cart = localStorage.getItem('cart');
      if(cart){
        state.cart = JSON.parse(cart);
      }
    },
  }
  ,
  actions: {
  },
  modules: {
  }
})
