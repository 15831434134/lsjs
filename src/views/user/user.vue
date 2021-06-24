<template>
  <div>
    <Test id="123" type="number" keys="kkk" l-d="lll" @tempFn="fatherFn" />
  </div>
</template>

<script>
import { Mixins } from '@/mixins'
import Test from '@/components/test.vue'
export default {
  components: { Test },
  mixins: [Mixins],

  methods: {
    fatherFn() {
      console.log('father function!')
    }
  }
}
</script>
