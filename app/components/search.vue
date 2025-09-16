<template>
  <v-form @submit.prevent="submit">
    <v-row>
      <v-col>
        <v-text-field
          type="text"
          v-model="search"
          label="Search"
          hide-details
        />
      </v-col>
      <v-col cols="auto">
        <v-btn type="submit" icon="mdi-magnify" />
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup lang="ts">
const props = defineProps({ modelValue: { type: String } });
const emit = defineEmits(["update:modelValue"]);
// TODO: Do not interact with search Parameters
const search = ref(props.modelValue);

function submit() {
  emit("update:modelValue", search.value);
}
</script>
