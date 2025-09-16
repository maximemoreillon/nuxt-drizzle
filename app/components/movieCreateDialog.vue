<template>
  <v-dialog max-width="50rem">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        prepend-icon="mdi-plus"
        text="New"
        color="primary"
      />
    </template>
    <template v-slot:default="{ isActive }">
      <v-card>
        <v-card-title> New movie </v-card-title>

        <v-card-text>
          <v-form @submit.prevent="submit()">
            <v-row align="center">
              <v-col>
                <v-text-field
                  autofocus
                  label="Title"
                  v-model="title"
                  hide-details
                />
              </v-col>
              <v-col cols="auto">
                <v-btn
                  type="submit"
                  color="primary"
                  :loading="loading"
                  prepend-icon="mdi-plus"
                  text="Create"
                />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close" @click="isActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts" setup>
const loading = ref(false);

const title = ref("");
async function submit() {
  loading.value = true;

  try {
    const res = await $fetch("/api/movies", {
      method: "POST",
      body: { title: title.value },
    });

    await navigateTo(`/movies/${res?.id}`);
  } catch (error) {
    // TODO: snackbar
    console.error(error);
    alert(error);
  } finally {
    loading.value = false;
  }
}
</script>
