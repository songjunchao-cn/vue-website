<template>
  <span>
    <a
      v-for="element in labels"
      :key="element.id"
      :class="lableCss"
      :style="'color:#'+`${element.color}`"
    >{{element.name}}</a>
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
  methods: {}
}
</script>

<style lang='scss' scoped>
</style>
