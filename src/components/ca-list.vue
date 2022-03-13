<template>
  <div class="ca-list">
    <ca-card 
      v-for="task in tasks"
      :key="task.id"
      :title="task.title"
      :text="task.text"
      :id="task.id"
    />
  </div>
</template>

<script setup>
import CaCard from './ca-card.vue';
import { useStore } from "vuex"
import { computed } from "vue"

const store = useStore()

const tasks = computed(() => store.getters['GET_TASKS'])

</script>

<style>
.ca-list {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
}
</style>