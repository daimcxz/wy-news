<template>
  <div>
    <ul class="mui-table-view">
      <li v-for="(img,index) in imgs" :key="index" class="mui-tabel-view-cell mui-media">
          <a  class="">
              <div class="mui-media-body">
                  <span v-text="img.name_ac"></span>
                  <img :src="img.img_url" height="200" width="200" class="mui-media-object mui-pull-right">
                  <img :src="img.img_url" height="200" width="200" class="mui-media-object mui-pull-right">
                  <img :src="img.img_url" height="200" width="200" class="mui-media-object mui-pull-right">
                  <div class="news-desc cl">
                      <p>{{img.zhaiyao1}}新闻</p>
                      <p>20分钟前</p>
                      <p>{{img.click}}跟帖</p>
                      <p> <a>x</a></p>
                  </div>
              </div>
          </a>
      </li>
    </ul>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgs: []
    }
  },
  created () {
    this.$axios.get('ZGS_2')
      .then(res => {
        this.imgs = res.data.message
      })
  }
}
</script>

<style scoped>
.mui-table-view.mui-grid-view.mui-grid-9{
  background-color: white;
  margin-top: 0;
}
.mint-swipe{
  max-height: 150px;
}
.mint-swipe img{
  max-height: 100%;
}
.cl {
    clear: both;
    /* content: ""; */
    overflow: hidden;
    /* display: table; */
}
.mui-media-object{

    float: left;
    margin-right: 1px;
    max-width: 112px;
    height: 73px;
}
.mui-table-view .mui-media-object.mui-pull-right{
    margin-left: 0px;
}
.mui-media-body span{
  color: black;
    width: 80%;
    float: left;
    text-align: left;
    /* text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    overflow: hidden; */
}
.mui-media-body p {
    color: #0bb0f5;
}
.news-desc p {
    float: left;
    padding: 5px 3px;
    font-size: 10px;
    color: rgba(0, 0, 0, 0.2)
}
li{

  border-bottom: 1px solid rgba(240, 236, 236, 0.514)
}
.mui-media-body{
  margin: 0 10px;
  padding-top: 20px;
}
.news-desc p:nth-child(4) {
    float: right;
}
.news-desc p>a {
  color: rgba(0, 0, 0, 0.2)
}
</style>
