<template>
   <div class='comment-item'>
      <!-- <span class='comment-item-img' :style="'backgroundImage:'+ `url('${user.avatar_url}')`" /> -->
      <div class='comment-item-box'>
        <div class='comment-item-context'>
          <h3>user.login<span>created_at</span></h3>
          <article>body</article>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'commentsList',
  data () {
    return {
    }
  },
  mounted () {
    console.log(this.$attrs, 'bb')
  },
  methods: {}
}
</script>

<style lang='scss' scoped>

</style>
