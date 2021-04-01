<template>
  <div class="home">
    <nav-bar class="home-nav"><div slot="center">购物页</div></nav-bar>
  </div>
</template>

<script>
import NavBar from '../../common/navbar/NavBar'
// 没有导出需要加{}
import { getHomeMultidata } from '../../network/home.js'
export default {
  name: 'Home',
  components: {
    NavBar,
  },
  data() {
    return {}
  },
  created() {
    //  调用后直接then 由于是导入的文件不是内置函数以及定义数据无需this
    getHomeMultidata().then((res) => {
      console.log(res)
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