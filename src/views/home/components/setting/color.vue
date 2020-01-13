<template>
  <span
    :class="colorItem.isChoose?`${colorItem.value} colorChoose`: colorItem.value"
    @click="$emit('choose')"
  ></span>
</template>

<script>
export default {
  name: 'color',
  data () {
    return {
    }
  },
  computed: {
    colorItem () {
      return this.$attrs.colorItem
    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
</style>
