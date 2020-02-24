<!--
 * @Author: sjc
 * @Date: 2020-02-24 09:51:07
 * @LastEditTime: 2020-02-24 12:17:22
 * @Description:chat
 -->
<template>
  <div>
      <div>正在开发中，此页面为webrtc测试页面</div>
      <video ref="player" id="player" autoplay></video>
      <button @click="startRecord">录屏</button>
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
      let stream = await navigator.mediaDevices.getUserMedia(constraints)
      this.$refs.player.srcObject = stream
    },
    startRecord () {
      let buffer = []
      var options = {
        mimeType: 'video/webm;codecs=vp8'
      }

      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        console.error(`${options.mimeType} is not supported!`)
        return
      }
      try {
        let mediaRecorder = new MediaRecorder(window.stream, options)
        mediaRecorder.ondataavailable = handleDataAvailable
        mediaRecorder.start(10)
      } catch (e) {
        console.error('Failed to create MediaRecorder:', e)
      }
      function handleDataAvailable (e) {
        if (e && e.data && e.data.size > 0) { buffer.push(e.data) }
      }
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
