<template>
  <div class="codeBox">
    <span>{{$attrs.title}}</span>
    <MyIcon v-bind="$attrs" @clickIcon="clickIcon" />
    <hr align="center" width="100%" color="#1e1e1e" size="1" />
  </div>
</template>

<script>
import MyIcon from '@/components/icons/Icons'
export default {
  name: 'listComponent',
  components: {
    MyIcon
  },
  data () {
    return {

    }
  },
  mounted () {
    console.log(this.$attrs, 'attrs')
  },
  methods: {
    clickIcon (item) {
      console.log(item, 'clickIcon')
      this.$emit('changeVisiable', item)
    }
  }
}
</script>

<style lang='scss'>
@import "./listComponent.scss";
</style>
