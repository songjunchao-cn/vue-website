<template>
  <li class="showMsg">
    <article class="msgTitle">
      <strong>{{$attrs.msgItem.name}}</strong>
      <span>{{timeData}}</span>
      <span class="msgLight">
        <!-- icon -->
        <a @click="upSup"></a>
       {{supData}}
      </span>
    </article>
    <section class="message">{{$attrs.msgItem.msg}}</section>
    <span class="bubble"></span>
    <!-- {this.state.bubbles.map(bubble => <Bubble key={bubble.time} pro={bubble} out={this.outBubble.bind(this)}/>)} -->
  </li>
</template>

<script>

export default {
  name: 'mainMsg',
  data () {
    return {
      timeData: new Date().getTime,
      supData: this.$attrs.msgItem.sup
    }
  },
  created () {
    const time = new Date(this.$attrs.msgItem.time)
    const now = new Date().getTime() - time.getTime()
    this.timeData = now > 24 * 60 * 60 * 1000 // 如果是一天之前的，则显示日期，否则显示几分钟之前
      ? time.getFullYear() + '-' + (+time.getMonth() + 1) + '-' + time.getDate()
      : ((now > 60 * 60 * 1000) ? ~~(now / 3600000) + '小时前' : ~~(now / 60000) + '分钟前')
  },
  mounted () {
    console.log(this.$attrs, 'attrs')
  },
  methods: {
    async upSup () {
      console.log(this.$attrs.msgItem, 'dd')
      let { data } = this.$api.upSupApi({ msgId: this.$attrs.msgItem._id, upNum: '1' })
      console.log(data)
      // this.supData = data.data
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
