<template>
<div>
    <div class="headcontainer">
        <div class="left">
            <i class="iconfont">&#xe64e;</i>
        </div>
            <form class="middle">
                <input type="text" name="" id="" class="iconfont" :placeholder="icon">
            </form>
        <div class="right">City
            <i class="iconfont">&#xe64a;</i></div>    
        
    </div>
  </div>
</template>

<script>

export default {
    data(){
        return{
            icon:'\ue632 Search Here'

        }
    },
}
</script>

<style>
@import '../../../assets/reset2/home/header.css';
@import "../../../assets/styles/iconfont.css";
</style>