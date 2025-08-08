<template>
  <div>
    <h1>Movies</h1>
    <p>
      <NuxtLink href="/movies/new">New Movie</NuxtLink>
    </p>

    <div v-if="error">Failed to query items</div>

    <template v-if="data">
      <search />
      <div>Total: {{ data.total }}</div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="movie in data.items" :key="movie.id">
            <td>
              {{ movie.id }}
            </td>
            <td>
              <NuxtLink :href="`/movies/${movie.id}`">
                {{ movie.title }}
              </NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>

      <Pagination
        :items-per-page="data.itemsPerPage"
        :total="data.total"
        :page="data.page"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const query = computed(() => route.query); // computed needed to trigger refetch
const { data, error } = await useFetch("/api/movies", { query });
</script>
