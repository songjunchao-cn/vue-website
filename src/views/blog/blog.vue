<template>
  <div class="app-center blog">
    <div class="blog-main">
      <div class="blog-menu">
        <vue-modal class="blog-menu-box" v-model="menuVisible" :config="menuConfig">
          <Menu :articleData="articleData" />
        </vue-modal>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './components/menu/Menu'
export default {
  name: 'blog',
  components: {
    Menu
  },
  data () {
    return {
      articleData: [],
      // menuVisible: true,
      menuConfig: {
        title: '说明',
        style: 'white',
        type: 'about'
      }
    }
  },
  created () {
    this.getArticleList()
  },
  mounted () {
  },
  methods: {
    async getArticleList () {
      try {
        const { data } = await this.$api.crosArticleApi()
        this.articleData = data
      } catch (err) {
        console.log(err, 'err')
      }
    }
  },
  computed: {
    menuVisible () {
      return this.articleData.length > 0
    }
  }
}
</script>

<style lang="scss">
@import "@/views/blog/blog.scss";
</style>
