<template>
  <div>
    <h1>Movies</h1>

    <v-row>
      <v-col>
        <search v-model="queryOptions.search" />
      </v-col>
      <v-spacer />
      <v-col cols="auto">
        <MovieCreateDialog />
      </v-col>
    </v-row>

    <div v-if="error">{{ error }}</div>
    <v-data-table-server
      v-else-if="data"
      :loading="pending"
      :headers="headers"
      :items="data.items"
      :items-length="data.total"
      v-model:itemsPerPage="queryOptions.itemsPerPage"
      v-model:page="queryOptions.page"
    >
      <template v-slot:item.title="{ item }">
        <NuxtLink :to="`/movies/${item.id}`">{{ item.title }}</NuxtLink>
      </template>
    </v-data-table-server>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const query = computed(() => route.query); // computed needed to trigger refetch
const { data, error, pending } = await useFetch("/api/movies", {
  query,
  key: JSON.stringify(query.value), // This solves <no response> Request aborted as another request to the same endpoint was initiated.
});

const headers = [
  { title: "ID", key: "id" },
  { title: "Title", key: "title" },
];

const queryOptions = ref({
  page: data.value?.page,
  itemsPerPage: data.value?.itemsPerPage,
  search: data.value?.search,
});

watch(
  queryOptions,
  (newVal) => {
    const { page, itemsPerPage, search } = newVal;
    const query: any = {
      page: page?.toString(),
      itemsPerPage: itemsPerPage?.toString(),
      search: search || undefined,
    };

    navigateTo({ query });
  },
  { deep: true }
);
</script>
