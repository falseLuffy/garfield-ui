<template>
  <AdaptBox>
    hello world
    <div v-move></div>
  </AdaptBox>
</template>

<script>
// const component = require('../dist/build.js')
import component from "../src/index.js";
console.log(component)
let {AdaptBox,move} = component;
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    AdaptBox:component.AdaptBox
  },
  directives:{
    move
  }
};
</script>

<style>
</style>
