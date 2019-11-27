<template>
  <div class="supBox">
    <div class="addSupNum">
      <h1>THANK U!</h1>
      <div :class="bright?'numSpan'+bright: 'numSpan'">
        {{num}}
      </div>
    </div>
    <div ref="imgs">
      <img v-for="item in parrotUrl" :key="item" :src="item" />
    </div>
  </div>
</template>

<script>
var PARROTS = 215 // 半径
// var DIAMETER = 30// 放大倍率
// var ROTATION = 0.1
// var SPEED = 0.3
// var SPACING = 4
var OFFSET = 20
// var SIZE = 30
// let parrotsSrcs = []
export default {
  name: 'supMe',
  data () {
    return {
      bright: false,
      num: 1,
      // gif序列18内取整数,用于堆放文件路径信息
      parrotsSrcs: [],
      // 存放位置信息
      parrots: [],
      imgLoad: 0,
      current: OFFSET
    }
  },
  created () {

  },
  mounted () {
    // 初始化路径取18以内整数
    this.initSrcs()
    // 初始化位置
    this.initPosition()
  },
  methods: {
    initSrcs () {
      for (let i = 0; i - PARROTS; i++) {
        this.parrotsSrcs.push(this.parrotUrl[~~(Math.random() * 18)]) // gif图序列,取18内的整数
      }
    },
    initPosition () {
      for (var i = 0; i < PARROTS; i++) {
        this.parrots[i] = { x: 0, y: 0, X: 0, Y: 0 }
      }
      this.makeCircle()
    },
    makeCircle () {
      console.log(this.parrotUrl)
      let dom = this.$refs.imgs
      for (let index = 0; index < dom.children.length; index++) {
        // 弧度
        let rad = 20 * index * (Math.PI / 180)
        dom.children[index].style.transform = 'translate(' +
        (this.mouse.x + Math.sin(rad) * PARROTS) + 'px,' +
        (this.mouse.y + Math.cos(rad) * PARROTS) + 'px)'
      }
    }
  },
  computed: {
    parrotUrl () {
      return this.$imgUrls.parrotUrl
    },
    windowSize () {
      return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
      }
    },
    mouse () {
      return {
        x: this.windowSize.w / 2,
        y: this.windowSize.h / 2
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import './sup.scss'
</style>
