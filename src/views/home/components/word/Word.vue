<template>
  <div class="word">
    <span :class="wordState.in?'animate':''">Hey There</span>
    <br />
    <span :class="wordState.middle?'animate':''">I'm songjunchao.cn</span>
    <br />
    <span :class="wordState.out?'animate':''">
      ( σ'ω')σ
      <strong>#Skr</strong>
      <i :class="wordState.cursor?'cursor':''"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'word',
  //   首页文字动画
  data () {
    return {
      wordState: {
        in: false,
        middle: false,
        out: false,
        cursor: false
      },
      timer: 1200
    }
  },
  mounted () {
    this.componentDidMount()
  },
  methods: {
    componentDidMount () {
      Object.keys(this.wordState).forEach(element => {
        this.timer += 200
        console.log(this.timer)
        setTimeout(() => {
          this.wordState[element] = true
        }, this.timer)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./word.scss";
</style>
