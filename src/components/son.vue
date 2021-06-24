<template>
  <div>son</div>
</template>

<script>
export default {
  inheritAttrs: false,
  created() {
    console.log(this.$listeners)
    this.$emit('tempFn')
  }
}
</script>
