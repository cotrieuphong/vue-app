<template>
  <div class="app-todo">
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="10">
            <v-text-field
              v-model="newTodo"
              @change="getTodo"
              @keypress.enter="addTodo(newTodo)"
              label="What do you have in mind ?"
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-btn color="primary" @click="addTodo(newTodo)">Primary</v-btn>
          </v-col>
          <v-col cols="12"> </v-col>
          <v-col cols="12">
            <v-card class="mx-auto" tile>
              <v-list dense>
                <v-subheader>You have {{ todosLenght }} todo</v-subheader>
                <v-list-item-group color="primary">
                  <v-list-item v-for="todo in todos" :key="todo.id">
                    <v-list-item-content>
                      <v-list-item-title v-text="todo.task"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      newTodo: ""
    };
  },

  computed: {
    ...mapState(["todos"]),
    ...mapGetters(["todosLenght"])
  },

  methods: {
    getTodo(value) {
      console.log(value);
      return;
    },
    addTodo(value) {
      this.$store.dispatch("addTodo", value);
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
