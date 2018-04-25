// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./css/reset.scss"
import "./css/mystyle.scss"
Vue.config.productionTip = false

import store from './store';

import i18n from './lang' // Internationalization

import '@/mixin'



Vue.use(ElementUI, {
    size: 'medium', // set element-ui default size
    i18n: (key, value) => i18n.t(key, value)
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    i18n,
    components: { App },
    template: '<App/>'
})