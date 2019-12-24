<template>
  <div>
    <section class="reaction-box">
      <div class="reaction-up" @click="upActiveItem">
        <i></i>
        <span>{UpItems.length}</span>
      </div>
      <div class="reaction-like" @click="likeActiveItem">
        <i></i>
        <span>{reactionsLikeItems.length}</span>
      </div>
    </section>
    <section class="comment-form">
      <CommentInput />
      <button class="comment-form-submit" @click="postComment">Comment</button>
    </section>
    <section class="comment-view">
      <CommentsList v-bind="$attrs"/>
      <div style="textAlign: 'center', color: '#ccc'">这里空空如也～</div>
    </section>
  </div>
</template>

<script>
import CommentInput from '../input/Input'
import CommentsList from '../commentsList/commentsList'
import { CancelToken } from 'axios'
export default {
  name: 'comments',
  inheritAttrs: false,
  components: {
    CommentInput,
    CommentsList
  },
  data () {
    return {
    }
  },
  mounted () {
    this.getArticleComments(this.$attrs)
  },
  methods: {
    async getArticleComments (dataInfo) {
      this.getCommentsCancel()
      const { data = [] } = await this.axios({
        url: `${dataInfo.url}/comments?time=${Date.now()}`,
        cancelToken: new CancelToken((c) => {
          this.getCommentsCancel = c
        }),
        headers: {
          'Accept': 'application/vnd.github.squirrel-girl-preview+json'
        }
      })
      this.comments = data.reverse()
    },
    upActiveItem () {

    },
    likeActiveItem () {

    },
    postComment () {

    }
  }
}
</script>

<style lang='scss' scoped>
@import "@/views/blog/components/comments/comment.scss";
</style>
