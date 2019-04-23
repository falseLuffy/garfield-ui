<style scoped lang="less">
a {
  a {
    color: #fff;
  }
}
</style>

<template>
  <div class="adapt-box" ref="adaptBox">
    <div class="adapt-box-wrap" ref="adaptBoxWrap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdaptBox",
  props: {
    gutter: {
      type: Number,
      default: 20
    },
    size: {
      type: Number,
      default: 180
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  },

  created() {},

  mounted() {
    this.justifyContent();
    this.$refs.adaptBoxWrap.style.marginLeft = -this.gutter / 2 + "px";
    this.$refs.adaptBoxWrap.style.marginRight = -this.gutter / 2 + "px";
    window.addEventListener("resize", this.justifyContent.bind(this));
    this.insetStyle();
  },

  methods: {
    insetStyle: function() {
      if (document.getElementsByClassName("adapt-box-style").length) {
        return;
      }
      var style = document.createElement("style");
      style.classList.add("adapt-box-style");
      style.innerHTML =
        '.adapt-box{margin:0 auto;} .adapt-box-wrap:after{content:"";display:block;clear:both;}';
      document.body.appendChild(style);
    },
    justifyContent: function() {
      this.justifyContentWidth();
      if (this.offset !== undefined) {
        this.justifyContentHeight();
      }
    },
    justifyContentWidth: function() {
      var parentWidth = this.$refs.adaptBox.parentElement.clientWidth;
      var unit = this.size + this.gutter;
      var count = parseInt(parentWidth / unit);
      var width = count * unit;
      this.$refs.adaptBox.style.width = width - this.gutter + "px";
      this.$refs.adaptBox.parentElement.style.overflow = "auto";
    },
    justifyContentHeight: function() {
      var height = document.documentElement.clientHeight;
      this.$refs.adaptBox.style.height =
        height - this.offset + "px";
    }
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.justifyContent);
  },

  computed: {},

  components: {}
};
</script>