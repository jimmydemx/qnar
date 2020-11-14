<template>

    <div class="list">
        <ul class="item">
            <li class="item">A</li>
            <li class="item">A</li> 
            <li class="item">A</li> 
            <li class="item">A</li> 
            <li class="item">A</li> 

    
        </ul>
        
    </div>
</template>

<script>
export default {
    name: "CityAlphabet"

}
</script>

<style lang="stylus" scoped>
@import url("../../../assets/styles/variables.css");
.list
    display flex
    flex-direction column
    position absolute
    justify-content center
    right:0
    top:8.58rem
    width:.4rem
    
    .item
        line-height: .34rem
        text-align : center
        color var(--background)

</style>