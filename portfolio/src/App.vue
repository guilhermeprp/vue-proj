<template>
  <NavBar/>
  <HomeBanner/>
</template>

<script>
import NavBar from './components/navbar.vue'
import HomeBanner from './components/home-banner.vue'
import "@/assets/scss/main.scss";


export default {
  name: 'App',
  components: {
    NavBar,
    HomeBanner
  }
}
</script>
