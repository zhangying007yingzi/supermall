<template>
  <div id="app">
    <MainTabBar/>
  </div>
</template>

<script>
import MainTabBar from 'components/mainTabBar/MainTabBar';
export default {
  name: 'app',
  components: { MainTabBar },
}
</script>

<style>
@import url('./assets/css/base.css');
</style>
