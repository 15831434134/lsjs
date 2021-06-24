<template>
  <div class="hello">
    <a-button @click="handleTest">{{ msg }}</a-button>
    <div>{{ id }} -- {{ getId }} --{{ doneTodos(true) }} --{{ doneTodosCount(true) }}</div>
    <div>{{ todos }}</div>
    {{ $route.meta.title }}
    <!-- <router-link :to="{path:'user'}">user</router-link>
    <router-view /> -->
  </div>
</template>

<style scoped>
@import url('./hello.less');
</style>
