<template>
    <div class="app-center">
        eeee
      </div>
</template>

<script>
export default {
  name: 'blog',
  data () {
    return {

    }
  },
  mounted () {
    this.getArticleList()
  },
  methods: {
    async getArticleList () {
      try {
        const data = await this.$api.crosArticleApi()
        console.log(data, 'data')
      } catch (err) {
        console.log(err, 'err')
      }
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
