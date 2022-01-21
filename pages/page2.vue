<template>
  <div>
    <h1>page2</h1>
    <div>
      <button @click="onAdd">add</button>
      <div v-for="(t, i) in getTodoList" :key="i">
        {{ i }} / {{ t.todo }} / {{ t.done }} /
        <button @click="onToggle(i)">toggle</button>
        <button @click="onDelete(i)">delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex'

export default {
  name: 'Page2Page',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      getTodoList: 'constant/getTodoList'
    })
  },
  methods: {
    ...mapActions({
      ACT_ADD_TODO: 'constant/ACT_ADD_TODO',
      ACT_DONE_TOGGLE: 'constant/ACT_DONE_TOGGLE',
      ACT_DELETE_TODO: 'constant/ACT_DELETE_TODO'
    }),
    ...mapMutations({
      ADD_TODO: 'constant/ADD_TODO',
      DONE_TOGGLE: 'constant/DONE_TOGGLE',
      DELETE_TODO: 'constant/DELETE_TODO'
    }),
    ...mapState({}),
    onAdd () {
      this.ACT_ADD_TODO({ todo: 'hello', done: false })
    },
    onToggle (i) {
      this.ACT_DONE_TOGGLE(i)
    },
    onDelete (i) {
      this.ACT_DELETE_TODO(i)
    }
  }
}
</script>

<style>

</style>
