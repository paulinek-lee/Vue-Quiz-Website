<template>
  <v-card v-if="answered" :style="cardStyle">
    <p>{{ isCorrect ? 'Correct!' : 'Incorrect!' }}</p>
  </v-card>
</template>

<script>
export default {
  props: {
    isCorrect: {
      type: Boolean,
      required: false
    },
    answered: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    cardStyle() {
      return {
        backgroundColor: this.isCorrect ? '#4CAF50' : '#F44336', // Green for correct, red for incorrect
        color: 'white',
        padding: '16px',
        fontWeight: 'bold',
        borderRadius: '8px'
      };
    }
  }
}
</script>
