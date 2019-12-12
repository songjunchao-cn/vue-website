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
      <CommentInput/>
      <button class='comment-form-submit' @click="postComment">Comment</button>
    </section>
  </div>
</template>

<script>
import CommentInput from '../input/Input'
export default {
  name: 'comments',
  components: {
    CommentInput
  },
  data () {
    return {
    }
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
