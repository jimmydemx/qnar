<template>
<div>
    <div class="item" v-for="(item,index) of list" :key="index">
        <div class="item-title border-bottom">
            <span class="item-title-icon"></span>
            <span class="item-content">{{item.title}}</span>
        </div>
        <div v-if="item.children" class="item-children">
            <detail-list :list="item.children"></detail-list>
        </div>

    </div>
</div>
    
</template>



<script>
export default {
    name: "detailList",
    props:{
        list:Array
    },

}
</script>


<style lang="stylus" scoped>
.item-title
    line-height :.8rem
    font-size 0.32rem
    padding: 0 .2rem
    .item-title-icon
        position:relative
        left 0.06rem
        top 0.06rem
        display:inline-block
        width:0.86rem
        height 0.86rem
        margin 0.1rem
        background-color: #cccccc
        background: url(https://www.climbingulassai.com/wp-content/uploads/2019/11/315-3159119_icon-ticket-buy-tickets-icon-hd-png-download.jpg) 0 -0rem no-repeat
        margin-right:.1rem
        background-size: contain;
    .item-content
        vertical-align:middle
.item-children
    paddiing :0 .2rem

    
</style>