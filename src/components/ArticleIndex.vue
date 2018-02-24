<template>
  <div id="source-index">
    <!-- 头部信息 -->
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="tab-container1">
      123123123
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container2">
       321321321
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container3">
       321321321
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import '../assets/iconfont-game'
import '../assets/iconfont-search'
export default {
  name: 'sourceindex',
  data () {
    return {
      recommendSource: true
    }
  },
  methods: {
    changeSource (value) {
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
