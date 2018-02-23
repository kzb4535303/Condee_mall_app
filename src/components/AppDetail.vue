<template >
  <div id="app-container">
      <!-- 头部信息 -->
    <el-header id="app-header" class="commonColor">
      <el-row :gutter="20">
        <!--logo-->
        <el-col :span="8"><div class="grid-content bg-purple">
          <img style="width: 100%;height: 60px;" src="../assets/img/logo.jpg" alt="">
        </div></el-col>
        <!--视频渠道选择-->
        <el-col :span="8"><div class="grid-content bg-purple">
          <div class="source-select">
            <el-row>
              <el-col :span="12">
                <div @click="changeSource('recommend')" class="acfun-btn" :class="{'acfun-color':recommendSource}">
                  推荐
                </div>
              </el-col>
              <el-col :span="12">
              <div @click="changeSource('partition')" class="acfun-btn" :class="{'acfun-color':!recommendSource}">
                分区
              </div>
              </el-col>
            </el-row>
          </div>
        </div></el-col>
        <!--游戏中心和查找-->
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <svg style="margin-top: 12px;color: #ffffff" class="icon" aria-hidden="true">
              <use xlink:href="#icon-game"></use>
            </svg>
            <svg style="margin-top: 12px;color: #ffffff;margin-left: 10px;" class="icon" aria-hidden="true">
              <use xlink:href="#icon-search"></use>
            </svg>
          </div>
        </el-col>
      </el-row>
    </el-header>
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
#app-container{
  height: 100%;
  position: relative;
}
#app-footer{
  border-top: solid 1px #eee;
  position: absolute;
  bottom:0;
  width: 100%;
}
.source-select{
  margin-top: 12px;
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

</style>
