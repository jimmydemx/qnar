<template>
<div>
<banner></banner>
<detail-header></detail-header>
<div class="content">
<detail-list :list="list"></detail-list>
</div>
</div>

</template>

<script>
import banner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import detailList from './components/List.vue'
export default {
    name: 'DetailBanner',
     components:{
        banner,
        DetailHeader,
        detailList
   },
   data(){
      return {
         list:[
            {title:'成人票',
               children:[
                  {title:'成人三馆联票',
                     children:[
                        {title:'成人三馆联票 -某连锁店销售'}
                      ]
                  },

                  {title:'成人五馆联票'}
               ]
            },
            {title:'学生票'},
            {title:'儿童票'},
            {title:'特惠票'}
         ]  
      }
   }
    
}
</script>


<style lang="stylus" scoped>
.content
   height:50rem


</style>