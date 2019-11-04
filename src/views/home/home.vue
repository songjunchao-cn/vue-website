<template>
  <main class="home">
    <div class="app-center">
      <Word/>
      <MyIcon/>
      <Footer/>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import Word from './components/word/Word'
import Footer from './components/footer/Footer'
import MyIcon from './components/icons/Icons'
export default {
  name: 'home',
  components: {
    Word,
    MyIcon,
    Footer
  }
}
</script>

<style lang="scss" scoped>
</style>
