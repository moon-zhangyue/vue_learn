<template>
  <div id="app">
    <keep-alive exclude="Detail"> <!--只有Detail不做缓存-->
      <router-view/>
    </keep-alive>

  </div>
</template>
