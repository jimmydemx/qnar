<template>
    <div class="block">
    <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
    <el-carousel height="150px">
      <el-carousel-item v-for="item in items" :key="item">
        <h3 class="small">
            <img :src="item" alt="">
            </h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
    data(){

        return{
            items:[
                'https://s3.jpg.cm/2021/07/02/In5wID.png',
                'https://s3.jpg.cm/2021/07/02/In5mt4.png',
                "https://s3.jpg.cm/2021/07/02/In5oUp.png",
                "https://s3.jpg.cm/2021/07/02/In54o6.png",
                



            ]

        }
    }

}
</script>


<style>
.block{
    margin-top: 0;
}
.el-carousel__item{
    margin-top: 0;

}
 .el-carousel__item h3 {
 
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

    .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

h3 img{
    max-width: 100%;
    height: auto;

}
</style>