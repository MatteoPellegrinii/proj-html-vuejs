<template>
  <div id="app">
    <HeaderProject/>
    <MainProject/>
    <FooterProject/>
  </div>
</template>

<script>
import HeaderProject from './components/HeaderProject.vue';
import MainProject from './components/MainProject.vue';
import FooterProject from './components/FooterProject.vue';



export default {
  name: 'App',
  components: {
    HeaderProject,
    MainProject,
    FooterProject
}
}
</script>

<style lang="scss">

</style>
