<template>
  <div>son</div>
</template>

<script>
export default {
  created() {
    console.log(this.$listeners)
    this.$emit('tempFn')
  }
}
</script>
