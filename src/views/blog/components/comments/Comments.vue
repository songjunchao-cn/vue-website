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
      <div class="reaction-up" @click="upActiveItem">
        <i></i>
        <span>{UpItems.length}</span>
      </div>
      <div class="reaction-like" @click="likeActiveItem">
        <i></i>
        <span>{reactionsLikeItems.length}</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'comments',
  data () {
    return {
    }
  },
  methods: {
    upActiveItem () {

    },
    likeActiveItem () {

    }
  }
}
</script>

<style lang='scss' scoped>
@import "@/views/blog/components/comments/comment.scss";
</style>
