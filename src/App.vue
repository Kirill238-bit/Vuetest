<template>
    <div class="app">
        <router-link to="/">Главная</router-link>
        <router-link to="/popup">Страница с попапом</router-link>

        <router-view>
        </router-view>
    </div>
</template>

<script>
export default{

}
</script>

<style>
a{
    text-decoration: none;
    color:#4CAF50;
    border: 2px solid #4CAF50;
    padding:8px;
    display: block;
    float: right;
    margin:20px
}
</style>