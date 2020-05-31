<template>
  <div class="app-todo">
    <v-form v-model="valid">
      <v-container :align="baseline" :justify="center">
        <v-row>
          <v-col cols="n in 2">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
            ></v-text-field>
          </v-col>
          <v-btn color="primary">Primary</v-btn>
        </v-row>
      </v-container>
    </v-form>
    <ul class="app-todo__list">
      <li class="app-todo__item" v-for="todo in todos" :key="todo.id">
        {{ todo.task }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["todos"])
};
</script>

<style lang="scss">
li {
  background-color: $blue;
  color: $white;
}
</style>
