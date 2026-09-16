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
const props = defineProps({ modelValue: { type: String } });
const emit = defineEmits(["update:modelValue"]);
const search = ref(props.modelValue);
function submit() {
  emit("update:modelValue", search.value);
}
</script>
