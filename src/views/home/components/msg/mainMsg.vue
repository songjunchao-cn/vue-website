<template>
  <li class="showMsg">
    <article class="msgTitle">
      <strong>{{$attrs.msgItem.name}}</strong>
      <span>{{timeData}}</span>
      <span @click="upSup" class="msgLight">
        <a></a>
        {{supData}}
      </span>
    </article>
    <section class="message">{{$attrs.msgItem.msg}}</section>
    <Bubble v-for="item in bubbles" :key="item.time" :bubbleItem="item" :bubbles.sync="bubbles" />
  </li>
</template>

<script>

import Bubble from './bubble'
export default {
  name: 'mainMsg',
  components: {
    Bubble
  },
  data () {
    return {
      timeData: new Date().getTime,
      supData: this.$attrs.msgItem.sup,
      bubbles: [],
      upNum: 0
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
    upSup () {
      this.supData++
      this.upNum++
      this.bubbles.push({
        time: new Date().getTime() // 添加新的泡泡动画元素
      })
      clearTimeout(this.upSupTimeout)
      this.upSupTimeout = setTimeout(() => {
        this.upAxios()
      }, 1000)
      // 防抖，快速连续点击之后600毫秒才会提交连续点赞后的值
    },
    async upAxios () {
      let { data } = await this.$api.upSupApi({
        msgId: this.$attrs.msgItem._id,
        upNum: this.upNum
      })
      if (data.status === 1) {
        this.upNum = 0
      }
    }
  },
  beforeDestroy () {
    clearTimeout(this.upSupTimeout)
  }
}
</script>

<style lang='scss' scoped>
</style>
