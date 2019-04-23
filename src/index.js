import AdaptBox from './components/adapt-box.vue';
import move from './directive/move'

const Components = {
  AdaptBox
}

const directives = {
  move
}

const install = function (Vue, opts = {}) {
  // 如果安装过就忽略
  if (install.installed) return;

  // 指定组件 name
  for (let key in Components) {
    let component = Components[key]
    Vue.component(component.name, component);
  }

  for(let key in directives){
    let directive = directives[key];
    Vue.directive(key,directive)
  }
}

// 自动安装 方便打包成压缩文件, 用<script scr=''></script>的方式引用
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

// 把模块导出
export default {
  install,
  ...Components,
  ...directives
}