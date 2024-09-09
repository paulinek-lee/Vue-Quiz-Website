<template>
  <v-card :style="cardStyle" class="d-flex justify-center align-center">
    <p class="question-text">{{ questionText }}</p>
  </v-card>
</template>

<script>
export default {
  props: {
    questionText: {
      type: String,
      required: true
    }
  },
  computed: {
    cardStyle() {
      return {
        backgroundColor: '#6482AD', // Blue background
        color: 'white', // White text
        padding: '0 16px', // Add horizontal padding but reduce vertical space
        display: 'flex', // Flexbox for centering
        alignItems: 'center', // Center vertically
        justifyContent: 'center', // Center horizontally
        borderRadius: '8px', // Optional: rounded corners
        minHeight: '60px', // Ensure the box has a decent minimum height without too much space
      };
    }
  }
}
</script>

<style scoped>
.question-text {
  font-size: 24px;  /* Larger text size */
  font-weight: bold; /* Bold font */
  line-height: 1.2;  /* Adjust line height to make vertical spacing equal */
  margin: 0;         /* Remove default margins from the <p> tag */
  text-align: center; /* Center the text */
}
</style>
