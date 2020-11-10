<template>

    <div class="header">
        <div class="iconfont">&#xe624;</div>
        <div class="city-head">城市选择</div>
        
    </div>
</template>

<script>
export default {
    name:'CityHeadr'

}
</script>

<style lang="stylus" scoped>
@import url("../../../assets/styles/variables.css");
.header
    display:flex
    overflow:hidden
    height: .86rem
    line-height 0.86rem
    text-align: center
    color:#fff
    font-size: 0.4rem
    background:var(--background)
    .city-head
        flex:1  

</style>