<template>
  <vue-modal v-model="config.show" :config="config.modelConfig">
    <!-- <div class='img'>
        <img :src='config.img' alt/>
    </div>-->
    <div class="where">
      <span>ZHEJIANG</span>
      <span>HANGZHOU</span>
    </div>
  </vue-modal>
</template>

<script>
export default {
  name: 'link',
  data () {
    return {
    }
  },
  computed: {
    config () {
      return this.$attrs.addressConfig
    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
</style>
