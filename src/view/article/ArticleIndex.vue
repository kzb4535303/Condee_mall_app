<template>
  <div id="source-index">
    <!-- 头部信息 -->
  </div>
</template>

<script>
import '@/assets/iconfont-game'
import '@/assets/iconfont-search'

export default {
  name: 'sourceindex',
  data() {
    return {
      recommendSource: true,
      active: ''
    }
  },
  created() {
  },
  methods: {
    changeSource(value) {
      switch (value) {
        case 'recommend':
          this.recommendSource = true
          break
        case 'partition':
          this.recommendSource = false
          break
      }
    }
  }
}
</script>

<style scoped>
  #app-header{
    height: 40px;
    overflow: hidden;
    position: relative;
    top:0;
    width: 100%;
  }
</style>
