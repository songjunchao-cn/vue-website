<template>
  <div class="supBox">
    <div class="addSupNum">
      <h1>THANK U!</h1>
      <AddSup num="{this.props.add.num}" />
    </div>
    <div ref="imgs">
      <img v-for="item in parrotUrl" :key="item" :src="item" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'sup',
  data () {
    return {}
  },
  mounted () {
    console.log(this.parrotUrl)
  },
  methods: {},
  computed: {
    parrotUrl () {
      return this.$imgUrls.parrotUrl
    }
  }
}
</script>

<style lang='scss' scoped>
@import './sup.scss'
</style>
