<template>
    <div id="app">
        <keep-alive exclude="Detail"> <!--只有Detail不做缓存-->
            <router-view/>
        </keep-alive>

    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
