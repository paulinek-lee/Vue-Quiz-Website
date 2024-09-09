<template>
  <v-container>
    <v-row align="center" v-if="!quizSubmitted">
      <!-- Score Display with background color -->
      <v-col cols="6">
        <v-card class="score-card">
          <ScoreDisplay class="my-6" :totalCorrect="totalCorrect" />
        </v-card>
      </v-col>

      <!-- Reset Button with background color -->
      <v-col cols="6" class="d-flex justify-center align-center">
        <RestartButton class="my-6" @reset="resetQuiz" />
      </v-col>
    </v-row>
    <v-row v-if="!quizSubmitted">
    <!-- Question Container -->
    <QuestionContainer 
      :answerOptions="['Bagel', 'Donut', 'Halved Torus', 'My breakfast']"
      :correctAnswer="'My breakfast'"
      :imageSource="require('@/assets/bagel.jpg')"
      :questionText="'What is this?'"
      :resetFlag="resetFlag"
      @correct-answer="incrementScore"
    />

    <QuestionContainer 
      :answerOptions="['Bagel', 'Donut', 'Halved Torus', 'My breakfast']"
      :correctAnswer="'My breakfast'"
      :imageSource="require('@/assets/bagel.jpg')"
      :questionText="'What is this?'"
      :resetFlag="resetFlag"
      @correct-answer="incrementScore"
    />

    <QuestionContainer 
      :answerOptions="['Bagel', 'Donut', 'Halved Torus', 'My breakfast']"
      :correctAnswer="'My breakfast'"
      :imageSource="require('@/assets/bagel.jpg')"
      :questionText="'What is this?'"
      :resetFlag="resetFlag"
      @correct-answer="incrementScore"
    />

    <QuestionContainer 
      :answerOptions="['Bagel', 'Donut', 'Halved Torus', 'My breakfast']"
      :correctAnswer="'My breakfast'"
      :imageSource="require('@/assets/bagel.jpg')"
      :questionText="'What is this?'"
      :resetFlag="resetFlag"
      @correct-answer="incrementScore"
    />

    <QuestionContainer 
      :answerOptions="['Bagel', 'Donut', 'Halved Torus', 'My breakfast']"
      :correctAnswer="'My breakfast'"
      :imageSource="require('@/assets/bagel.jpg')"
      :questionText="'What is this?'"
      :resetFlag="resetFlag"
      @correct-answer="incrementScore"
    />
    </v-row>
    <v-row justify="center" v-if="!quizSubmitted">
      <v-col cols="4">
        <v-btn @click="submitQuiz" class="submit-btn my-5">Submit Quiz</v-btn>
      </v-col>
    </v-row>
    <v-row v-if="quizSubmitted" class="text-center">
      <v-col>
        <h2>Quiz Submitted!</h2>
        <h2>Your final score is: {{ totalCorrect }}/5</h2>
      </v-col>
    </v-row>
    
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Incomplete Quiz</v-card-title>
        <v-card-subtitle>
          Not all questions are complete. Please answer all questions before submitting.
        </v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="dialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
  </v-container>


</template>

<script>
import QuestionContainer from '../components/ScienceQuizComponents/QuestionContainer.vue';
import ScoreDisplay from '../components/ScienceQuizComponents/ScoreDisplay.vue';
import RestartButton from '../components/ScienceQuizComponents/RestartButton.vue';

export default {
  name: 'ScienceQuiz',
  components: {
    QuestionContainer,
    ScoreDisplay,
    RestartButton
  },
  data() {
    return {
      totalCorrect: 0,
      quizSubmitted: false,
      resetFlag: false
    };
  },
  methods: {
    incrementScore() {
      this.totalCorrect += 1;
      console.log('Score incremented:', this.score);
    },
    resetQuiz() {
      this.totalCorrect = 0;
      this.resetFlag = !this.resetFlag;
      this.quizSubmitted = false;
    },
    submitQuiz() {
      this.quizSubmitted = true;
    }
  }
}
</script>

<style scoped>
/* Background color for the score display, reset button, and answer options */
.score-card, .v-btn, .answer-option {
  background-color: #7FA1C3; /* Set background color */
  color: white; /* Ensure text is visible */
}

.submit-btn {
  background-color: #6482AD !important; 
  color: white;
}

/* Adjust styling for the score box */
.score-card {
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.score-card p {
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.87);
  margin: 0;
  line-height: 40px;
}

/* Styling for the reset button */
.v-btn {
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 500;
  color: white;
}

/* Styling for answer options */
.answer-option {
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 500;
  color: white;
}
</style>
