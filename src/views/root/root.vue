<template>
  <div class="root">
    <Header/>
    <router-view></router-view>
    <router-switch/>
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
  }
}
</script>

<style lang="scss" scoped>
</style>
