import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuetify from 'vuetify'
import TreeView from "vue-json-tree-view"
import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg.css'
import Hello from '@/components/Hello'
import MsgApi from '@/components/MsgApi'

Vue.use(Router)
Vue.use(VueAxios, axios)
Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})
Vue.use(TreeView)
Vue.use(VueFormGenerator)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MsgApi',
      component: MsgApi
    },
    { path: '*', component: { template: '<div>Not Found</div>'} }
  ]
})
