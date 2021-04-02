<template>
  <div class="home">
    <nav-bar class="home-nav"><div slot="center">购物页</div></nav-bar>
    <!-- 组件轮番图 -->
   <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
// 组件
import NavBar from '../../components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
// 没有导出需要加{}
import { getHomeMultidata } from '../../network/home.js'
// 轮播图
export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
  },
  data() {
    return {
      banners: [],
      recommend: [],
    }
  },
  created() {
    //  调用后直接then 由于是导入的文件不是内置函数以及定义数据无需this
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list
      this.recommend = res.data.recommend
    })
  },
  methods: {},
}
</script>
<style scoped>
.home-nav {
  background: palevioletred;
  color: #ffffff;
}

</style>