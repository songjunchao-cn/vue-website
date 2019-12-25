<template>
  <div class="codeBox">
    <span>{{$attrs.title}}</span>
    <div class="figureBox">
      <div class="figure-flex" v-for="item in $attrs.figures" :key="item.src">
        <figure @click="showItem(item)">
          <img :src="item.src" alt />
          <figcaption>{{item.text}}</figcaption>
        </figure>
      </div>
    </div>
    <hr align="center" width="100%" color="#1e1e1e" size="1" />
  </div>
</template>

<script>

export default {
  name: 'listComponent',
  data () {
    return {

    }
  },
  mounted () {
    console.log(this.$attrs, 'attrs')
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
@import './listComponent.scss'
</style>
