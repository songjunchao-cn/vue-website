<template>
  <vue-modal v-model="config.show" :config="config.modelConfig">
    <div class="img">
      <img :src="config.img" alt />
    </div>
    <h3>sjc@foxmail.com</h3>
    <a href="mailto:arthur.ou@foxmail.com" class="linkIcon"></a>
  </vue-modal>
</template>

<script>
export default {
  name: 'mail',
  data () {
    return {
    }
  },
  computed: {
    config () {
      return this.$attrs.mailConfig
    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
</style>
