<template>
  <main class="home">
    <div class="app-center">
      <!-- main -->
      <Word />
      <MyIcon :figures="figures" @clickIcon="clickIcon" />
      <Footer />
    </div>
     <!-- modal -->
     <vue-modal v-model="supVisible" :config="supConfig">
        <Sup :supNum="supNum" />
      </vue-modal>
      <vue-modal v-model="readMeVisible" :config="readMeConfig">
        <ReadMe />
      </vue-modal>
      <vue-modal v-model="msgVisible" :config="msgMeConfig">
        <Msg />
      </vue-modal>
      <vue-modal v-model="settingVisible" :config="settingConfig">
        <Setting />
      </vue-modal>
        <router-switch status="enter" @callback="switchOut" v-if="switchIn"></router-switch>
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
import Setting from './components/setting/setting'
import routerSwitch from '@/components/switch/routerSwitch'
import { homeIcon } from '@/components/imgurls'
import { setTimeout } from 'timers'
export default {
  name: 'home',
  components: {
    Word,
    MyIcon,
    ReadMe,
    Footer,
    Sup,
    Msg,
    Setting,
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
      // 互斥的modal
      allVisible: ['readMeVisible', 'supVisible', 'msgVisible', 'settingVisible'],
      readMeVisible: false,
      supVisible: false,
      msgVisible: false,
      settingVisible: false,
      supNum: Number(),
      // modal配置
      supConfig: {
        title: '点赞',
        style: 'none',
        type: 'center',
        animationName: 'bounce'
      },
      readMeConfig: {
        title: '说明',
        style: 'main',
        type: 'center'
      },
      msgMeConfig: {
        title: '留言',
        style: 'wathet',
        type: 'center'
      },
      settingConfig: {
        title: '设置',
        style: 'wathet',
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
      this.allVisible.forEach(element => {
        if (!(item.label + 'Visible' === element)) {
          this[element] = false
        }
      })

      if (item.label === 'sup') this.giveLike()
      this.$nextTick(() => {
        this[item.label + 'Visible'] = true
      })
    },
    //  async本质为generator函数语法糖，通过yied进行协程控制
    async giveLike () {
      try {
        // 遇到await先返回，等待异步操作执行完成，然会执行后面的语句\
        // promise回调，MutationObserver，process.nextTick，Object.observe
        // XHR回调，定时器（setTimeout/setInterval/setImmediate），IO操作，UI render
        // nextTick通过promise实现延迟调用回调函数，
        // axios通过promise实现,XHR为宏任务最后执行，
        // 执行完成后axios返回promise对象
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
      // 2秒后自动关闭
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
@import "./home.scss";
</style>
