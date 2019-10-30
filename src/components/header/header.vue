<template>
 <header>
<div class="app-center">
          <nav ref="test" class="nav">
            <span><img :src='$imgUrls.homeImg.logo' alt=""/></span>
            <a v-for="item in nav" :key="item.herf">{{item.text}}</a>
          </nav>
          <div class="times">
            <a target="_blank" href="https://github.com/songjunchao-cn"><img :src='$imgUrls.homeImg.git' alt=""/></a>
            <time>{{time}}</time>
          </div>
        </div>
         </header>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      time: new Date(),
      nav: [
        { indent: true, text: 'HOME', herf: '/' },
        { indent: false, text: 'WORK', herf: '/work' },
        { indent: false, text: 'ABOUT', herf: '/about' },
        { indent: false, text: 'BLOG', herf: '/blog' }
      ]
    }
  },
  mounted () {
    setInterval(this.getTimeNow, 1000)
  },
  methods: {
    getTimeNow () {
      let time = new Date()
      this.time = `${this.pollyTime(time.getHours())}:${this.pollyTime(time.getMinutes())}:${this.pollyTime(time.getSeconds())}`
    },
    pollyTime (t) {
      let _t = +t < 10 ? `0${t}` : t
      return _t
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
