<template>
	<div>
  <h1>Hello world!</h1>
   <p>Computed reversed message: "{{ counter }}"</p>
   <button v-on:click=inc()>inc</button>
   </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    counter () {
      return this.$store.state.counter
    }
  },
  methods: {
    inc(e) {
      this.$store.commit('counter/increment')
    }
  }
}
</script>
