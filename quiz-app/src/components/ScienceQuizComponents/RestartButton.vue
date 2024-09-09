<template>
  <v-btn  color="#7FA1C3" dark :style="buttonStyle" @click="resetQuiz">
    Reset Quiz
  </v-btn>
</template>

<script>
export default {
  methods: {
    resetQuiz() {
      this.$emit('reset');
    }
  },
  computed: {
    buttonStyle() {
      return {
        width: '100%', // Make the button fill the column width
        padding: '16px', // Ensure similar padding as the ScoreDisplay
        fontSize: '18px', // Match font size with ScoreDisplay if needed
      };
    }
  }
}
</script>

<style scoped>
/* You can add additional styles if needed */
</style>
