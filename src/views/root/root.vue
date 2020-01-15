<template>
  <div id="root" class="root">
    <Header/>
    <router-view></router-view>
    <router-switch @callback='clearAnimate' status='leave' v-if="isRouter"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header/Header'
import routerSwitch from '@/components/switch/routerSwitch'

export default {
  name: 'root',
  components: {
    Header,
    routerSwitch
  },
  data () {
    return {
      status: 'leave',
      isRouter: false
    }
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    // this.status = 'leave'
    console.log(1)
    this.isRouter = true
    next()
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    next()
  },
  methods: {
    clearAnimate (n) {
      this.isRouter = n
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
