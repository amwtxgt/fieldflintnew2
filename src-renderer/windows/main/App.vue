<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts" setup>

  const a = ref(1)
  console.log(a.value)
</script>
