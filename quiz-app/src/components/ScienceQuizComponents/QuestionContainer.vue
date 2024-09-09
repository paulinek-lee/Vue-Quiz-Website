<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <QuestionCorrect :isCorrect="isCorrect" :answered="questionAnswered" />
      </v-col>
      <v-col>
        <v-row>
          <v-col cols="12">
            <QuestionText :question-text="questionText" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="d-flex justify-center">
            <QuestionPicture :imageSource="imageSource" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <AnswerOption 
              :answerOptionText="answerOptions[0]"
              :selectedAnswer="selectedAnswer"
              :disabled="questionAnswered"
              @answer-selected="checkAnswer"
            />
          </v-col>
          <v-col cols="6">
            <AnswerOption 
              :answerOptionText="answerOptions[1]"
              :selectedAnswer="selectedAnswer"
              :disabled="questionAnswered"
              @answer-selected="checkAnswer"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <AnswerOption 
              :answerOptionText="answerOptions[2]"
              :selectedAnswer="selectedAnswer"
              :disabled="questionAnswered"
              @answer-selected="checkAnswer"
            />
          </v-col>
          <v-col cols="6">
            <AnswerOption 
              :answerOptionText="answerOptions[3]"
              :selectedAnswer="selectedAnswer"
              :disabled="questionAnswered"
              @answer-selected="checkAnswer"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import QuestionText from './QuestionText.vue';
import AnswerOption from './AnswerOption.vue';
import QuestionCorrect from './QuestionCorrect.vue';
import QuestionPicture from './QuestionPicture.vue';

export default {
  name: 'QuestionContainer',
  components: {
    QuestionText,
    AnswerOption,
    QuestionCorrect,
    QuestionPicture
  },
  props: {
    answerOptions: { type: Array, required: true },
    correctAnswer: { type: String, required: true },
    imageSource: { type: String, required: true },
    questionText: { type: String, required: true },
    resetFlag: { type: Boolean, required: true }  // Flag to reset the state
  },
  data() {
    return {
      selectedAnswer: null,
      isCorrect: null,
      questionAnswered: false
    };
  },
  watch: {
    resetFlag(newVal) {
      if (newVal) {
        this.resetState();  // Reset the question state when resetFlag changes
      }
    }
  },
  methods: {
    checkAnswer(selectedOption) {
      this.selectedAnswer = selectedOption;
      if (selectedOption === this.correctAnswer) {
        this.isCorrect = true;
        this.$emit('correct-answer');  // Emit the event here
      } else {
        this.isCorrect = false;
      }
      this.questionAnswered = true;
    },
    resetState() {
      this.selectedAnswer = null;
      this.isCorrect = null;
      this.questionAnswered = false;  // Reset everything to the initial state
    }
  }
};
</script>
