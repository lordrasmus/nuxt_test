<template>
	<div>
  <h1>Hello world!</h1>
   <p>Computed reversed message: "{{ counter }}"</p>
   <button v-on:click=inc()>inc</button><br>
   <input v-model="message" @keyup.enter="send()" type=text><button v-on:click=send()>send</button>
   </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
	data:  function() {
		return {
			message: "test"
		};
	},
  computed: {
    counter () {
      return this.$store.state.counter
    }
  },
  methods: {
    inc(e) {
      this.$store.commit('counter/increment')
    },
    send(e) {
		this.$store.dispatch('websocket/sendMessage',this.message)
    }
  }
}
</script>
