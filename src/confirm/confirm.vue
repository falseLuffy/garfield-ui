<style lang="scss">
  .confirm .el-dialog__header {
    display: none
  }
</style>

<style lang="scss" scoped>
  @import '@/common/style/variable.scss';

  .confirm .wrap {
    padding: 0 10px;
    line-height: 22px;
    .title {
      font-size: 0;
      vertical-align: top;
      .svgIcon {
        margin-right: 10px;
        vertical-align: middle;
        font-size: 20px;
        &.danger {
          color: $--color-danger
        }
        &.warning {
          color: $--color-warning
        }
        &.success {
          color: $--color-success
        }
        &.info {
          color: $--color-info
        }
      }
      .word {
        vertical-align: middle;
        font-size: 16px;
        color: $font-primary
      }
    }
    .content {
      margin-top: 9px;
      margin-left: 30px;
      margin-bottom: 20px;
      font-size: 14px;
      color: $font-secondary;
    }
    .footer {
      text-align: right;
    }
  }

</style>

<template>
  <el-dialog :visible.sync="visible"
             :show-close="false"
             width="360px"
             @close="close"
             class="confirm">
    <div class="wrap">
      <div class="title">
        <!--<i :class="`iconfont ${icon} ${type}`"></i>-->
        <SymbolIcon class="svgIcon" :name="icon"></SymbolIcon>
        <span class="word">{{title}}</span>
      </div>
      <p class="content">{{content}}</p>
      <div class="footer">
        <el-button type="primary" @click="submit" v-if="confirmButtonText">{{confirmButtonText}}</el-button>
        <el-button @click="cancel" v-if="cancelButtonText">{{cancelButtonText}}</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import SymbolIcon from '../symbolIcon'
export default {
  name: 'confirm',
  data () {
    return {
      visible: false,
      icon: 'cuowu',
      type: 'danger',
      title: '提示',
      content: '',
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      v: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.visible = true
    }, 100)
  },
  methods: {
    submit () {
      this.resolve()
      this.close()
    },
    cancel () {
      this.reject()
      this.close()
    },
    close () {
      this.visible = false
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el) // 从DOM里将这个组件移除
    }
  },
  components: {
    SymbolIcon
  }
}
</script>
