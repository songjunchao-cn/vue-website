<template>
  <div class="figureBox">
    <div class="figure-flex" v-for="item in $attrs.figures" :key="item.src">
      <figure @click="showItem(item)">
        <img :src="item.src" alt />
        <figcaption>{{item.text}}</figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    showItem (item) {
      // 向上传递label值
      this.$emit('clickIcon', item.label)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./icon.scss";
</style>
