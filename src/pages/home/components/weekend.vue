<template>
  <div class="weekend">
      <dt>You might want...</dt>
      <dl>
            <button :class="{ active: !isActive }"  @click="buttonclicked">Hike</button>
            <button :class="{ active: isActive }"  @click="buttonclicked">Dive</button>
            <dd v-if="!isActive">
                 <div v-for="item in items_hike" :key=item.num>
                     <img :src="item.img" alt="">
                     <p>{{item.text}}</p>
                </div>   

            </dd>

            <dd v-if="isActive">
                 <div v-for="item in items_dive" :key=item.num>
                     <img :src="item.img" alt="">
                     <p>{{item.text}}</p>
                </div>   

            </dd>
      </dl>

  </div>


</template>

<script>
export default {
    props:{
        items_dive:{
            type:Array,
            // default:[],
        },

        items_hike:{
        type:Array,
        // default:[],
        }
    },
    data(){
        return{
            isActive:1,
            // items:[
            //     {
            //     num:1,
            //     img:"https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/7d9b233c71cad13ded0013f9c9cec635.jpg",
            //     text:"Old Town",
            //     },
            //     {
            //     num:2,
            //     img:"https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/fd16ccffb2e2376ff370bda3bebebd71.jpg",
            //     text:"Beaches",
            //     },
            //     {
            //     num:3,
            //     img:"https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/c2ae82fcc9fa11fa253e5919c49bcfbf.jpg",
            //     text:"Park",
            //     },
            //     {
            //     num:4,
            //     img:"https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/5a11974656794b4715156501be10c1b7.jpg",
            //     text:"Road of Village",
            //     }
            // ]
        }
    },
    methods:{
        buttonclicked(){
            this.isActive=!this.isActive;

        }
        
    }

}
</script>

<style>
.weekend, .weekend *{
    margin-top: 0;
}


button {
    color: #000;
    background-color: #fff;  
     border: 1px solid #013580;
    padding: .3em 2em;
    margin-top: .3em;
    font-weight: 400;
} 

.weekend button.active{
    color: #FFF;
    background: #013580;
    border: 1px solid #013580;
    padding: .3em 2em;
    margin-top: .3em;
    font-weight: 400;

}

.weekend dl{
    width: 90%;
    margin:0 auto;
}

.weekend dd{
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.5em;
}

.weekend dd>div{
    flex:1 0 46%;
    
    
}

.weekend dd>:nth-child(2n){
    margin-left:1em;

}


.weekend dd>div>img{
    width: 100%;    
}

.weekend dd>div>p{
    text-align: center
}
</style>