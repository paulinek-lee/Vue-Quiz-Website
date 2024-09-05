<template>
  <v-container class="text-center">
    <v-row justify="center">
      <v-col cols="12">
        <h1>This is the art page</h1>
      </v-col>
    </v-row>

    <v-row justify="center">
      <!-- Vuetify Image component -->
      <v-col cols="12" md="6">
        <v-img
          src="https://smarthistory.org/wp-content/uploads/2022/08/no-frame-david-napoleon-full.jpg"
          alt="Art Image"
          class="art-image"
          max-height="400"
          contain
        />
      </v-col>
    </v-row>

    <v-row justify="center">
      <!-- Vuetify Button component -->
      <v-col cols="auto">
        <v-btn color="success" @click="handleClick">Start</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$router.push({ name: 'main_quiz' });

      alert("Quiz started!");
      // This will trigger when the button is clicked
    }
  }
};
</script>

<style scoped>
.art-image {
  border-radius: 10px; /* Add rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
  margin-bottom: 30px;
}
</style>
