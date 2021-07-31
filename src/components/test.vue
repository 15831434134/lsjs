<template>
  <div>
    123213123 {{ $props }} {{ $attrs }}
    <input v-bind="$props" />
    <Son v-bind="$attrs" v-on="$listeners" a />
  </div>
</template>

<script>
import Son from './son.vue'
export default {
  inheritAttrs: false,
  components: { Son },
  props: ['id', 'keys', 'type'],
  mounted() {
    console.log(this.$props)
    console.log(this.$listeners)
    this.$listeners.tempFn()
  }
}
</script>
