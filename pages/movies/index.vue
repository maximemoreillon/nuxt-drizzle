<template>
  <div>
    <h1>Movies</h1>
    <p>
      <NuxtLink href="/movies/new">New Movie</NuxtLink>
    </p>
    <p></p>
  </div>
</template>

<script setup lang="ts">
const { data: movies, pending, error, refresh } = await useFetch("/api/movies")
</script>
