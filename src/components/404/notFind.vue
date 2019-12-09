<template>
 <div :class='Css.notfind'>
        <div class='figure-pop figure-style-err'>
          <p :class='Css.title'></p>
          <div :class='Css.ErrText'>
            <h1>404</h1>
            <h3>FILE NOT FIND</h3>
            <a href="https://www.sjc.top/">HOME PLEASE</a>
          </div>
        </div>
      </div>
</template>

<script>
import Css from './notFind.scss'
export default {
  name: 'notfind',
  data () {
    return {
      Css
    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped>

</style>
