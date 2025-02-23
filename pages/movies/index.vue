<template>
  <div>
    <h1>Movies</h1>
    <p>
      <NuxtLink href="/movies/new">New Movie</NuxtLink>
    </p>
    <p>
      <ul>
        <li v-for="movie in movies" :key="movie.id">
          <NuxtLink :href="`/movies/${movie.id}`">{{ movie.title }}</NuxtLink>
        </li>
      </ul>
    </p>
  </div>
</template>

<script setup lang="ts">
const { data: movies} = await useFetch("/api/movies")
</script>
