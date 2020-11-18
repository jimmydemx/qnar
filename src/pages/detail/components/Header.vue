<template>    
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>    
        <div v-show="!showAbs" :style="opacityStyle">
            <router-link  class="header-fixed"  to="/">
                 <div class="iconfont">&#xe624;</div>
                 <div class="header-fixed-back">景点详情</div>
                </router-link>
                
        </div>
        
    

    </div>
</template>



<script>
export default {
    name:'DetailHeader',
    data(){
        return{
            showAbs:true,
            opacityStyle:{
                opacity:0
            }
        }
    },
    activated(){
        window.addEventListener("scroll", this.handleScroll)
    },
    deactivated(){
        window.addEventListener("scroll", this.handleScroll)

    },
    methods:{
        handleScroll(){
            const top=document.documentElement.scrollTop
            console.log(document.documentElement.scrollTop)
            if(top>60){
                let opacity=top/ 140;
                opacity=opacity>1? 1:opacity;
                this.opacityStyle ={opacity};
                this.showAbs=false
            }else this.showAbs=true;
        }
    }

    
}
</script>



<style lang="stylus" scoped>
@import url("../../../assets/styles/variables.css");
.header-abs  
    position absolute
    left:0.5rem
    top:.2rem
    width 0.8rem
    height 0.8rem
    border-radius: .4rem
    background : rgba(0,0,0,0.8)
    text-align: center
    line-height .8rem
    .header-abs-back
        color:#fff
        font-size: .4rem
.header-fixed
    display:flex
    position:fixed
    top:0
    left:0
    right:0
    height: .86rem
    line-height 0.86rem
    text-align: center
    color:#fff
    font-size: 0.4rem
    background:var(--background)
    .header-fixed-back
        flex:1
   

</style>