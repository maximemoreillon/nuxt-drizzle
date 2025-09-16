<template>
  <v-card class="mx-auto" max-width="40rem">
    <v-toolbar>
      <v-btn icon="mdi-arrow-left" to="/movies" />
      <v-toolbar-title> Movie details </v-toolbar-title>
      <v-spacer />
      <v-btn @click="deleteMovie" icon="mdi-delete" />
    </v-toolbar>
    <v-card-text v-if="error">
      {{ error }}
    </v-card-text>
    <v-card-text v-if="movie">
      <v-row justify="space-between">
        <v-col cols="auto"> Title: {{ movie.title }} </v-col>
        <v-col cols="auto"> ID: {{ movie.id }} </v-col>
      </v-row>
    </v-card-text>
  </v-card>
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
