<template>
 <center>
    <div>
          <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" />
      </a>
    </van-swipe-item>
  </van-swipe>
    </div>
 </center>
</template>

<script>
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style scoped>
.van-swipe {
    background: #f5f5f5f5;
    margin-top: 50px;
}
.van-swipe img {
  width: 93%;
  margin-top: 7px;
  height: 230px;
  border-radius: 7%;
}
</style>