<template>
    <div class="wrapper">
      <swiper :options="swiperOption" :v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for="item of list" :key="item.id"><img class="swiper-img" :src="item.imgUrl" alt=""></swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>


<script>
export default {
    name: 'HomeSwiper',
    props:{
        list: Array

    },
    data() {
        return{
            swiperOption:{
                pagination: '.swiper-pagination',
                loop:true
            },
            swiperList: [{
                id: '0001',
                imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vcimg/3ccfc3d5bd540a537ebfbd8a08649900.jpeg'
            },{
                id:'0002',
                imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vcimg/06159c91f87c2cfbecd9294f93fff700.jpeg'                 
             },{
                id:'0003',
                imgUrl:'https://imgs.qunarzz.com/vs_ceph_vcimg/c19d77cffc63cce31dcd336c7879fc1d.jpeg'
                   
             }]
        }

    },
    computed:{
        showSwiper(){
            return this.list.length
        }


    }
    
}
</script>


<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background:#fff
.wrapper 
    overflow:hidden
    width: 100%
    height:0
    padding-bottom 27.5%
    background:#eee
    .swiper-img
      width:100%


</style>



