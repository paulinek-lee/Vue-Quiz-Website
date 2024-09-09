<template>
  <div class="score-container">
    <p>SCORE: {{ totalCorrect }}/5</p>
  </div>
</template>

<script>
export default {
  props: {
    totalCorrect: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.score-container {
  display: flex;
  justify-content: center; /* Horizontally center the score */
  align-items: center; /* Vertically center the score */
  font-size: 20px; /* Increase the font size if needed */
  font-weight: 420; /* Slightly more bold than normal */
  height: 100%; /* Ensure it fills the container height */
  width: 100%; /* Ensure it fills the container width */
  text-align: center;
}
</style>
