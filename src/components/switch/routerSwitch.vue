<template>
  <div class="animate-enter">
      <span v-for="(item,index) in dom" :key="index"></span>
  </div>
</template>

<script>
export default {
  name: 'router-switch',
  created () {
    this.initDom()
  },
  mounted () {
  },
  data () {
    return {
      dom: []
    }
  },
  methods: {
    initDom () {
      let domList = []
      for (let index = 0; index < 16; index++) {
        domList.push({ active: false })
      }
      this.dom = domList
    //   16个矩形
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
