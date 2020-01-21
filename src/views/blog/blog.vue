<template>
  <div class="app-center blog">
    <div class="blog-main">
        <vue-modal class="blog-menu-box" v-model="menuVisible" :config="menuConfig">
          <Menu @getCurrentArticle='getCurrentArticle' :articleData="articleData" />
        </vue-modal>
        <vue-modal class="blog-article-box" v-model="articleVisible" :config="articleConfig">
          <Article :currentArticle="currentArticle" />
        </vue-modal>
    </div>
      <router-switch status="enter" @callback="switchOut" v-if="switchIn"></router-switch>
  </div>
</template>

<script>
import Menu from './components/menu/Menu'
import Article from './components/article/Article'
import routerSwitch from '@/components/switch/routerSwitch'
export default {
  name: 'blog',
  components: {
    Menu,
    Article,
    routerSwitch
  },
  data () {
    return {
      articleData: [],
      currentArticle: {},
      menuConfig: {
        title: 'Blogs',
        style: 'white',
        type: 'about'
      },
      articleConfig: {
        title: 'Blogs',
        style: 'white',
        type: 'about'
      },
      switchIn: false
    }
  },
  created () {
    setTimeout(() => {
      this.switchIn = true
    }, 820)
    this.getArticleList()
  },
  mounted () {
  },
  methods: {
    async getArticleList () {
      try {
        let { data } = await this.$api.getBlogListApi()
        this.articleData = data.data
        this.currentArticle = data.data[0]
      } catch (err) {
        console.log(err, 'err')
      }
    },
    getCurrentArticle (currentArticle) {
      this.currentArticle = currentArticle
    },
    switchOut (n) {
      this.switchIn = n
    }
  },
  computed: {
    menuVisible () {
      return this.articleData.length > 0
    },
    articleVisible () {
      return Object.values(this.currentArticle).length > 0
    }
  }
}
</script>

<style lang="scss">
@import "@/views/blog/blog.scss";
</style>
