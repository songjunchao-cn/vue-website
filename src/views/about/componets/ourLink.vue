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
        { link: 'https://cn.vuejs.org', name: 'VUE', title: '易用 灵活 高效' },
        { link: 'https://reactjs.org', name: 'React', title: '声明式 组件化' },
        { link: 'https://nodejs.orgz', name: 'NodeJs', title: '事件驱动' },
        { link: 'https://koa.bootcss.com', name: 'Koa', title: '小而优雅' }]
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
