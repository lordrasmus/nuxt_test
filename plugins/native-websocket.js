import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'
//import store from '~/store'

Vue.use(VueNativeSock, 'ws://localhost:8080/CommandSocket') //, { store: store })