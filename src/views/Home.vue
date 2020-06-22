<template>
  <v-row class="app-home">
    <v-col cols="12" sm="3" md="4" v-for="item in items" :key="item.id">
      <v-card raised>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">{{ "#" + item.id }}</div>
            <v-list-item-title class="headline mb-1">{{
              item.title
            }}</v-list-item-title>
            <v-list-item-subtitle
              >Greyhound divisely hello coldly
              fonwderfully</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-card-actions>
          <v-btn text :to="{ name: item.url }" color="primary"
            >Learn more</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["items"])
  }
};
</script>
