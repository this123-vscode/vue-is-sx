<template>
  <div class="recommend">
    <div
      class="recommend-item"
      v-for="(item, indexs) in recommend"
      :key="indexs"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
         <div>
          {{ item.title }}
        </div>
        <div class="recommend-hr"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 65%;
  margin-top: 15px;
}
.recommend-hr {
  margin-top: 25px;
  border: 5px solid #ccc;
  opacity: 0.5;
}
</style>