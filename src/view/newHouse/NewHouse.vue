<template>
  <div id="source-index">
    <div id="source-container">
      <!--视频资源推荐总览-->
      <div class="acfun-swipe">
        <ul
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10">
          <li class="shadow" style="margin:5%" :key="index"  v-for="(item, index) in dataList">
            <div   class=" am-center am-margin-bottom-x">
              <!-- 图片 -->
              <div style="margin:10px 0">
                  <img  :src="item.images.small">
              </div>
              <!-- 文字介绍 -->
              <div>
                <h2>
                  {{item.title}}
                    <span style="font-size:12px;">评分: {{item.rating.average}}分</span>
                </h2>
                <p>
                  主演：
                  <span v-for="(actor, index) in item.casts">
                    {{actor.name}}
                  </span>
                </p>
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
        if(!res.subjects.length) {
            this.loading = false;
            return
        }
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
  .shadow{
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border: 1px solid #ebeef5
  }
</style>
