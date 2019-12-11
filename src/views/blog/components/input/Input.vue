<template>
  <div class='user-input'>
        <div class='user-input-label'>
          <div class='user-emoji'>
            <span class='user-emoji-icon' @click='showEmojiView'></span>
            <!-- <CSSTransition
              in={this.state.showEmoji}
              key='tests'
              timeout={200}
              unmountOnExit
              classNames="fade"> -->
              <div ref="emojiView" class='user-emoji-list' @click={selectEmoji(e)}>
                <!-- {
                  EMOJI_LIST.map((emoji, i) => <span key={i}>{emoji}</span>)
                } -->
              </div>
            <!-- </CSSTransition> -->
          </div>
          <div class='user-input-enter'>
            <textarea
              ref="commentText"
              placeholder="Leave a comment"
              style={{height: this.state.currentHeight + 'px'}}
              onKeyUp={(e)=>this.textAutoSize(e)}
            />
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'commentInput',
  data () {
    return {
    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
@import "@/views/blog/components/input/input.scss";
</style>
