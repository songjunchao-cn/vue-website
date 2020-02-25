<!--
 * @Author: sjc
 * @Date: 2020-02-24 09:51:07
 * @LastEditTime: 2020-02-25 12:17:09
 * @Description:chat
 -->
<template>
  <div class="chat">
    <div>正在开发中，此页面为webrtc测试页面</div>
    <div class="video-wrap">
      <video ref="player" id="player" autoplay controls playsinline></video>
      <video v-show="buffer.length>0" ref="recplayer" id="recplayer" controls autoplay></video>
    </div>
    <div class="btn-wrap">
      <button @click="startRecord">录屏</button>
      <button id="recplay" @click="recPlay">播放录屏</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chat',
  data () {
    return {
      buffer: [],
      stream: null,
      mediaRecorder: null
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
      this.stream = await navigator.mediaDevices.getUserMedia(constraints)
      this.$refs.player.srcObject = this.stream
      this.$refs.player.muted = true
    },
    startRecord () {
      this.buffer = []
      var options = {
        mimeType: 'video/webm;codecs=vp8'
      }

      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        console.error(`${options.mimeType} is not supported!`)
        return
      }
      try {
        this.mediaRecorder = new MediaRecorder(this.stream, options)
        this.mediaRecorder.ondataavailable = e => {
          console.log(this.buffer)
          if (e && e.data && e.data.size > 0) { this.buffer.push(e.data) }
        }
        this.mediaRecorder.start(1000)
      } catch (e) {
        console.error('Failed to create MediaRecorder:', e)
      }
    },
    recPlay () {
      if (this.mediaRecorder) {
        this.mediaRecorder.stop()
      }
      var blob = new Blob(this.buffer, { type: 'video/webm' })
      let recplayer = this.$refs.recplayer
      recplayer.src = null
      recplayer.src = window.URL.createObjectURL(blob)
      recplayer.srcObject = null
    }
  }
}
</script>

<style lang='scss' scoped>
@import './chat.scss'
</style>
