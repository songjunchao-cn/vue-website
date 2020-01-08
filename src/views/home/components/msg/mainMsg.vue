<template>
  <li class="showMsg">
    <article class="msgTitle">
      <strong>{{$attrs.msgItem.name}}</strong>
      <span>{data}</span>
      <span @click="upSup" class="msgLight">
        <a></a>
       {{$attrs.msgItem.sup}}
      </span>
    </article>
    <section class="message">{{$attrs.msgItem.msg}}</section>
    <!-- {this.state.bubbles.map(bubble => <Bubble key={bubble.time} pro={bubble} out={this.outBubble.bind(this)}/>)} -->
  </li>
</template>

<script>
export default {
  name: 'mainMsg',
  data () {
    return {
    }
  },
  mounted () {
    console.log(this.$attrs, 'attrs')
  },
  methods: {
    upSup () {

    }
  }
}
</script>

<style lang='scss' scoped>
</style>
