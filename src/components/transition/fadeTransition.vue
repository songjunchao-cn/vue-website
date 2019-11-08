<template>
  <div>
    <transition :name="animationName">
      <slot></slot>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'fadeTransition',
  props: {
    animationName: {
      type: String,
      default: 'fade'
    }
  },
  data () {
    return {
    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
 .fade-enter, .fade-leave-to {
   opacity: 0
 }
  .fade-enter-active, .fade-leave-active{
    transition: opacity 1s;
    transition-delay: 0.1s;
  }
</style>
