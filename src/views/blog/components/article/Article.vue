<template>
   <div ref="article" class = 'article'>
        <div class = 'article-center'>
          <h1> {{currentArticle.title}} </h1>
          <a v-if="currentArticle.html_url" target="_blank" :href='currentArticle.html_url'>[原文链接]</a>
          <span class = 'blog-menu-time'>{{$dateFormat(currentArticle.created_at,'yyyy-MM-dd hh:mm')}}</span>
          <Labels :labels='currentArticle.labels'/>
          <div class='view' v-if="currentArticle.body" v-html='currentArticle.body' />
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
  methods: { }
}
</script>

<style lang='scss' scoped>

</style>
