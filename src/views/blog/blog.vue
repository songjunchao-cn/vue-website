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
        const { data } = await this.$api.getUserApi({ email: 'sjc@qq.com' })
        console.log(data)
      } catch (err) {

      }
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
