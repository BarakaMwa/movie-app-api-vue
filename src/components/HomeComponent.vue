/* eslint-disable vue/multi-word-component-names */
<template>
<section>
<NavBar/>
<Header/>
</section>

</template>
<script>
import NavBar from "./NavbarComponent.vue"
import Header from "./HeaderComponent.vue"
export default {
  name: 'HomeComponent',
  props: {
    intro: String
  },components: {
    NavBar, Header,
  }
}
</script>
<style scoped>

</style>