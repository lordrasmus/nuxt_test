import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'


// https://github.com/nathantsoi/vue-native-websocket/issues/96

export default ({ store }, inject) => {
	Vue.use(VueNativeSock, 'ws://localhost:8080/CommandSocket', {store: store })
}
