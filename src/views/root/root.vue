<template>
  <div class="root">
    <Header/>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header/Header'

export default {
  name: 'root',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
</style>
