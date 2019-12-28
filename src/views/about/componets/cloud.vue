<template>
  <span class="cloud" :style="style">
    <img :src="$attrs.introduceConfig.img" alt />
    <strong>{{$attrs.text}}</strong>
  </span>
</template>

<script>
export default {
  name: 'cloud',
  data () {
    return {
      style: ''
    }
  },
  computed: {
    left () {
      return 4 + this.$attrs.index * 14
    },
    top () {
      return 16 + (this.$attrs.index % 2) * 14
    }
  },
  mounted () {
    this.style = `left:${this.left}%;top:${this.top}%`
    console.log(this.$attrs, this.style)
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
</style>
