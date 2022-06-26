<template>    
<section once="footers" class="cid-t9NzCu7vHi" id="footer6-2"><div class="container">
        <div class="media-container-row align-center mbr-white">
            <div class="col-12">
                <p class="mbr-text mb-0 mbr-fonts-style display-7">
                    {{info}}
                </p>
            </div>
        </div>
    </div>
</section>
</template>
<script>
export default{
   name: "FootComponent",
   props: {
       info: String,
   }
}
</script>

<style lang="less" scoped>

</style>