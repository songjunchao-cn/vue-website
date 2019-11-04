<template>
  <footer class="footer">
    <ul>
      <li>
        <b>const</b>
        {{dateValue}}
      </li>
      <li>
        <b>const</b> UseTime = 4s
      </li>
      <li>
        <b>const</b> Add=浙江省杭州市
      </li>
      <li>WWW.SJC.TOP</li>
      <li>
        <a target="_blank" href>备案号</a>
      </li>
    </ul>
  </footer>
</template>

<script>
import { setInterval } from 'timers'
export default {
  name: 'foot',
  data () {
    return {
      dateValue: ' Date = ' + new Date().getFullYear() + '/' + (+new Date().getMonth() + 1) + '/' + new Date().getDate(),
      userTime: 1
    }
  },
  mounted () {
    this.initUserTime()
  },
  methods: {
    initUserTime () {
      setInterval(() => {
        this.userTime++
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./footer.scss";
</style>
