<!--
 * @Author: sjc
 * @Date: 2020-02-24 09:51:07
 * @LastEditTime: 2020-02-24 10:06:36
 * @Description:chat
 -->
<template>
  <div>
      <div>正在开发中，此页面为测试页面</div>
      <video ref="player" id="player" autoplay controls></video>
  </div>
</template>

<script>
export default {
  name: 'chat',
  data () {
    return {
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.getUserMedia()
    })
  },
  methods: {
    async getUserMedia () {
      let constraints = {
        video: true,
        audio: true
      }
      let stream = navigator.mediaDevices.getUserMedia(constraints)
      console.log(stream)
      this.$refs.player.srcObject = stream
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
