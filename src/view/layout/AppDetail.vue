
<template >
  <div id="app-container">
    <!-- 头部信息 -->
    <!--视频资源头部-->
    <div v-if="switchTabsValueStore=='newhouse'" class="app-header commonColor">
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
            <svg style="margin-top: 6px;color: #ffffff;margin-left: 14px;" class="icon" aria-hidden="true">
              <use xlink:href="#icon-search"></use>
            </svg>
          </div>
        </div>

      </div>
    </div>
    <!--文章头部-->
    <div v-if="switchTabsValueStore=='article'" class="app-header commonColor flex-row centerTitle">
      <div style="flex: .5;"></div>
      <div class="flex-1">文章</div>
      <div style="flex: .5" >
        <svg style="margin-top: 6px;color: #ffffff;margin-left: 10px;" class="icon" aria-hidden="true">
          <use xlink:href="#icon-search"></use>
        </svg>
      </div>
    </div>
    <div id="app-contain">
      <router-view></router-view>
    </div>
    <!--内容-->
    <!-- 尾部信息 -->
    <div id="app-footer">
      <mt-tabbar   v-model="switchTabsValue">
        <mt-tab-item @click="switchTheTab('newhouse')" id="newhouse">
          <div :class="{'color-acfun':switchTabsValue=='newhouse'}">
            <svg  class="icon" aria-hidden="true">
              <use xlink:href="#icon-ufo"></use>
            </svg>
          </div>
          <div>
            视频
          </div>
        </mt-tab-item>
        <mt-tab-item @click="switchTheTab('article')"  id="article">
          <div :class="{'color-acfun':switchTabsValue=='article'}">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-wenzhang"></use>
            </svg>
          </div>
          <div>
            文章
          </div>
        </mt-tab-item>
        <mt-tab-item @click="switchTheTab('news')" id="news">
          <div :class="{'color-acfun':switchTabsValue=='news'}">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-xiangjiao"></use>
            </svg>
          </div>
          <div>
            动态
          </div>

        </mt-tab-item>
        <mt-tab-item @click="switchTheTab('user')" id="user">
          <div :class="{'color-acfun':switchTabsValue=='user'}">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-face"></use>
            </svg>
          </div>
          <div>
            我
          </div>
        </mt-tab-item>
      </mt-tabbar>
    </div>

  </div>
</template>

<script>
import '@/assets/iconfont-tabbar'
import { mapMutations } from 'vuex'
export default {
  name: 'appdetail',
  data() {
    return {
      recommendSource: true,
      switchTabsValue: 'newhouse'
    }
  },
  mounted() {

  },
  created() {

  },
  methods: {
    ...mapMutations(['handleTheTabs']),
    changeSource(value) {
      switch (value) {
        case 'recommend':
          this.recommendSource = true
          break
        case 'partition':
          this.recommendSource = false
          break
      }
    },
    switchTheTab(value) {
      this.$router.push({ name: value })
    }
  },
  watch: {
    switchTabsValue(val) {
      /*
      * 改变公共状态
      * */
      this.handleTheTabs(val)
      this.$router.push({ name: val })
    }

  },
  computed: {
    switchTabsValueStore() {
      return this.$store.state.switchTabsValueStore
    }
  }
}
</script>

<style scoped>
#app-container{
  height: 100%;
  display: flex;
  flex-direction: column;
}
.app-header{
  overflow: hidden;
  width: 100%;
  flex: 0 0 40px;
}
#app-contain{
  flex:1;
  overflow: scroll;
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
  background-image:url("../../assets/img/logo.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
#app-footer{
  border-top: solid 1px #eeeeee;
  flex: 0 0 54px;
  width: 100%;
}
.centerTitle{
  justify-content: center;
  align-items: center;
}
  .rightSearch{
   align-self: flex-end;
  }
</style>
