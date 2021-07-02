<template>
  <div class="recommendation">
      <dl>
          <dt>What is Hot?</dt>
              <dd  class="container border-bottom" v-for='item in items' :key=item.title>
                  <div class="imgsize">
                  <img :src="item.img" alt="">
                    </div>
                  <div class="text">
                       <h3>{{item.title}}</h3>
                       <h5>{{item.subtitle}}</h5>
                       <button>Check</button>    
                  </div>
                  
              </dd>
      </dl>
    

  </div>
</template>

<script>
export default {
    props:{
        items:{
            type:Array,
            default:[]
        }
    }
    // data(){
    //     return{
    //         items:[
    //             {
    //                 img:"https://imgs.qunarzz.com/vs_ceph_vs_tts/abfe690d-a57c-4dd3-8e77-f1b0e396775d.jpg_r_390x260x95_d5f078e2.jpg",
    //                 title:"Li Lake ",
    //                 subtitle:'the lake that takes your breath away,the lake that takes your breath away'

    //             },
    //              {
    //                 img:"https://imgs.qunarzz.com/vs_ceph_vs_tts/abfe690d-a57c-4dd3-8e77-f1b0e396775d.jpg_r_390x260x95_d5f078e2.jpg",
    //                 title:"Li Lake1 ",
    //                 subtitle:'the lake that takes your breath away'

    //             },
    //         ]
    //     }

    // }

}
</script>

<style>

.recommendation, .recommendation *{
    margin-top: 0;
}

dt{
    padding: 0.8em;
    background-color: #eee;

}
.recommendation .container{
    display: flex;  
}

dd{
    height: 12vh;
}

.recommendation .imgsize{
    flex:0 0 30%;
  

}
.recommendation img{
    width: 100%;
   
}

.recommendation .text{
    text-align: left;
    flex:0 0 70%;
}

.recommendation button{
    background-color:#013580;
    padding: 0.2em .2em;
    border-radius: 0.2em;
    border: 0;
    width: 4em;
    color: #fff;
    box-shadow: none;

}

.recommendation h5{
    font-weight: normal;
    width: 18em;
    color: #ccc;
    word-break:keep-all;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;

}
</style>