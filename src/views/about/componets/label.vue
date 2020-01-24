<template>
  <div class='mylabel'>
   <Cloud v-bind="$attrs" v-for="(item,index) in labels" :key="item" :index='index' :text='item'/>
  </div>
</template>

<script>
import Cloud from './cloud'
export default {
  name: 'myLabel',
  components: {
    Cloud
  },
  data () {
    return {
      labels: [
        '#sjc',
        '#90后',
        '#前端新秀',
        '#Man Show',
        '#猫奴',
        '#伪文艺'
      ]
    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped>

</style>
