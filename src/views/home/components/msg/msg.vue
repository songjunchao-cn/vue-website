<template>
  <div class="msgCenter">
    <div @scroll="onScroll" class="figure-pop-main">
      <div class="loading-spinner" v-if="onReset"></div>
      <ul v-else ref="msgUl" class="msgBox">
        <main-msg v-for="item in msgData" :key="item.id" :msgItem='item'></main-msg>
        <!-- {this.state.msgs.map(msg => <Msg key={msg._id} {...msg}/>)} -->
      </ul>
      <div style="textAlign:center;transform:translateY(-50px)">{{moreText}}</div>
    </div>
    <span
      v-if="!user.email"
      @click="toggleShow"
      class="putButton"
    >留言</span>
    <div v-else>
      <!-- onMouseDown={e => e.stopPropagation()} className={Css.msgInput} -->
      <input ref="msgInput" placeholder="净化荧屏，世界和平" type="text" />
      <span onClick="{this.messagesUp.bind(this)}" class="{Css.msgButton}">留言</span>
    </div>
  </div>
</template>

<script>
import mainMsg from './mainMsg'
export default {
  name: 'msg',
  components: {
    mainMsg
  },
  data () {
    return {
      user: {
        eamil: 'sjc'
      },
      onReset: false,
      moreText: '继续',
      msgData: []
    }
  },
  created () {
    this.getMsgList()
  },
  methods: {
    toggleShow () {

    },
    async getMsgList () {
      let { data } = await this.$api.getMsgListApi({ msgId: '1' })
      this.msgData = data.data
    },
    onScroll (e) {
      console.log(e, 'e')
    }
  }
}
</script>

<style lang='scss'>
@import './msg.scss'
</style>
