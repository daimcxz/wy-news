<template>
  <div id="app">
    <mt-header title="网易">
      <div slot="left">
        <mt-button v-link="'/'" icon="back"></mt-button>
        <mt-button @click="handleClose">关闭</mt-button>
      </div>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
      <div id="slider" class="mui-slider">
        <div id="sliderSegmentedControl" class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <a class="mui-control-item" @click.prevent="goHerf('home')">新闻</a>
          <a class="mui-control-item" @click.prevent="goHerf('ceat')" href="#item2mobile">原创</a>
          <a class="mui-control-item" href="#item3mobile">推荐</a>
        </div>
      </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {}
  },
  methods: {
    goHerf: function (name) {
      this.$router.push({
        name: name
      })
    }
  }
}
</script>

<style >
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.mint-swipe {
  height: 150px;
}
.tmpl {
  margin-bottom: 50px;
  overflow: hidden;
}
ul,p {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.mint-header{
  background-color: red;
}
.page-part{
  border-bottom: 1px solid rgba(0, 0, 0, 0.2)
}
.q{
  width: 100px;
  height: 1px;
  background-color: red;
}
.mui-slider{
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
</style>
