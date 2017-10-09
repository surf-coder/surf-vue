<template>
  <div id="app">
    <div class="wrapper-page">
      <div class="sidebar">
        <nav class="sidebar__nav-list" role="navigation">
          <ul class="nav-list">
            <li class="nav-list__item">
              <router-link to="/">Header Bar</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
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
