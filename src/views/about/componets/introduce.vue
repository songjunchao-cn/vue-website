<template>
  <vue-modal v-model="config.show" :config="config.modelConfig">
    <div class="city">
      <City/>
      <MyLabel v-bind="$attrs"/>
    </div>
  </vue-modal>
</template>

<script>
import MyLabel from './label'
import City from './city'
export default {
  name: 'introduce',
  components: {
    City,
    MyLabel
  },
  data () {
    return {
    }
  },
  computed: {
    config () {
      return this.$attrs.introduceConfig
    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
</style>
