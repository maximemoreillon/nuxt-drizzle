<template>
  <div>
    <h1>Movie details</h1>
    <p>
      <NuxtLink href="/movies">Movie list</NuxtLink>
    </p>
    <div v-if="error">Failed to query movie</div>
    <template v-if="movie">
      <p>Title: {{ movie.title }}</p>
      <p>
        <button @click="deleteMovie">Delete</button>
      </p>
    </template>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { id } = route.params;
const { data: movie, error } = await useFetch(`/api/movies/${id}`);

async function deleteMovie() {
  if (!confirm(`Delete movie?`)) return;
  await $fetch(`/api/movies/${id}`, {
    method: "DELETE",
  });
  await navigateTo("/movies");
}
</script>
