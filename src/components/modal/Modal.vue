<template>
  <fade-transition :animationName='config.animationName'>
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
          title: '默认',
          style: 'main',
          type: 'center',
          animationName: 'fade'
        }
      }
    }
  },
  components: {
    fadeTransition
  },
  mounted () {
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
