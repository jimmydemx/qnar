<template>
<div>
    <div class="search">
        <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或者拼音" />
    </div>    
    <div class="search-content border-bottom" v-show="keyword">
        <ul>
            <li class="search-item border-bottom" v-for="(item,p) of list" :key="p"
            @click="handleCityClick(item.name)"
            >{{item.name}}</li>
            <li class="search-item border-bottom" v-show="listshow">没有找到匹配数据</li>
        </ul>

    </div>
</div>

</template>

<script>
export default {
    name:"CitySearch",
    props:{
        cities:Object
    },
    data(){
        return{
            keyword: "",
            list:[],
            timer:null,
            
        }
    },
    watch:{
        keyword(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            this.time=setTimeout(()=>{
                const result=[];
                Object.keys(this.cities).forEach(element => {
                    // console.log(element)
                    this.cities[element].forEach((value)=>{
                        if(value.spell.indexOf(this.keyword)>-1 || value.name.indexOf(this.keyword)>-1){
                            result.push(value)
                        }
                        
                
                    });
                });
                this.list=result;
            },100)
        }
    },
    computed:{
        listshow(){
            return !this.list.length;
        }

    },
      methods:{
        handleCityClick(city){
            this.$store.dispatch("changeCity",city);
            this.$router.push('/')
            
        }

    }  
  
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
        padding 0.1rem
.search-content
    overflow: hidden
    position absolute
    top:3.00rem
    left:0
    right:0
    bottom:0    
    background: green
    z-index 1
    .search-item
        text-align: left 
        line-height : 0.62rem
        padding-left:.2rem
        background:#fff
        color: #666
        

</style>