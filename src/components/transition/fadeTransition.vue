<template>
  <div class="fade">
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
 .fade {
   width: 100%;
   height: 100%;
   margin: 0 auto;
 }
 .fade-enter, .fade-leave-to {
   opacity: 0
 }
  .fade-enter-active, .fade-leave-active{
    transition: opacity 1s;
    transition-delay: 0.1s;
  }
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
