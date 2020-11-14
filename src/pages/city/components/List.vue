<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div> 

                    </div>
                </div>
            </div>

            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                    <div class="button-list">
                        <div class="button-wrapper" v-for="item of hot" :key="item.id">
                            <div class="button">{{item.name}}</div> 
                        </div>                   
                    </div>
                </div>
            </div>
            <div class="area1" v-for="(item,key1) of cities" :key="key1">
                <div class="title border-topbottom">{{key1}}</div>
                <div class="item-list" v-for="innerItem of item" :key="innerItem.id">
                    <div class="item border-bottom">{{innerItem.name}}</div>
                </div>
                
            </div>
    </div>
</template>


<script>
import Bscroll from 'better-scroll'
export default {
    name:"CityList",
    props:{
        hot: Array,
        cities: Object



    },
    mounted(){
        this.scroll=new Bscroll(this.$refs.wrapper);
        console.log("cities=",this.cities)
    }
    

}
</script>


<style lang="stylus" scoped>
.border-topbottom
  &:before
      border-color: #ccc
  &:after 
      border-color: #ccc
.border-bottom
  &:before
      border-color: #ccc

.list
    overflow hidden
    position:absolute
    top:3.00rem
    left:0
    right:0
    bottom:0         
    .title
        line-height :.44rem
        background #eee
        font-size :.26rem
        padding-left:.2rem
        color:#666
    .button-list
        padding: .1rem .6rem .1rem .1rem
        text-align left
        .button-wrapper
            display: inline-block
            width:30.33%      
            .button            
                margin: .1rem
                padding:.1rem 0
                text-align: center
                border 0.02rem solid #ccc
                border-radius: .06rem
    .area1
        
        .item-list
            .item
                text-align left
                line-height: .76rem
                padding-left .2rem
                




</style>