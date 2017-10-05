<template>
  <div id="app">
    <header-bar></header-bar>
    <router-view></router-view>
    <link href="https://fonts.googleapis.com/css?family=Courgette" rel="stylesheet">
  </div>
</template>

<script>
import headerBar from './components/header-bar/header-bar'
export default {
  name: 'app',
  components: {
    headerBar
  }
}
</script>
