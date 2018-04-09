<template>
	<div>
		<ul class="mui-table-view">
			<li v-for="(item, index) in imgs" :key="index" class="mui-tabel-view-cell mui-media">
					<a  class="" v-if="item.type ===1">
						<img :src="item.img_url" height="200" width="200" class="mui-media-object mui-pull-right">
						<div class="mui-media-body">
							<span v-text="item.name_ac"></span>
							<div class="news-desc cl">
								<p>{{item.zhaiyao1}}新闻</p>
								<p>20分钟前</p>
								<p>{{item.click}}跟帖</p>
								<p> <a>x</a></p>
							</div>
						</div>
					</a>
					<a href="" v-else>
						<div class="mui-media-body">
							<span v-text="item.name_ac"></span>
							<img :src="item.img_url" height="200" width="200" class="mui-media-object mui-pull-left">
							<img :src="item.img_url" height="200" width="200" class="mui-media-object mui-pull-left">
							<img :src="item.img_url" height="200" width="200" class="mui-media-object mui-pull-left">
							<div class="news-desc cl">
								<p>{{item.zhaiyao1}}新闻</p>
								<p>20分钟前</p>
								<p>{{item.click}}跟帖</p>
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
.mui-pull-right{
	margin-top: 20px;
	margin-bottom: 20px;
	margin-right: 10px;
		max-width: 116px;
		height: 73px;
		float: right;
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
.mui-table-view .mui-media-object.mui-pull-left{
    margin-right:1px;
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
