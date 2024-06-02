<template>
  <div>
    <h1>Movie details</h1>
    <p>
      <NuxtLink href="/movies">Movie list</NuxtLink>
    </p>
    <p>Title: {{ movie.title }}</p>
    <p>
      <button @click="deleteMovie">Delete</button>
    </p>
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

async function deleteMovie() {
  if (!confirm(`Delete movie?`)) return
  const options = {
    method: "DELETE",
  }
  await $fetch(`/api/movies/${id}`, options)
  await navigateTo("/movies")
}
</script>
