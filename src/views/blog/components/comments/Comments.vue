<template>
  <div>
    <section class="reaction-box">
      <div :class="upClass" @click="upActiveItem">
        <i></i>
        <span>{{$attrs.currentArticle.upNum.length}}</span>
      </div>
      <div :class="likeClass" @click="likeActiveItem">
        <i></i>
        <span>{{$attrs.currentArticle.likeNum.length}}</span>
      </div>
    </section>
    <section class="comment-form">
      <CommentInput ref="commentInput" />
      <button
        :class="submitClass"
        @click="postComment"
      >Comment</button>
    </section>
    <section class="comment-view">
      <CommentsList v-for="item in cmtList" :key="item._id" :cmtItem="item" />
      <div v-if="cmtList.length===0" style="textAlign: 'center', color: '#ccc'">这里空空如也～</div>
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
      cmtLoading: false,
      cmtList: []
    }
  },
  mounted () {
    this.getCmtList()
    this.$store.commit('initUser')
  },
  computed: {
    userObj () {
      return this.$store.state.userObj
    },
    likeClass () {
      if (this.isIncludes('likeNum')) { return 'reaction-like reaction-like-active' } else {
        return 'reaction-like'
      }
    },
    upClass () {
      if (this.isIncludes('upNum')) { return 'reaction-up reaction-up-active' } else {
        return 'reaction-up'
      }
    },
    submitClass () {
      if (this.cmtLoading) { return 'comment-form-submit comment-form-loading' } else {
        return 'comment-form-submit'
      }
    }
  },
  methods: {
    async getCmtList () {
      let param = { blogId: this.$attrs.currentArticle._id }
      let { data } = await this.$api.getCmtListApi(param)
      this.cmtList = data.data
    },
    upActiveItem () {
      this.isLogin()
      if (this.userObj.email) {
        this.upNum()
      }
    },
    likeActiveItem () {
      this.isLogin()
      if (this.userObj.email) {
        this.likeNum()
      }
    },
    async upNum () {
      let itemArr = this.$attrs.currentArticle.upNum
      if (this.isIncludes('upNum')) itemArr.splice(itemArr.indexOf(this.userObj.email), 1)
      else itemArr.push(this.userObj.email)
      let params = {
        upNum: itemArr,
        id: this.$attrs.currentArticle._id
      }
      await this.$api.upNumApi(params)
    },
    async likeNum () {
      let itemArr = this.$attrs.currentArticle.likeNum
      if (this.isIncludes('likeNum')) itemArr.splice(itemArr.indexOf(this.userObj.email), 1)
      else itemArr.push(this.userObj.email)
      let params = {
        likeNum: itemArr,
        id: this.$attrs.currentArticle._id
      }
      await this.$api.likeNumApi(params)
    },
    isIncludes (type) {
      let itemArr = this.$attrs.currentArticle[type]
      if (itemArr.includes(this.userObj.email)) {
        return true
      } else {
        return false
      }
    },
    isLogin () {
      if (!this.userObj.email) {
        // 向article传递
        this.$emit('changeVisible')
      }
    },
    async postComment () {
      this.isLogin()
      let content = this.$refs.commentInput.commentTextValue
      if (this.userObj.email && !this.cmtLoading && content) {
        let param = {
          email: this.userObj.email,
          content,
          time: Date.now(),
          blogId: this.$attrs.currentArticle._id
        }
        this.cmtLoading = true
        let res = await this.$api.postCommentApi(param)
        console.log(res)
        if (res.data.status === 1) {
          this.$refs.commentInput.commentTextValue = ''
          this.cmtLoading = false
          this.getCmtList()
        }
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import "@/views/blog/components/comments/comment.scss";
</style>
