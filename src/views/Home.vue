<template>
  <div class="home">
    <div class="container">

      <va-input
        class="mb-4"
        v-model="taskInterface.text"
        placeholder="Введите название задачи..."
        label="Поиск задач"
        bordered
        @keydown.enter="addTask"
      />
      
      <va-select class="mb-4" v-model="taskInterface.title" :options="titleOptions" />
      <va-button @click="addTask" class="mb-4"> Добавить задачу </va-button>

      <ca-list />

    </div>
  </div>
</template>

<script setup>
import CaList from "@/components/ca-list.vue";
import { reactive } from 'vue'
import { useStore } from 'vuex'

const store = useStore();

const taskInterface = reactive({
    title: 'Дом 🏠',
    text: ''
})

const titleOptions = ['Дом 🏠', 'Работа 💻']

function addTask() {
  store.commit('ADD_TASK', taskInterface)
}

</script>

<style lang="scss">
.container {
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}
</style>