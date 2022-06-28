<template>
    <button   class="btn btn-white-outline btn-sm display-4 m-1" @click="likeMovie(movie)">
        <span class="mobi-mbri mobi-mbri-like mbr-iconfont mbr-iconfont-btn" style="color:rgb(46, 137, 237);"></span>
    </button>
</template>
<script>
export default {
   name: "LikeButtonComponent"
,props: {
    movie: Object
},
components:{},
methods:{

},
}
</script>
<style scoped>
.btn{
    border-radius: 40px;
}
</style>
