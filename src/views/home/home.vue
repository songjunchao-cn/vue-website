<template>
<div>
  <main class="home">
    <div class="app-center">
      <Word/>
      <MyIcon/>
      <Footer/>
    </div>
  </main>
  <ShowMe/>
</div>
</template>

<script>
// @ is an alias to /src
import Word from './components/word/Word'
import Footer from './components/footer/Footer'
import MyIcon from './components/icons/Icons'
import ShowMe from './components/showMe/ShowMe'
export default {
  name: 'home',
  components: {
    Word,
    MyIcon,
    ShowMe,
    Footer
  }
}
</script>

<style lang="scss" scoped>
</style>
