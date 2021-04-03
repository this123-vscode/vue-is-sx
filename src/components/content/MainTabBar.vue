<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="violet">
      <img slot="item-icon" src="../../assets/img/tabbar/home.svg" alt="" />
      <img
        slot="item-icon-active"
        src="../../assets/img/tabbar/home_active.svg"
        alt=""
      />
      <div slot="item-text">{{ list.shouye }}</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="blue">
      <img slot="item-icon" src="../../assets/img/tabbar/category.svg" alt="" />
      <img
        slot="item-icon-active"
        src="../../assets/img/tabbar/category_active.svg"
        alt=""
      />
      <div slot="item-text">{{ list.fenlei }}</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="red">
      <img slot="item-icon" src="../../assets/img/tabbar/shopcart.svg" alt="" />
      <img
        slot="item-icon-active"
        src="../../assets/img/tabbar/shopcart_active.svg"
        alt=""
      />
      <div slot="item-text">{{ list.gouwuche }}</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="green">
      <img slot="item-icon" src="../../assets/img/tabbar/profile.svg" alt="" />
      <img
        slot="item-icon-active"
        src="../../assets/img/tabbar/profile_active.svg"
        alt=""
      />
      <div slot="item-text">{{ list.wode }}</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from '../../components/common/tabbar/TabBar.vue'
import TabBarItem from '../../components/common/tabbar/TabBarItem.vue'
export default {
  components: {
    TabBar,
    TabBarItem,
  },
  data() {
    return {
      list: {
        shouye: '首页',
        fenlei: '分类',
        gouwuche: '购物车',
        wode: '我的',
      },
    }
  },
}
</script>

<style scoped>
  div {
  font-size: 3.5vw;
}
</style>