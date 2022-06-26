/* eslint-disable vue/multi-word-component-names */
<template>
<section>
<NavBar/>
<Header title="Vue Js Movie App"  subTitle="Checkout Movie List"/> 
<MovieList/>
<Footer info="By Baraka Mwang'amba"/>
</section>

</template>
<script>
import NavBar from "./NavbarComponent.vue"
import Header from "./HeaderComponent.vue"
import Footer from "./FooterComponent.vue"
import MovieList from "./MovieListComponent.vue"
export default {
  name: 'HomeComponent',
  props: {
    intro: String
  }
  ,components: {
    NavBar, Header, Footer,MovieList
  }
}
</script>
<style scoped>

</style>