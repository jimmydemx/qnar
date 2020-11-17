<template>
    <div>
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :icon="iconList"></home-icons>
        <home-recommend :recommend="recommendList"></home-recommend>
        <home-weekend :weekend="weekendList"></home-weekend>
      
    </div>
</template>

<script>
import HomeHeader from  './components/Header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
    name: 'Home',
    components:{
        HomeHeader:HomeHeader,
        HomeSwiper: HomeSwiper,
        HomeIcons:HomeIcons,
        HomeRecommend:HomeRecommend,
        HomeWeekend:HomeWeekend
    },
    data:function () {
    return {
      city: "",
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
    },
    
    methods:{
     getHomeInfo(){
        axios.get('../../static/mock/index.json').then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
            console.log(res);
            res=res.data;
            if(res.ret && res.data){
                const data=res.data;
                this.city=data.city;
                this.swiperList=data.swiperList;
                this.iconList=data.iconList;
                this.recommendList=data.recommendList;
                this.weekendList=data.weekendList;
            }

            console.log(res);

        }

    },
    mounted(){
        this.getHomeInfo();
    }
}
</script>

<style lang="stylus" scoped>

</style>
