<template>
  <span class="blog-menu-labels">
    <a
      v-for="(element,index) in labels"
      :key="index"
      :class="lableCss"
      :style="'color:'+`${tranColor(element)}`"
    >{{element}}</a>
  </span>
</template>

<script>
export default {
  name: 'labels',
  props: {
    labels: {
      type: Array,
      default () {
        return []
      }
    }
  },
  mounted () {
    console.log(this.labels, 'ss')
  },
  data () {
    return {
      lableCss: 'blog-menu-label'
    }
  },
  methods: {
    tranColor (name) {
      var str = ''
      for (var i = 0; i < name.length; i++) {
        str += parseInt(name[i].charCodeAt(0), 10).toString(16)
      }
      return '#' + str.slice(1, 4)
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
