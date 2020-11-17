


export default{
    actions:{
        changeCity(ctx,city){
            console.log(city)
            ctx.commit('changeCiudad',city)

        }
    },
    mutations:{
        changeCiudad(state, city) { 
            // state可以作为参数传入
            state.city=city
            try{
            localStorage.city=city;
            }
            catch (e){}
        }
    }

}