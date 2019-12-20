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
    </section>
  </div>
</template>

<script>
import CommentInput from '../input/Input'
import CommentsList from '../commentsList/commentsList'
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
  },
  methods: {
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
