<!--
 * @Author: sjc
 * @Date: 2019-11-04 16:32:43
 * @LastEditTime: 2020-02-24 12:47:18
 * @Description:
 -->
<template>
  <footer class="footer">
    <ul>
      <li>
        <b>const</b>
        {{dateValue}}
      </li>
      <li>
        <b>const</b>
        {{weatherValue}}
      </li>
      <li>
        <b>const</b>
        {{addrValue}}
      </li>
      <li>SONGJUNCHAO-CN.CN</li>
      <li>
        <a target="_blank" href>吉ICP备20000493号</a>
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
      weatherValue: '',
      userTime: 1
    }
  },
  mounted () {
    this.initUserTime()
    this.crosIpApi()
  },
  methods: {
    initUserTime () {
      setInterval(() => {
        this.userTime++
      }, 1000)
    },
    async initWeather (ip) {
      let { data } = await this.$api.crosWheatherApi(ip)
      this.weatherData = data.HeWeather6[0]
      this.weatherValue = 'Weather = ' + this.weatherData.now.cond_txt
      let city = this.weatherData.basic.admin_area + this.weatherData.basic.location
      if (this.weatherData.basic.admin_area === this.weatherData.basic.location) {
        city = this.weatherData.basic.admin_area
      }
      this.addrValue = 'Add= ' + city
    },
    async crosIpApi () {
      let { data } = await this.$api.crosIpApi()
      this.initWeather(data.ip)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./footer.scss";
</style>
