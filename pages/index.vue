<template>
  <div>
    <div>{{ test1 }}</div>
    <div>{{ test2 }}</div>
    <div><button @click="setDispatchTest">dispatch</button></div>
    <div><button @click="setCommitTest">commit</button></div>
    <div><nuxt-link to="page1">go page1</nuxt-link></div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'IndexPage',
  computed: {
    ...mapState(['test1', 'test2'])
  },
  methods: {
    ...mapActions(['TIME']),
    ...mapMutations(['SET_TEST2']),
    setDispatchTest () {
      this.TIME('action')
    },
    setCommitTest () {
      this.SET_TEST2('mutation')
    }
    // setTest () {
    //   // this.$store.commit('SET_TEST', 'test2') // to mutations
    //   this.$store.dispatch('TIME', 'test234')
    // }
    // setDispatchTest () {
    //   this.$store.dispatch('TIME', 'dispatch - action')
    // },
    // setCommitTest () {
    //   this.$store.commit('SET_TEST2', 'commit - mutations')
    // }
  }
}
</script>
