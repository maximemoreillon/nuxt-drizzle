<template>
  <v-form @submit.prevent="submit">
    <v-text-field
      type="text"
      v-model="search"
      label="Search"
      hide-details
      append-inner-icon="mdi-magnify"
      @click:append-inner="submit"
      density="compact"
      variant="outlined"
    />
    <!-- Hidden button to enable form submission when pressing enter -->
    <button type="submit" hidden />
  </v-form>
</template>

<script setup lang="ts">
const model = defineModel<string>();

// Local draft so typing doesn't push to the model until submit;
// stays in sync if the model changes externally (e.g. browser back/forward).
const search = ref(model.value);
watch(model, (v) => (search.value = v));

function submit() {
  model.value = search.value;
}
</script>
