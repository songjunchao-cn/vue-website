import ModalComponents from './Modal'

const modal = {
  install: function (Vue) {
    Vue.component('vue-modal', ModalComponents)
  }
}

export default modal
