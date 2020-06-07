<template>
  <div class="app-todo">
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="n in 2">
            <v-text-field label="What do you have in mind ?"></v-text-field>
          </v-col>
          <v-btn color="primary" @click="addTodo">Primary</v-btn>
        </v-row>
      </v-container>
    </v-form>
    <h1>You have {{ todosLenght }} todo</h1>
    <ul class="app-todo__list">
      <li class="app-todo__item" v-for="todo in todos" :key="todo.id">
        {{ todo.task }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["todos"]),
    ...mapGetters(["todosLenght"])
  },
  methods: {
    addTodo() {
      return;
    }
  }
};
</script>

<style lang="scss">
li {
  background-color: $blue;
  color: $white;
}
</style>
