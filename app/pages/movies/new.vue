<template>
  <div>
    <h2>New movie</h2>
    <p>
      <NuxtLink href="/movies">Return to movie list</NuxtLink>
    </p>
    <v-form @submit.prevent="submit()">
      <v-row>
        <v-col>
          <v-text-field v-model="title" label="title" />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="auto">
          <v-btn
            type="submit"
            text="submit"
            color="primary"
            :loading="loading"
          />
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script setup lang="ts">
const title = ref("");
const loading = ref(false);

async function submit() {
  loading.value = true;
  try {
    const res = await $fetch("/api/movies", {
      method: "POST",
      body: { title: title.value },
    });
    if (!res) throw new Error("No response");
    await navigateTo(`/movies/${res.id}`);
  } catch (error) {
    console.error(error);
    alert("Error");
  } finally {
    loading.value = false;
  }
}
</script>
