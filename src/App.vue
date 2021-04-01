<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <router-view />
  </div>
</template>
<script>
import MainTabBar from './components/content/MainTabBar'
export default {
  components: {
    MainTabBar,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style>
@import url('./assets/css/base.css');
</style>
