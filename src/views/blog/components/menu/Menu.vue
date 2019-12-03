<template>
   <div :class='contentCss'>
        <ul :class='listCss'>
              <li
                :class = "article.number == currentArticle.number ? indexCss : waitCss"
                :key = 'article.number'
                @click='changeArticle(article)'
              >
                <h3 :class ='titleCss'>{{article.title}}</h3>
                <div>
                  <span :class = 'timeCss'>{ moment(article.created_at).format('YYYY-MM-DD hh:mm') }</span>
                  <Labels labels={article.labels}/>
                </div>
              </li>
        </ul>
      </div>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped>

</style>
