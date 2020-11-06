<template>
<div>
<div class="recommend-title">特惠度假</div>
<ul>
    <li class="item border-bottom" v-for="item of recommend" :key="item.id">
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
    name: "HomeRecommend",
    props:{
        recommend:[]

    },
    data(){
       return {recommendlist:[
           {
            id:'0001',
            imgUrl:'https://imgs.qunarzz.com/vs_ceph_b2c_001/be5b8bab-5961-46bb-946f-f3c22f10e685.jpg_r_480x320x95_2a60f63f.jpg',
            title:'北京当地游玩 一日跟团',
            desc:'含有长城门票 11点班车',

        },
           {
            id:'0002',
            imgUrl:'https://imgs.qunarzz.com/vs_ceph_b2c_001/3c3d3ac2-a21f-44ff-8b23-ca713125939a.jpg_r_480x320x95_53749302.jpg',
            title:'北京天安门广场+毛主席纪念堂+故宫博物馆',
            desc:'中国国家博物馆深度纯玩一日游',

        },
           {
            id:'0003',
            imgUrl:'https://imgs.qunarzz.com/vs_ceph_b2c_001/d7e5e302-0e1b-4662-a45c-d0a879e8de07.jpg_r_480x320x95_2424c078.jpg',
            title:'北京红螺寺观景+观音庙祈福',
            desc:'一日游·天天发团',

        },
           {
            id:'0004',
            imgUrl:'https://imgs.qunarzz.com/vs_ceph_b2c_001/d816206e-977f-469c-b0ed-729ba2df091f.jpg_r_480x320x95_f52b6db3.jpg',
            title:'北京八达岭长城纯玩一日跟团游',
            desc:'（含长城门票·五环内免费上门接）',

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
    overflow:hidden
    display:flex
    height:1.9rem    
    .item-img
        height 1.7rem
        padding:0.1rem
    .item-info
        text-align left
        flex:1
        padding:.1rem
        .item-title
            line-height :.54rem
            font-size:.32rem 
        .item-desc
            list-style height 0.4rem
            color:#ccc   
        .item-button
            line-height .44rem
            margin-top:.16rem
            background:#ff9300
            padding:0.1rem
            border-radius:0.06rem
            color: #fff     

</style>