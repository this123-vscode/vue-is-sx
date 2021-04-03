<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red',
    },
  },
  data() {
    return {
      // isActive: 'true'
    }
  },
  computed: {
      // 根据路由跳转检查索引不为-1则是检测到路由对应路径
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
      // 文字变亮
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {}
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    },
  },
}
</script>

<style scoped>

 .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }

  .tab-bar-item img {
    width: 22%;
    height: 22%;
    margin-top: 5px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>