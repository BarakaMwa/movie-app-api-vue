<template>
<section>
<NavBar/>
<MovieHeader movie=@movie />
<Footer info="By Baraka Mwang'amba"/>
</section>

</template>
<script>
import MovieHeader from './MovieHeaderComponent'
import NavBar from './NavbarComponent'
import Footer from './FooterComponent'

export default {
    name: "MovieHeader",
    props: {
        movie: Object
    },
    components: {
        MovieHeader, NavBar, Footer
    }
}
</script>

<style scoped>

</style>