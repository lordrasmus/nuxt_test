import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'


// https://github.com/nathantsoi/vue-native-websocket/issues/96

// websocket/

export default ({ store }, inject) => {
	Vue.use(VueNativeSock, 'ws://localhost:8080/CommandSocket', {
		store: store, 
		mutations: 
		{
			SOCKET_ONOPEN:"websocket/SOCKET_ONOPEN",
			SOCKET_ONCLOSE:"websocket/SOCKET_ONCLOSE",
			SOCKET_ONERROR:"websocket/SOCKET_ONERROR",
			SOCKET_RECONNECT:"websocket/SOCKET_RECONNECT",
			SOCKET_RECONNECT_ERROR:"websocket/SOCKET_RECONNECT_ERROR",
			SOCKET_ONMESSAGE:"websocket/SOCKET_ONMESSAGE",
		 } 
	})
}
