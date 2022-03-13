<template>
  <div class="ca-card">

    <va-card>
      <va-card-title>{{title}}</va-card-title>
      <va-card-content>{{text}}</va-card-content>
    </va-card>

    <img @click="deleteTask(id)" class="trash" width="20" src="@/assets/img/trash.png" alt />
  </div>
</template>

<script setup>
import { useStore } from "vuex"

const store = useStore()

function deleteTask(taskId) {
  store.commit('DELETE_TASK', taskId) 
}

defineProps({
  title: {
    type: String,
    default: 'Заголовок'
  },
  text: {
    type: String,
    default: 'Описание задачи'
  },
  id: Number
})


</script>

<style lang="scss">
.ca-card {
  position: relative;
  padding: 5px;
  .trash {
    position: absolute;
    right: 0;
    top: 10%;
    opacity: 0;
    transition-duration: 0.2s;
    cursor: pointer;
  }

  &:hover {
    .trash {
      transition-duration: 0.5s;
      opacity: 1;
    }
  }
}
</style>