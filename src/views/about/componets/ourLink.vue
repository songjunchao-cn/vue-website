<template>
  <vue-modal v-model="config.show" :config="config.modelConfig">
  <div class="firends">
    <div v-for="item in friends" :key="item.link">
      <a :href="item.link">
        <span>{{item.name}}</span>
        {{item.title}}
      </a>
    </div>
  </div>
   </vue-modal>
</template>

<script>
export default {
  name: 'ourLink',
  data () {
    return {
      friends: [
        { link: 'https://www.zcool.com.cn/u/13292809', name: '杰神', title: '设计圈张国荣' },
        { link: 'http://fxyblog.com/', name: 'Apple', title: '前端大佬' },
        { link: 'https://dribbble.com/-Nancy', name: '木木夕', title: '美女插画师' },
        { link: 'https://github.com/liangmeie', name: '娥妹子', title: '前端程序媛' }]
    }
  },
  computed: {
    config () {
      return this.$attrs.linkConfig
    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
</style>
