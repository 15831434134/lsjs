import Hello from './hello.vue'
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'
import { CHANGE_ID, ADD_ID, ADD_TODOS } from '@/store/mutation-types'
import { NAME_SPACE_A } from '@/store/modules'
import _ from 'loadsh'
export default {
  ...Hello,
  data() {
    return {
      msg: 'click'
    }
  },

  created() {
    console.log(_.chunk(['a', 'b', 'c', 'd'], 2))
  },
  computed: {
    ...mapState(NAME_SPACE_A, ['id', 'todos']),
    ...mapGetters(NAME_SPACE_A, ['doneTodos', 'doneTodosCount', 'getId'])
  },
  methods: {
    handleTest() {
      this.CHANGE_ID(34), this.$router.push('/user')
      this.dealyB({ value: { id: 3, text: '', done: true } }).then((res) => {
        console.log(res)
      })
    },
    ...mapMutations(NAME_SPACE_A, [CHANGE_ID, ADD_ID, ADD_TODOS]),
    ...mapActions(NAME_SPACE_A, ['dealy', 'dealyB'])
  }
}
