// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import common from '@/common/common.js'
import VueLazyload from 'vue-lazyload'  //引入这个懒加载插件
import 'swiper/dist/css/swiper.css';
import './rem'
// import VueFullPage from 'vue-fullpage.js';
// ...
 
// Vue.use(VueFullPage);
Vue.use(ElementUI);
// Vue.use(iView);
Vue.use(VueLazyload);

Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
// 	if (from.path == '/'&&to.path!='/index') {  //进登录页面,如果不是刷新就正常跳转，刷新的话就跳到index页面
// 		next({ path: '/index' });
// 	}else{
//     next();
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



