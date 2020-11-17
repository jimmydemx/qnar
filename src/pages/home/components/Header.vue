<template>
    <div class="header">
        <div class="header-left"><span class="iconfont">&#xe624;</span></div>
        <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
        <router-link to="/city">  
        <div class="header-right">{{this.city}}<span class="iconfont tri">&#xe64a;</span></div>
        </router-link>
    </div>
</template>


<script> 
import {mapState, mapGetters} from 'vuex'
export default {
    name: 'HomeHeader',
    props: {
        city: String
    },
    computed:{
        ...mapState(['city']),
        ...mapGetters(['doubleCity'])
    }
}

</script>

<style scoped>

.header{    
    @import url("../../../assets/styles/variables.css");
    display: flex;
    line-height: .86rem;
    background-color: var(--background);
    color: #fff;
    }
    .header-left{
        width: .64rem;
    }
    .header-right{
        min-width: 1.04rem;
        padding:.1rem;
        color :#FFF;
    }
    .header-input{
        flex:1;
        text-align:left;
        height: 0.64rem;
        line-height:0.64rem;
        margin-top: .12rem;
        margin-left :.2rem;
        padding-left : 0.1rem;
        background: #fff;
        border-radius: .1rem;
        color: #ccc;
    }
        .tri{
            font-size: 0.14rem;
        }
</style>