<template>
    <main class="home">
      <div class="app-center">
        <Word />
        <MyIcon @clickIcon='clickIcon'/>
        <Footer />
        <ReadMe v-model="readMeVisible"/>
      </div>
    </main>
</template>

<script>
// @ is an alias to /src
import Word from './components/word/Word'
import Footer from './components/footer/Footer'
import MyIcon from './components/icons/Icons'
import ReadMe from './components/readMe/readMe'
export default {
  name: 'home',
  components: {
    Word,
    MyIcon,
    ReadMe,
    Footer
  },
  data () {
    return {
      readMeVisible: false
    }
  },
  methods: {
    clickIcon (item) {
      // icon触发方法
      this[item + 'Visible'] = true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
