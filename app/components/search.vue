<template>
  <form @submit.prevent="submit">
    <input type="text" v-model="search" placeholder="Search" />
    <button type="submit">Search</button>
  </form>
</template>

<script setup lang="ts">
const route = useRoute();

const search = ref(route.query.search);

function submit() {
  navigateTo({ query: { ...route.query, search: search.value || undefined } });
}
</script>
