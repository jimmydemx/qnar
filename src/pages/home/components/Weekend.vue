<template>
<div>
<div class="recommend-title">周末去哪儿</div>
<ul>
    <li class="item border-bottom" v-for="item of weekend" :key="item.id">
        <img  class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
        <button class="item-button">查看详情</button>
        </div>
    </li>
</ul>
</div>
</template>


<script>
export default {
    name: "HomeWeekend",
    props:{
        weekend:Array
    },
    data(){
       return {weekendList:[
           {
            id:'0001',
            imgUrl:'https://imgs.qunarzz.com/vs_ceph_vcimg/b8c4527c41649814cc4cf86880abba54.jpeg',
            title:'北京当地游玩 一日跟团',
            desc:'含有长城门票 11点班车'

        },
           {
            id:'0002',
            imgUrl:'https://imgs.qunarzz.com/vs_ceph_vcimg/b8c4527c41649814cc4cf86880abba54.jpeg',
            title:'北京天安门广场+毛主席纪念堂+故宫博物馆',
            desc:'中国国家博物馆深度纯玩一日游'

        },
           {
            id:'0003',
            imgUrl:'https://imgs.qunarzz.com/vs_ceph_vcimg/b8c4527c41649814cc4cf86880abba54.jpeg',
            title:'北京红螺寺观景+观音庙祈福',
            desc:'一日游·天天发团'

        },
           {
            id:'0004',
            imgUrl:'https://imgs.qunarzz.com/vs_ceph_vcimg/b8c4527c41649814cc4cf86880abba54.jpeg',
            title:'北京八达岭长城纯玩一日跟团游',
            desc:'（含长城门票·五环内免费上门接）'

        },    
        ]}
    }
}
</script>


<style lang="stylus" scoped>
.recommend-title 
    margin-top: 0.4rem
    line-height :.8rem
    background #eee
    text-indent:0.2rem 
.item
    font-size:.64rem
    .item-title
        line-height :.7rem
        font-size:.64rem 
    .item-desc
        line-height 0.7rem
        color:#ccc   
    .item-button
        font-size 0.32rem
        margin-top:.16rem
        margin-bottom .16rem
        background:#ff9300
        padding:0.1rem
        border-radius:0.06rem
        color: #fff     
</style>