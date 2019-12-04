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
          <span :class="timeCss">{{item.created_at }}</span>
          <!-- <Labels labels={articleData.labels}/> -->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'my-menu',
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
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
