<template>
<span class="bubble"></span>
</template>

<script>
export default {
  name: 'bubble',
  data () {
    return {
      bubbles: this.$attrs.bubbles
    }
  },
  mounted () {
    this.timeOut = setTimeout(() => this.outBubble(this.$attrs.bubbleItem), 600)
  },
  methods: {
    outBubble (bub) {
      const newBubs = this.bubbles
      const index = newBubs.indexOf(bub)
      this.bubbles = newBubs.splice(index, 1)
      this.$emit('update:bubbles', this.bubbles)
    }
  },
  beforeDestroy () {
    clearTimeout(this.timeOut)
  }
}
</script>

<style lang='scss' scoped>

</style>
