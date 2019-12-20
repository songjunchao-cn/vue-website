<template>
  <div class="user-input">
    <div class="user-input-label">
      <div class="user-emoji">
        <span class="user-emoji-icon" @click="showEmojiView"></span>
        <fade-transition :animationName="animationName">
          <div v-if="showEmoji" ref="emojiView" class="user-emoji-list" @click="selectEmoji($event)">
            <span v-for="(item, index) in emojiList" :key="index">{{item}}</span>
          </div>
        </fade-transition>
      </div>
      <div class="user-input-enter">
        <textarea
          ref="commentText"
          v-model="commentTextValue"
          placeholder="Leave a comment"
          :style="'height:'+currentHeight+'px;'"
          @keyup="textAutoSize"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import fadeTransition from '@/components/transition/fadeTransition'
const EMOJI_LIST = [
  '😄', '😆', '😊', '😃', '😏', '😍', '😘', '😚', '😳', '😌', '😆', '😁',
  '😉', '😜', '😝', '😀', '😗', '😙', '😛', '😴', '😟', '😦', '😧', '😮', '😬', '😕', '😯',
  '😑', '😒', '😅', '😓', '😥', '😩', '😔', '😞', '😖', '😨', '😰', '😣', '😢', '😭', '😂',
  '👍', '👍', '👎', '👎', '👌', '👊', '👊', '✊', '✌️'
]
export default {
  name: 'commentInput',
  components: {
    fadeTransition
  },
  data () {
    return {
      emojiList: EMOJI_LIST,
      currentHeight: 45,
      showEmoji: false,
      animationName: 'fade',
      commentTextValue: ''
    }
  },
  methods: {
    showEmojiView () {
      this.focusInput()
      this.showEmoji = !this.showEmoji
    },
    selectEmoji (e) {
      this.focusInput()
      if (e.target.tagName === 'SPAN') {
        let commentTextDom = this.$refs.commentText
        let start = commentTextDom.selectionStart
        let end = commentTextDom.selectionEnd
        let text = this.commentTextValue
        this.commentTextValue = text.slice(0, start) + e.target.innerText + text.slice(end)
        this.showEmoji = false
      }
    },
    focusInput () {
      this.$refs.commentText.focus()
    },
    textAutoSize () {
      let element = this.$refs.commentText
      let lineSize = this.getLineSize(element)
      let realLine = this.getRealLine(element.value, lineSize)
      let lineHeight = 22
      let domHeight = 45
      this.currentHeight = domHeight + lineHeight * (realLine - 1)
    },
    getLineSize (ele) {
      let { fontSize, paddingLeft, paddingRight } = getComputedStyle(ele)
      let width = ele.clientWidth - parseInt(paddingLeft) - parseInt(paddingRight)
      // 放数字
      return (2 * width / parseInt(fontSize))
    },
    getRealLine (str, size) {
      // 行数
      let len = 1
      // 输入字符串数
      let index = 0
      str = str.replace(/[^\x00-\xff]/g, '01')
      for (let i = 0; i < str.length; i++, index++) {
        if (size < index) {
          index = 0
          len++
        }
        if (str.charCodeAt(i) === 10) {
          index = 0
          len++
        }
      }
      return len
    }
  }
}
</script>

<style lang='scss' scoped>
@import "@/views/blog/components/input/input.scss";
</style>
