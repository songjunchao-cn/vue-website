<template>
  <vue-modal v-model="config.show" :config="config.modelConfig">
    <div class="myfont">
      <img :src="config.img" alt />
    </div>
  </vue-modal>
</template>

<script>
export default {
  name: 'photo',
  data () {
    return {
    }
  },
  mounted () {
    console.log(this.config)
  },
  computed: {
    config () {
      return this.$attrs.photoConfig
    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
</style>
