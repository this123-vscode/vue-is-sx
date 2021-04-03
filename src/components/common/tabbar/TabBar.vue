<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<style scoped>

#tab-bar {
  display: flex;
  background: #f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  z-index: 99;
  height: 49px;
  box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.03);
}
</style>
