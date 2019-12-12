<template>
  <div class="user-input">
    <div class="user-input-label">
      <div class="user-emoji">
        <span class="user-emoji-icon" @click="showEmojiView"></span>
        <fade-transition :animationName="animationName">
          <div v-if="showEmoji" ref="emojiView" class="user-emoji-list" @click="selectEmoji(e)">
            <span v-for="(item, index) in emojiList" :key="index">{{item}}</span>
          </div>
        </fade-transition>
      </div>
      <div class="user-input-enter">
        <textarea
          ref="commentText"
          placeholder="Leave a comment"
          :style="'height:'+currentHeight+'px'"
          @keyup="textAutoSize"
        />
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
      animationName: 'fade'
    }
  },
  methods: {
    showEmojiView () {
      this.showEmoji = !this.showEmoji
    },
    selectEmoji () {

    },
    textAutoSize (e) {
      console.log(e, 'e')
    }
  }
}
</script>

<style lang='scss' scoped>
@import "@/views/blog/components/input/input.scss";
</style>
