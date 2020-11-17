<template>

    <div class="list">
        <ul class="item">
            <li class="item" v-for="item of letters" :key="item" :ref="item"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
             @click="handleLetterClick">{{item}}</li>
        </ul>
        
    </div>
</template>

<script>
export default {
    name: "CityAlphabet",
    props:{
        cities: Object
    },
    computed:{
        letters(){
            const letters=[]
            for (let i in this.cities){
                letters.push(i)
                console.log(this.cities)
            }
            return letters
        }
    },
    data(){
        return{
            touchStatus: false
        }
    },
    methods:{
        handleLetterClick(e){
            this.$emit("change",e.target.innerText)
        },
        handleTouchStart(){
            this.touchStatus= true


        },
        handleTouchMove(){
            if(this.touchStatus){
                const startY= this.$refs['A'][0].offsetTop;
                console.log(startY)

            }
        },
        handleTouchEnd(){
            this.touchStatus=false;
        }
        
    }

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