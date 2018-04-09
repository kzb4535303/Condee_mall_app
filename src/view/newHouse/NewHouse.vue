<template>
  <div id="source-index">
    <div id="source-container">
      <!--视频资源推荐总览-->
      <div class="acfun-swipe">
        <ul
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10">
          <li :key="index"  v-for="(item, index) in dataList">
            <div  class="flex-row am-center am-margin-bottom-xs">
              <div style="position: relative">
                <img @click="houseDetail(item, index)" v-lazy="item.images.small" alt="">
                <div style="position: absolute;top: 0;width: 100%;height: 200px;background-color: black;opacity: .2;color: #fff">
                  123123123
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/iconfont-game'
import '@/assets/iconfont-search'
import { getNewhouseListApi } from '@/api/NewHouse'
export default {
  name: 'sourceindex',
  data() {
    return {
      pageNum: 0,
      count: 20,
      loading: false,
      dataList: []
    }
  },
  methods: {
    getDataList() {
      let params = {
        start: (this.pageNum - 1) * this.count,
        count: this.count
      }
      getNewhouseListApi(params).then((res) => {
        this.dataList = this.dataList.concat(res.subjects);
        console.log(this.dataList)
        this.loading = false;
      })
    },
    loadMore() {
      this.pageNum++;
      this.loading = true;
      this.getDataList()
    },
    houseDetail(item, index) {
      console.log(item, index)
    }
  },
  created() {
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
  image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
</style>
