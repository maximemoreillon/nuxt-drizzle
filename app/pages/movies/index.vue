<template>
  <h2>Movies</h2>

  <v-row>
    <v-col>
      <search v-model="searchQuery" @update:modelValue="page = 1" />
    </v-col>
    <v-spacer />
    <v-col cols="auto">
      <MovieCreateDialog />
    </v-col>
  </v-row>

  <v-alert v-if="error">
    {{ error }}
  </v-alert>
  <v-data-table-server
    v-else-if="data"
    :loading="pending"
    :headers="headers"
    :items="data.items"
    :items-length="data.total"
    v-model:itemsPerPage="itemsPerPage"
    v-model:page="page"
  >
    <template v-slot:item.title="{ item }">
      <NuxtLink :to="`/movies/${item.id}`">{{ item.title }}</NuxtLink>
    </template>
  </v-data-table-server>
</template>

<script setup lang="ts">
import { useRouteQuery } from "@vueuse/router";

const route = useRoute();

// Using VueUse's useRouteQuery for synchronization with URL
const page = useRouteQuery("page", 1, { transform: Number });
const itemsPerPage = useRouteQuery("itemsPerPage", 3, { transform: Number });
const searchQuery = useRouteQuery<string>("search", "");

const query = computed(() => route.query); // computed needed to trigger refetch
const { data, error, pending } = await useFetch("/api/movies", {
  query, // Query is reactive so if it changes, useFetch will run again
  key: JSON.stringify(query.value), // This solves <no response> Request aborted as another request to the same endpoint was initiated.
});

const headers = [
  { title: "ID", key: "id" },
  { title: "Title", key: "title" },
];
</script>
