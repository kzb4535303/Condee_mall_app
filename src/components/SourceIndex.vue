<template>
  <div id="source-index">
    <div id="source-container">
      <!--视频资源推荐总览-->
      <div class="acfun-swipe">
        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
          <mt-swipe :auto="4000">
            <mt-swipe-item>
              <a style="display: block;height: 100%;width: 100%;">
                <img  style="display: block;height: 100%;width: 100%;" src="../assets/img/1516854662654.jpg" alt="">
              </a>
            </mt-swipe-item>
            <mt-swipe-item>
              <a style="display: block;height: 100%;width: 100%;">
                <img  style="display: block;height: 100%;width: 100%;" src="../assets/img/1518428996865.jpg" alt="">
              </a>
            </mt-swipe-item>
          </mt-swipe>
          <ul>
            <li v-for="item in list">{{ item }}</li>
          </ul>
        </mt-loadmore>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/iconfont-game'
import '../assets/iconfont-search'
export default {
  name: 'sourceindex',
  data () {
    return {
      allLoaded: false,
      list: [1, 2, 3, 4, 3, 23, 2, 323, 1, 23, 123, 12, 3, 1, 3, 12, 1, 3, 123, 12, 31, 24, 124, 1, 241, 24, 12, 412, 41, 241, 24, 12, 123, 321, 3, 213, 123, 12, 31, 23, 12, 1, 1, 1, 51, 2, 12]
    }
  },
  methods: {

    loadTop () {
      this.$refs.loadmore.onTopLoaded()
    },
    loadBottom () {
      this.$refs.loadmore.onBottomLoaded()
    }
  }
}
</script>

<style scoped>

  #source-container{
    height: 100%;

  }
  #source-index{
   height: 100%;
  }
  .acfun-swipe{
    width: 100%;
    height:12rem;
  }
</style>
