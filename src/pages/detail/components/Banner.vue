<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg" alt="">
            <div class="banner-info">
                <div class="banner-title">{{this.sightName}}</div>
                <div class="banner-number banner-icon"><span class="iconfont">&#xe632;</span>{{this.bannerImgs.length}}</div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-show="showGallary"
        @close="handleGallaryClose"></common-gallary>
    </div>
</template>

<script>

import CommonGallary from '../../../common/gallary/Gallary'
export default {
    name: 'banner',
    props:{
        sightName: String,
        bannerImg:String,
        bannerImgs:Array

    },
    data(){
        return{
        imgs:['https://himg1.qunarzz.com/imgs/201911/05/C.4kN3S3GXlHeBCdLy2480s.jpg',
                'https://imgs.qunarzz.com/vs_ceph_vcimg/1cfbdaa2682ada2f854ea6114b3677c8.jpeg'],
        showGallary:false        
        }
    },

    components:{
        CommonGallary 
   },
   methods:{
       handleBannerClick(){
           this.showGallary=true

       },
       handleGallaryClose(){
           this.showGallary=false
       }
   }      
}
</script>


<style lang="stylus" scoped>
.banner
    position:relative
    overflow hidden
    height : 0
    padding-bottom:55%
    .banner-img
        width :100%
    .banner-info
        position:absolute 
        display:flex
        left:0
        right :0
        bottom:0
        line-height:.6rem
        color: #fff
        background-image: linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,0.8))
        .banner-title
            flex:1
            font-size 0.32rem
            padding: 0 .2rem
        .banner-number
            padding 0 .4rem
            margin 0 0.14rem
            line-height :.4rem
            height 0.42rem
            border-radius 0.32rem
            // border: 2px yellow dashed
            background:rgba(0,0,0,0.8)
            font-size .24rem
            .banner-icon
                font-size:.24rem
</style>