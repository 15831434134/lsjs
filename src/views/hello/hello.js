import Hello from './hello.vue'
export default {
  ...Hello,
  data() {
    return {
      msg: '123213123---kkk'
    }
  },
  created() {
    console.log(123)
  },
  methods: {
    handleTest() {
      this.msg = this.$store.state.id
    }
  }
}
