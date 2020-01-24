<template>
   <div class='comment-item'>
     <!-- 在js和template中引入图片资源需要使用require -->
      <span class='comment-item-img' :style="'backgroundImage:url(' + require('@/assets/images/user.jpg') + ')'" />
      <div class='comment-item-box'>
        <div class='comment-item-context'>
          <h3>{{$attrs.cmtItem.user}}<span>{{$dateFormat($attrs.cmtItem.time,'yyyy-MM-dd hh:mm')}}</span></h3>
          <article>{{$attrs.cmtItem.content}}</article>
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
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
@import "../commentsList/commentsList.scss";
</style>
