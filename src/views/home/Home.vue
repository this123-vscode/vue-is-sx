<template>
  <div class="home">
    <nav-bar class="home-nav"><div slot="center">购物页</div></nav-bar>
    <!-- 组件轮番图 -->
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
    <feature-view></feature-view>
    <tab-control
      :titles="(titles = ['流行', '新款', '抢购'])"
      @tabClick="tabClick"
    ></tab-control>
    <!-- 传入计算属性函数值 -->
    <goods-list :goods="showGoods"></goods-list>
  </div>
</template>

<script>
// 组件引入
import NavBar from '../../components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import TabControl from '../../components/content/tabControl/TabControl'
import GoodsList from '../../components/content/goods/GoodsList'
// 文件引入 没有导出需要加{}
import { getHomeMultidata, getHomeGoods } from '../../network/home.js'
// 轮播图
export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      // 轮播图数据
      banners: [],
      // 列表数据
      recommend: [],
      // 商品展示的数据及类型
      goods: {
        pop: { page: 0, list: [] }, // 推荐
        new: { page: 0, list: [] }, // 新款
        sell: { page: 0, list: [] }, // 抢购
      },
      // 定义默认的展示商品数据值
      currentType: 'pop',
    }
  },
  created() {
    this.getHomeMultidata()
    //  请求商品数据 传入的是页数与list数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  computed: {
    //  动态获取currentType来切换展示数据
    showGoods() {
      return this.goods[this.currentType].list
    },
  },
  methods: {
    // 主页的数据
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },
    //  商品数据
    getHomeGoods(type) {
      // 定义page给goods[type].page + 1
      const page = this.goods[type].page + 1
      // 两个参数一个为上传参数一个为页数
      getHomeGoods(type, page).then((res) => {
        // 由于有参数type每次都将res.data.list中的数据push与gooo[type].list的数组中
        this.goods[type].list.push(...res.data.list)
        // 每次都push一次数据 逐渐push完成页数都+=1全部加载出
        this.goods[type].page += 1
      })
    },
    //  点击判断index的值来根据index的进入不同的标签加载相应的数据
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
  },
}
</script>
<style scoped>
.home {
  padding-bottom: 60px;
}
.home-nav {
  background: palevioletred;
  color: #ffffff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>