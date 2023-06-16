<script setup lang="ts">
const { $client } = useNuxtApp();

const hello = await $client.
</script>

<template>
  <div>
    <p>{{ hello }}</p>
  </div>
</template>
