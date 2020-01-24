<template>
  <div class="msgCenter">
    <div @scroll="onScroll" class="figure-pop-main">
      <div class="loading-spinner" v-if="onReset"></div>
      <!-- msg列表 -->
      <ul v-else ref="msgUl" class="msgBox">
        <main-msg v-for="item in msgData" :key="item.id" :msgItem="item"></main-msg>
      </ul>
      <div style="textAlign:center;transform:translateY(-50px)">{{moreText}}</div>
    </div>
    <span v-if="!userObj.email" @click="toggleShow" class="putButton">留言</span>
    <div class="msgInput" v-else>
      <!-- onMouseDown={e => e.stopPropagation()} className={Css.msgInput} -->
      <input v-model="message" ref="msgInput" placeholder="净化荧屏，世界和平" type="text" />
      <span class="msgButton" @click="saveMsg">留言</span>
    </div>
    <vue-modal :config='sginInConfig' v-model="sginInVisable">
      <sgin-in></sgin-in>
    </vue-modal>
  </div>
</template>

<script>
import mainMsg from './mainMsg'
import sginIn from '@/components/sginIn/sginIn'
import checkText from '@/utils/checkText'
export default {
  name: 'msg',
  components: {
    mainMsg,
    sginIn
  },
  data () {
    return {
      onReset: false,
      onLoad: false,
      loadAll: false,
      moreText: '',
      msgData: [],
      message: '',
      sginInConfig: {
        title: '登录',
        style: 'white',
        type: 'center'
      },
      sginInVisable: false,
      checkText
    }
  },
  mounted () {
    this.reload()
    this.getMsgList()
  },
  computed: {
    userObj () {
      return this.$store.state.userObj
    }
  },
  watch: {
    'userObj.email': {
      handler: function (val) {
        if (val) this.sginInVisable = false
      }
    }
  },
  methods: {
    toggleShow () {
      this.sginInVisable = true
    },
    async getMsgList () {
      let { data } = await this.$api.getMsgListApi({ msgId: '1' })
      if (data.status === 1) {
        this.msgData = data.data
        this.onReset = false
      }
    },
    onScroll (e) {
      if (this.onLoad || this.loadAll || this.onReset) return
      if (this.$refs.msgUl.offsetHeight - e.target.scrollTop - e.target.offsetHeight < 10) {
        this.moreText = '正在加载中...'
        let loadId = this.msgData[this.msgData.length - 1]._id
        this.onLoad = true
        this.$api.getMsgListApi({
          msgId: loadId
        }).then((response) => {
          if (response.data.status === 1) {
            this.loadTimeout = setTimeout(() => {
              if (response.data.data.length === 0) {
                this.moreText = '并不是深不可测的'
                this.loadAll = true
              } else {
                this.msgData = [...this.msgData, ...response.data.data]
                this.moreText = ''
              }
              this.onLoad = false
            }, 400)
          } else {
            alert('未知错误，请重试')
            this.onLoad = false
          }
        }).catch(function (err) {
          this.onLoad = false
          console.log(err)
        })
      }
    },
    reload () {
      this.onReset = true
      this.$store.commit('initUser')
    },
    async saveMsg () {
      this.loadAll = false
      let message = this.CheckTexts(this.message)
      if (message.replace(/\s+/g, '') === '') return // 如果输入的全是空格，则不提交
      let params = {
        email: this.userObj.email,
        message
      }
      try {
        let response = await this.$api.saveMsgApi(params)
        if (response.data.status === 1) {
          this.reload()
          this.message = ''
          this.restTimeout = setTimeout(() => {
            this.getMsgList()
          }, 800)
        } else {
          console.log(response)
        }
      } catch (err) {
        console.log(err)
      }
    },
    CheckTexts (str) {
      let _str = str.toString().replace(/<|>/g, ' ')
      let reg = ''
      this.checkText.map(i => {
        reg = new RegExp(i, 'g')
        _str = _str.replace(reg, '河蟹')
      })
      return _str
    }
  },
  beforeDestroy () {
    clearTimeout(this.restTimeout)
    clearTimeout(this.loadTimeout)
  }
}
</script>

<style lang='scss'>
@import "./msg.scss";
</style>
