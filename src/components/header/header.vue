<template>
  <header>
    <div class="app-center">
      <nav class="nav">
        <span>
          <img :src="$imgUrls.homeImg.logo" alt />
        </span>
        <a :class="{'nav-index': item.text === tabName}"
           v-for="item in nav"
           :key="item.herf"
           @click="changeTab(item.herf,item.text)"
           >
           <!-- <router-link :to='item.herf'></router-link> -->
          {{item.text}}
        </a>
      </nav>
      <div class="times">
        <a target="_blank" href="https://github.com/songjunchao-cn">
          <img :src="$imgUrls.homeImg.git" alt />
        </a>
        <time>{{formatTime}}</time>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'top-header',
  data () {
    return {
      nav: [
        { indent: true, text: 'HOME', herf: '/' },
        { indent: false, text: 'BLOG', herf: '/blog' },
        { indent: false, text: 'WORK', herf: '/work' },
        { indent: false, text: 'ABOUT', herf: 'about' }
      ],
      time: new Date(),
      tabName: 'HOME'
    }
  },
  created () {},
  beforeMount () {},
  mounted () {
    setInterval(this.getTimeNow, 1000)
  },
  computed: {
    formatTime () {
      return `${this.pollyTime(this.time.getHours())}:${this.pollyTime(
        this.time.getMinutes()
      )}:${this.pollyTime(this.time.getSeconds())}`
    }
  },
  methods: {
    getTimeNow () {
      this.time = new Date()
    },
    pollyTime (t) {
      let _t = +t < 10 ? `0${t}` : t
      return _t
    },
    changeTab (herf, text) {
      this.tabName = text
      this.$router.push(herf)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
