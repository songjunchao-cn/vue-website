<template>
  <div :class="`animate-${$attrs.status}`">
    <span
    v-for="(item,index) in dom"
    :key="index"
    :class="item.active?`active-${$attrs.status}`:''">
    </span>
  </div>
</template>

<script>
export default {
  name: 'router-switch',
  mounted () {
    this.initAll()
    // this.componentDidMount()
  },
  data () {
    return {
      dom: []
    }
  },
  methods: {
    initAll () {
      this.initDom()
      this.componentDidMount()
    },
    initDom () {
      let domList = []
      for (let index = 0; index < 16; index++) {
        domList.push({ active: false })
      }
      this.dom = domList
    //   16个矩形
    },
    // mounted
    componentDidMount () {
      // 生成1~16随机数组
      let order = this.shuffle(16)
      let i = -1
      let aniTimeout = () => {
        i++
        if (i >= order.length) return
        this.dom[order[i]].active = true
      }
      this.setAnimate = setInterval(aniTimeout, 17)
      this.setCallback = setTimeout(() => {
        this.$emit('callback', false)
      }, 1000)
    },
    // 随机取方块
    shuffle (n) {
      // 生成m个方块
      let arr = new Array(n)
      for (let i = 0; i < n; i++) {
        arr[i] = i
      }
      // 每次抽出一个方块，放在另一堆。因为要在数组里抽出元素，把后面的所有元素向前拉一位，所以很耗时。
      let newArr = []
      for (let i = n; i > 0; i--) {
        var length = Math.floor(Math.random() * i)
        newArr.push(arr[length])
        arr.splice(length, 1)
      }
      return newArr
    }
  },
  beforeDestroy () {
    clearInterval(this.setAnimate)
    // clearTimeout(this.setCallback)
  }
}
</script>

<style lang='scss' scoped>

</style>
