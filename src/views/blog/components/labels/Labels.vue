<template>
  <span>
    <a
      v-for="element in labels"
      :key="element"
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
