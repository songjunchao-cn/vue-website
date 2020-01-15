<template>
  <div class="colors">
    <Color v-for="item in colors" :key="item.value" :colorItem='item' @choose="bgChoose(item)" />
  </div>
</template>

<script>
import Color from './color.vue'
export default {
  name: 'bgColor',
  components: {
    Color
  },
  data () {
    return {
      colors: [
        { value: 'main-bg',
          isChoose: false
        },
        { value: 'green-bg',
          isChoose: false
        },
        { value: 'red-bg',
          isChoose: false
        },
        { value: 'black-bg',
          isChoose: false
        },
        { value: 'color-bg',
          isChoose: false
        },
        { value: 'grid-bg',
          isChoose: false
        }
      ]
    }
  },
  mounted () {
    this.initColor()
  },
  methods: {
    initColor () {
      let hasClass = void 0
      const color = document.getElementById('root').className
      const newColors = this.colors.map(i => {
        if (i.value === color) {
          i.isChoose = true
          hasClass = 1
        }
        return i
      })
      if (!hasClass) newColors[0].isChoose = true
      this.colors = newColors
    },
    bgChoose (item) {
      const _index = this.colors.indexOf(item)
      this.colorChoose(_index)
      document.getElementById('root').className = `root ${this.colors[_index].value}`
    },
    colorChoose (index) {
      this.colors = this.colors.filter((c, i) => {
        //   ===优先级高于=
        c.isChoose = i === index
        return c
      }
      )
    }
  }
}
</script>

<style lang='scss'>
</style>
