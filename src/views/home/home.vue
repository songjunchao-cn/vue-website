<template>
  <main class="home">
    <div class="app-center">
      <!-- main -->
      <Word />
      <MyIcon :figures='figures' @clickIcon="clickIcon" />
      <Footer />
      <!-- modal -->
      <vue-modal v-model="supVisible" :config="supConfig">
        <Sup :supNum='supNum'/>
      </vue-modal>
      <vue-modal v-model="readMeVisible" :config="readMeConfig">
        <ReadMe />
      </vue-modal>
      <vue-modal v-model="msgVisible" :config="msgMeConfig">
        <Msg />
      </vue-modal>
      <router-switch status='enter' @callback='switchOut' v-if="switchIn"></router-switch>
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
import Msg from './components/msg/msg'
import routerSwitch from '@/components/switch/routerSwitch'
import { homeIcon } from '@/components/imgurls'
export default {
  name: 'home',
  components: {
    Word,
    MyIcon,
    ReadMe,
    Footer,
    Sup,
    Msg,
    routerSwitch
  },
  created () {
    setTimeout(() => {
      this.switchIn = true
    }, 820)
  },
  data () {
    return {
      switchIn: false,
      readMeVisible: false,
      supVisible: false,
      msgVisible: false,
      supNum: Number(),
      // modal配置
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
      msgMeConfig: {
        title: '留言',
        style: 'main',
        type: 'center'
      },
      // 图标配置
      figures: [
        {
          src: homeIcon.sup,
          text: '点赞',
          isShow: false,
          label: 'sup',
          data: this.supData
        },
        {
          src: homeIcon.readme,
          text: '说明',
          label: 'readMe'
        },
        {
          src: homeIcon.msg,
          text: '留言',
          isShow: false,
          type: 'wathet',
          label: 'msg'
        },
        {
          src: homeIcon.setting,
          text: '设置',
          isShow: false,
          type: 'setting',
          label: 'setting'
        }
      ]
    }
  },
  methods: {
    clickIcon (item) {
      // icons触发方法
      this[item.label + 'Visible'] = true
      if (item.label === 'sup') {
        this.giveLike()
      }
    },
    async giveLike () {
      try {
        let { data } = await this.$api.giveLikeApi()
        this.supNum = data.data
      } catch (err) {
        console.log(err, 'giveLike Error')
      }
    },
    switchOut (n) {
      this.switchIn = n
    }
  },
  watch: {
    supVisible (value) {
      // 3秒后自动关闭
      if (value) {
        setTimeout(() => {
          this.supVisible = false
        }, 2000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './home.scss'
</style>
