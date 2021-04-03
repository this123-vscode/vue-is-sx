<template>
  <div class="tab-control">
    <div @click="itemClick(index)" class="tab-control-item" v-for="(item, index) in titles" :key="index">
      <span  :class="{active:index == currenIndex}">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
        currenIndex: 0
    }
  },
  methods: {
      itemClick(index) {
          this.currenIndex = index  
            // 创建一个子传父的事件
          this.$emit('tabClick',index)
      }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  z-index: 6;
}
.tab-control-item {
  flex: 1;
    background: #f5f5f5f5;
}
.active{
    color: coral;
    border-bottom: 3px solid coral;
}
</style>