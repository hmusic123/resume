<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script src="https://unpkg.com/vue-lazyload/vue-lazyload.js"></script>
<script>
// Vue.use(VueLazyload)
export default {
  name: 'App'
}
</script>








<style>
body{
    height: 100%;
    overflow-x: hidden;
    /* min-height: 792px; */
    /* -moz-user-select: none; /*火狐 */
    /* -webkit-user-select: none;  webkit浏览器 */
    /* -ms-user-select: none;   IE10 */
    /* -khtml-user-select: none; 早期浏览器 */
    /* user-select: none;  */
    background: white;
    font-size: 0.75rem;
    /* left:0.75rem;
    right: 0.75rem; */
    padding:0;
    margin:0;
}
a{
  text-decoration:none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}
#app::-webkit-scrollbar{
   display:none;
}
</style>
