<template>
  <v-app :dark="getDark">
    <main-header></main-header>
    <main-navigation></main-navigation>
    <v-content>
      <home></home>
    </v-content>

  </v-app>
</template>

<script>
  import MainHeader from './components/MainHeader'
  import {mapGetters, /*mapActions*/} from 'vuex'
  import Home from './views/Home';
  import MainNavigation from './components/mainNavigation';

  export default {
    data: () => ({

    }),
    computed: {
      ...mapGetters([
        'getDark'
      ])
    },
    components: {
      MainNavigation,
      Home,
      MainHeader
    },
    watch: {

    },
  }
</script>
<style>
</style>
