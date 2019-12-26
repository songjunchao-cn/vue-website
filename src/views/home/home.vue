<template>
  <main class="home">
    <div class="app-center">
      <Word />
      <MyIcon :figures='figures' @clickIcon="clickIcon" />
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
import MyIcon from '@/components/icons/Icons'
import ReadMe from './components/readMe/readMe'
import Sup from './components/sup/Sup'
import { homeIcon } from '@/components/imgurls'
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
      },
      figures: [
        {
          src: homeIcon.sup,
          text: '点赞',
          isShow: false,
          unmove: true,
          label: 'sup'
          // child: SupPug,
          // type: 'none',
          // add: {
          //   num: 0,
          //   upSup: this.upSup.bind(this) }
        },
        {
          src: homeIcon.readme,
          text: '说明',
          label: 'readMe'
          // isShow: false,
          // child: ShowMe,
          // type: 'main'
        },
        {
          src: homeIcon.msg,
          text: '留言',
          isShow: false,
          // child: Msgs,
          type: 'wathet'
        },
        {
          src: homeIcon.setting,
          text: '设置',
          isShow: false,
          // child: Setting,
          type: 'setting'
        }
      ]
    }
  },
  methods: {
    clickIcon (item) {
      // icons触发方法
      this[item + 'Visible'] = true
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
@import './home.scss'
</style>
