<template>
  <div style="margin-top:0;">
      <div class="container">
          <div v-for="item in items_icon1" :key=item.des class="flexitem">
          <i class="iconfont" >{{item.name}}</i>
          <p style="margin-top:0;">{{item.des}}</p>
          </div>          
      </div>

      <div class="container">
          <div v-for="item in items_icon2" :key=item.des class="flexitem">
          <i class="imgrow1 iconfont" >{{item.name}}</i>
          <p style="margin-top:0;">{{item.des}}</p>
          </div>          
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
           
             items_icon1:[
                {
                    name:"\ue9db",
                    des:"Home", 
                },
                {
                    name:"\ue957",
                    des:"Flight", 
                },
                {
                    name:"\ue659",
                    des:"Travel", 
                },
                {
                    name:"\ue923",
                    des:"Car", 
                },
            ],
            items_icon2:[
                {
                    name:"\ue67e",
                    des:"Hotel", 
                },
                {
                    name:"\ue89d",
                    des:"Shopping", 
                },
                {
                    name:"\ue860",
                    des:"Credt", 
                },
                {
                    name:"\ue923",
                    des:"Ticket", 
                },
                {
                    name:"\ue619",
                    des:"Diamond", 
                },
            ]

        }
    }

}
</script>

<style>
.container{
    margin-top: 0;
    display: flex;
    justify-content: space-between;
}

.container>*{
    text-align: center;
    padding: 0.5em;
    margin-top: 0;
    flex:1;
    

}
/* 
.imgrow1{
   
    width: 80%
} */

.container>div>i{

    font-size:3em;
}
</style>