<template >
  <div id="app-container">
      <!-- 头部信息 -->
    <div id="app-header" class="commonColor">
      <div class=" flex-row" >
        <!--logo-->
        <div class="flex-1">
          <div class="acfun-logo"></div>
        </div>
        <!--视频渠道选择-->
        <div class="flex-1">
          <div class="source-select flex-row">
            <div @click="changeSource('recommend')" class="acfun-btn flex-1" :class="{'acfun-color':recommendSource}">推荐</div>
            <div @click="changeSource('partition')" class="acfun-btn flex-1" :class="{'acfun-color':!recommendSource}">分区</div>
          </div>
        </div>
        <!--游戏中心和查找-->
        <div class="flex-1 ">
          <div class="grid-content bg-purple ">
            <svg style="margin-top: 6px;color: #ffffff" class="icon" aria-hidden="true">
              <use xlink:href="#icon-game"></use>
            </svg>
            <svg style="margin-top: 6px;color: #ffffff;margin-left: 10px;" class="icon" aria-hidden="true">
              <use xlink:href="#icon-search"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <!--内容-->
  <el-main>
    <router-view></router-view>
  </el-main>
    <!-- 尾部信息 -->
    <el-footer id="app-footer" class="">

    </el-footer>
  </div>
</template>

<script>
import '../assets/iconfont-game'
import '../assets/iconfont-search'
export default {
  name: 'appdetail',
  data () {
    return {
      recommendSource: true
    }
  },
  mounted () {},
  created () {},
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
}
.source-select{
  margin-top: 6px;
  width: 100%;
  height:30px;
  line-height: 28px;
  background-color: #FFFFFF;
  border-radius: 20px;
}
  .acfun-btn{
    margin: 1px;
    border-radius: 14px;
  }
  .acfun-logo{
    width: 100%;
    height: 40px;
    background-image:url("../assets/img/logo.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

</style>
