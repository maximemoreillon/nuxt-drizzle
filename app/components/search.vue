<template>
  <v-form @submit.prevent="submit">
    <v-row align="center">
      <v-col>
        <v-text-field
          type="text"
          v-model="search"
          label="Search"
          hide-details
        />
      </v-col>
      <v-col cols="auto">
        <v-btn
          type="submit"
          prepend-icon="mdi-magnify"
          text="Search"
          variant="outlined"
        />
      </v-col>
    </v-row>
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
