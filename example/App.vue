<template>
  <AdaptBox>
    <div class="parent" style="background:red;width:400px;height:600px;border:1px solid #999;border-radius: 6px;float:left;">
      <div v-move.parent style="cursor: move">fasfasfa</div>
    </div>
    <div class="parent" style="background:red;width:400px;height:600px;border:1px solid #999;border-radius: 6px;float:left">
      <div v-move.parent style="cursor: move">fasfasfa</div>
    </div>
  </AdaptBox>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted(){
    console.log(this.$refs.parent)
  }
};
</script>

<style>
  body{
    margin:0;
    body:0;
  }
</style>
