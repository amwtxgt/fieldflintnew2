<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  const d = ref(1);
  console.log(d.value);
</script>
