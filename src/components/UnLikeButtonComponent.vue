<template>
    <button  class="btn btn-white btn-block display-4 m-0" v-on:click="unLikeMovie(movie)" >
        <span class="mobi-mbri mobi-mbri-close mbr-iconfont mbr-iconfont-btn" style="color:rgb(204, 41, 82);"></span>
    </button>
</template>
<script>
    // const localStore = JSON.parse(localStorage.getItem("liked-movies-vue-app"))
export default {
   name: "UnLikeButtonComponent"
,props: {
    movie: Object
},
components:{},
methods:{
    unLikeMovie(){

    }
},
}
</script>
<style scoped>
.btn{
    border-radius: 20px;
}
</style>