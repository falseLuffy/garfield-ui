import confirm from './confirm.vue'

const install = (Vue, opt = {}) => {
  if (install.installed) return
  const ConfirmConstructor = Vue.extend(confirm)
  let nodeId = 1
  const Confirm = (content, title, config) => {
    let id = 'confirm' + nodeId++
    let icon, type, confirmButtonText, cancelButtonText
    if (typeof content === 'object' && !config) {
      title = content.title
      content = content.content
      icon = content.icon
      type = content.type
      confirmButtonText = content.confirmButtonText
      cancelButtonText = content.cancelButtonText
    } else if (config) {
      icon = config.icon
      type = config.type
      confirmButtonText = config.confirmButtonText
      cancelButtonText = config.cancelButtonText
    }

    let data = {
      content,
      title,
      type,
      icon,
      confirmButtonText,
      cancelButtonText
    }

    for (let key in data) {
      if (data[key] === undefined) {
        delete data[key]
      }
    }
    return new Promise((resolve, reject) => {
      const ConfirmInstance = new ConfirmConstructor({
        data: Object.assign(data, {
          resolve, reject
        })
      })
      ConfirmInstance.id = id
      ConfirmInstance.vm = ConfirmInstance.$mount()
      ConfirmInstance.dom = ConfirmInstance.vm.$el
      document.body.appendChild(ConfirmInstance.dom) // 将dom插入body
    })
  }

  Vue.prototype.$confirm = Confirm
}

export default {
  install
}
