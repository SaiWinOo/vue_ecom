<template>
  <Navbar/>
  <router-view/>
</template>

<script>
import * as bootstrap from 'bootstrap';
import Navbar from "@/components/Navbar";
import {mapGetters, mapMutations} from "vuex";
export default {
  components: {Navbar},
  computed:{
    ...mapMutations(['updateCartFromLocalStorage']),
  },
  mounted() {
    this.updateCartFromLocalStorage;
  }
}
</script>

<style lang="scss">
@import "app";
</style>