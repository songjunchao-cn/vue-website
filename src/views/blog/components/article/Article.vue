<template>
   <div ref="article" class = 'article'>
        <div class = 'article-center'>
          <h1> {{currentArticle.title}} </h1>
          <a target="_blank" :href='currentArticle.html_url'>[原文链接]</a>
          <span class = 'blog-menu-time'>{{currentArticle.created_at}}</span>
          <Labels :labels='currentArticle.labels'/>
          <div class='view' v-html='currentArticle.body' />
          <Comments :currentArticle= 'currentArticle'/>
        </div>
      </div>
</template>

<script>
import Labels from '../labels/Labels'
import Comments from '../comments/Comments'
export default {
  name: 'my-article',
  components: {
    Labels,
    Comments
  },
  props: {
    currentArticle: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {

    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped>

</style>
