<template>
<div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hot="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
</div>
</template>


<script>
import axios from 'axios'
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
export default {
    name: 'City',
    components:{
        CityHeader:CityHeader,
        CitySearch:CitySearch,
        CityList:CityList,
        CityAlphabet:CityAlphabet
    },
    data(){
        return{
            cities:{},
            hotCities:[]
        }
    },
    methods:{
        getCityinfo(){
        axios.get('../../static/mock/city.json').then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc(res){
            console.log(res)
            res=res.data
            if(res.ret && res.data){
                const data= res.data;
                this.cities=data.cities
                this.hotCities=data.hotCities

            }

        }
    },
    mounted(){
 
        this.getCityinfo()



    }

    
}
</script>


<style lang="stylus" scoped>

</style>