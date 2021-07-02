<template>
<div>
 
  <homeheader/>
  <carousel/>
  <homeicons/>
  <recommendation :items="items_hot"/>
  <weekend :items_dive="items_dive" :items_hike="items_hike"/>
</div>    
</template>


<script>
import axios from "axios"
import homeheader from './components/header'
import carousel from './components/Carousel'
import homeicons from './components/homeicons'
import recommendation from "./components/recommendation"
import weekend from "./components/weekend.vue"
export default {
  components:{
    homeheader,carousel,homeicons,recommendation,weekend
    },
    data(){
      return{
        items_hot:[],
        items_hike:[],
        items_dive:[],

      }
    },
  mounted(){

  axios.get('/static/mock/index.json').then(
    res=>{
    if(res.data.code){
      console.log("123",res.data.items_dive)
      this.items_hot=res.data.items_hot
      this.items_hike=res.data.items_hiking
      this.items_dive=res.data.items_diving

    }
  
    }
  )
    
  }
}  
</script>

<style>

</style>