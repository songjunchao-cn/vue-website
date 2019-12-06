<template>

  <div class="supBox">
    <div class="addSupNum">
      <h1>THANK U!</h1>
      <div :class="{'numSpan bright':bright,'numSpan':bright}">
        {{num}}
      </div>
    </div>
    <div ref="imgs">
      <img v-for="item in parrotUrl" :key="item" :src="item" />
    </div>
  </div>
</template>

<script>
// 图片数目
var PARROTS = 18
// 半径
var R = 180
var OFFSET = 20
export default {
  name: 'supMe',
  data () {
    return {
      bright: 'bright',
      num: 1,
      // gif序列18内取整数,用于堆放文件路径信息
      parrotsSrcs: [],
      // 存放位置信息
      parrots: [],
      imgLoad: 0
    }
  },
  created () {

  },
  mounted () {
    // 初始化路径取18以内整数
    this.initSrcs()
    this.makeCircle()
  },
  methods: {
    initSrcs () {
      for (let i = 0; i - PARROTS; i++) {
        this.parrotsSrcs.push(this.parrotUrl[~~(Math.random() * 18)]) // gif图序列,取18内的整数
      }
    },
    makeCircle () {
      let dom = this.$refs.imgs
      for (let index = 0; index < dom.children.length; index++) {
        // 弧度
        let rad = 20 * index * (Math.PI / 180)
        dom.children[index].style.transform = 'translate(' +
        (this.mouse.x - OFFSET + Math.sin(rad) * R) + 'px,' +
        (this.mouse.y - OFFSET + Math.cos(rad) * R) + 'px)'
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
  },
  watch: {
  }
}
</script>

<style lang='scss' scoped>
@import './sup.scss'
</style>
