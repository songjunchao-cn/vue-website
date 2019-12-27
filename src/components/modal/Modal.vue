<template>
  <fade-transition>
    <div v-if="visible" :class="['figure-pop-'+config.type,'figure-style-'+config.style]">
      <p class="close">
        <a @click="close"></a>
        {{config.title}}
      </p>
      <!-- 匿名插槽，插入content -->
      <slot></slot>
    </div>
  </fade-transition>
</template>

<script>
import fadeTransition from '../transition/fadeTransition'
export default {
  name: 'modal',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    config: {
      type: Object,
      default () {
        return {
          title: '',
          style: 'main',
          type: 'center'
        }
      }
    }
  },
  components: {
    fadeTransition
  },
  mounted () {
    console.log(this.config, 'config')
  },
  data () {
    return {
      visible: this.value
    }
  },
  watch: {
    value (val) {
      this.visible = val
    }
  },
  methods: {
    close () {
      this.visible = false
      this.$emit('input', false)
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
