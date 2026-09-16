<template>
  <v-btn
    prepend-icon="mdi-arrow-left"
    text="Return"
    to="/movies"
    variant="flat"
  />
  <h2 class="my-2">Movie details</h2>
  <v-alert v-if="error">
    {{ error }}
  </v-alert>
  <template v-else-if="movie">
    <p>Title: {{ movie.title }}</p>
    <p>ID: {{ movie.id }}</p>
    <v-btn
      @click="deleteMovie"
      prepend-icon="mdi-delete"
      text="delete"
      variant="outlined"
      color="red"
      class="my-2"
    />
  </template>
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
