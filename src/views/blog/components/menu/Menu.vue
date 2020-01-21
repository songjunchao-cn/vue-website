<template>
  <div :class="contentCss">
    <ul :class="listCss">
      <li
        v-for="item in articleData"
        :class="item.number === currentArticle.number? indexCss : waitCss"
        :key="item.number"
        @click="changeArticle(item)"
      >
        <h3 :class="titleCss">{{item.title}}</h3>
        <div>
          <span :class="timeCss">{{$dateFormat(item.created_at,'yyyy-MM-dd hh:mm') }}</span>
          <Labels :labels='item.labels'/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Labels from '../labels/Labels'
export default {
  name: 'my-menu',
  components: {
    Labels
  },
  props: {
    articleData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      contentCss: 'blog-menu-content',
      listCss: 'blog-menu-list',
      indexCss: 'blog-menu-index',
      waitCss: 'blog-menu-wait',
      titleCss: 'blog-menu-title',
      timeCss: 'blog-menu-time',
      currentArticle: this.articleData[0]
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    changeArticle (item) {
      this.currentArticle = item
      this.$emit('getCurrentArticle', this.currentArticle)
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
