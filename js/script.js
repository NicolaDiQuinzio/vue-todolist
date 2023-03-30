const app = Vue.createApp({
  data() {
    return {
      todos: [],
      newTodoText: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoText.trim() !== "") {
        this.todos.push({
          text: this.newTodoText,
          done: false,
        });
        this.newTodoText = "";
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
});

app.mount("#app");
