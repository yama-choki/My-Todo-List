import firebase from '@/plugins/firebase'

const db = firebase.firestore()
const todosRef = db.collection('todos')

export const state = () => ({
  todos: []
})

export const getters = {
  todos: (state) => {
    return state.todos
  }
}

export const actions = {
  addTodo ({ dispatch }, todo) {
    todo.created = firebase.firestore.FieldValue.serverTimestamp()
    todosRef.add(todo).then((res) => {
      todosRef.doc(res.id)
        .set({
          todo,
          id: res.id
        }).then(() => {
          dispatch('getTodos', todo)
        })
    })
  }
}

export const mutations = {
  getTodos (state, todos) {
    state.todos = todos
  }
}
