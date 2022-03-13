import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [
    ]
  },
  mutations: {
    ADD_TASK(state, task){
      state.tasks.push({
        id: state.tasks.length + 1,
        title: task.title,
        text: task.text
      });
    },
    DELETE_TASK(state, id){
      state.tasks = state.tasks.filter(item => item.id != id)
    }
  },
  actions: {
  },
  getters: {
    GET_TASKS(state){
      return state.tasks
    }
  }
})
