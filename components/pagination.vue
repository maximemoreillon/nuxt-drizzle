<template>
  <div>
    <NuxtLink
      v-if="page > 1"
      :to="{ query: { ...route.query, page: page - 1 } }"
    >
      ←
    </NuxtLink>
    <span>{{ page }}</span>
    <NuxtLink
      v-if="page < pageCount"
      :to="{ query: { ...route.query, page: page + 1 } }"
    >
      →
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const props = defineProps<{
  total: number;
  itemsPerPage: number;
  page: number;
}>();
const pageCount = computed(() => Math.ceil(props.total / props.itemsPerPage));
</script>
