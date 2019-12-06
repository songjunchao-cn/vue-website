<template>
  <main class="home">
    <div class="app-center">
      <Word />
      <MyIcon @clickIcon="clickIcon" />
      <Footer />
      <vue-modal v-model="supVisible" :config="supConfig">
        <Sup />
      </vue-modal>
      <vue-modal v-model="readMeVisible" :config="readMeConfig">
        <ReadMe />
      </vue-modal>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import Word from './components/word/Word'
import Footer from './components/footer/Footer'
import MyIcon from './components/icons/Icons'
import ReadMe from './components/readMe/readMe'
import Sup from './components/sup/Sup'
export default {
  name: 'home',
  components: {
    Word,
    MyIcon,
    ReadMe,
    Footer,
    Sup
  },
  data () {
    return {
      readMeVisible: false,
      supVisible: false,
      supConfig: {
        title: '点赞',
        style: 'none',
        type: 'center'
      },
      readMeConfig: {
        title: '说明',
        style: 'main',
        type: 'center'
      }
    }
  },
  methods: {
    clickIcon (item) {
      // icons触发方法
      this[item + 'Visible'] = true
      console.log(this[item + 'Visible'], item + 'Visible')
    }
  },
  watch: {
    supVisible (value) {
      // 3秒后自动关闭
      if (value) {
        setTimeout(() => {
          this.supVisible = false
        }, 3000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
