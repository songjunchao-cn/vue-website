<template>
  <div>
    <transition>
      <slot></slot>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'fadeTransition',
  data () {
    return {
    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
 .v-enter, .v-leave-to {
   opacity: 0
 }
  .v-enter-active, .v-leave-active{
    transition: opacity 1s
  }
</style>
