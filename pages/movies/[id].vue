<template>
  <div>
    <h1>Movie</h1>
    <p>Title: {{ movie.title }}</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { id } = route.params
const {
  data: movie,
  pending,
  error,
  refresh,
} = await useFetch(`/api/movies/${id}`)
</script>
