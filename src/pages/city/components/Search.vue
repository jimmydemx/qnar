<template>
<div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或者拼音" />
</div>    

</template>

<script>
export default {
    name:"CitySearch"
}

</script>




<style lang="stylus" scoped>
@import url("../../../assets/styles/variables.css");
.search
    background : var(--background)
    height: .72rem
    padding: 0.1rem
    .search-input
        box-sizing border-box
        width:100%
        height 0.62rem
        line-height 0.62rem
        text-align:center
        border-radius:.06rem
        color:#666
        paddingL 0 .1rem
        

</style>