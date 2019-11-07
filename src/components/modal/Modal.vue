<template>
  <div v-show="visible" :class="['figure-pop','figure-style-'+config.style]">
    <p>
      <a @click="close"></a>
      {{config.title}}
    </p>
    <div class="figure-pop-main">
        <!-- 匿名插槽，插入content -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
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
          style: 'main'
        }
      }
    }
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
