<template>
  <div class="msgCenter">
    <div @scroll="onScroll" class="figure-pop-main">
      <div class="loading-spinner" v-if="!onReset"></div>
      <ul v-else ref="msgUl" class="msgBox">
        <main-msg v-for="item in msgData" :key="item.id" :msgItem='item'></main-msg>
        <!-- {this.state.msgs.map(msg => <Msg key={msg._id} {...msg}/>)} -->
      </ul>
      <div style="textAlign:center;transform:translateY(-50px)">{this.state.moreText}</div>
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
      msgData: [{ id: '5e09cc1d85ada5668b0c8291', msg: '湖人总冠军', name: 'lala', sup: 20 }]
    }
  },
  methods: {
    onReset () {

    },
    toggleShow () {

    },
    onScroll (e) {
      console.log(e, 'e')
    }
  }
}
</script>

<style lang='scss' scoped>
@import './msg.scss'
</style>
