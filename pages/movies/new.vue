<template>
  <div>
    <h1>New movie</h1>
    <p>
      <NuxtLink href="/movies">Movie list</NuxtLink>
    </p>
    <form @submit.prevent="submit()">
      <input type="text" v-model="title" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
const title = ref("")
async function submit() {
  const options = {
    method: "POST",
    body: { title: title.value },
  }
  const { id } = await $fetch("/api/movies", options)
  await navigateTo(`/movies/${id}`)
}
</script>
