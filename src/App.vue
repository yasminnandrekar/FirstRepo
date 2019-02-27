<template>
  <div id="app">
    <NavBar />
    <router-view/>
  </div>

</template>

<script>
import NavBar from './components/headerInformation'
export default {
  name: 'App',
  components: {
    NavBar
 }
}
</script>
<style>
</style>
