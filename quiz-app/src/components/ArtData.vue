<template>
    <div>
      <!-- Render the current question -->
      <div v-if="currentQuestionIndex < questions.length">
        <h3>{{ currentQuestion.q }}</h3>
        <div v-for="option in currentQuestion.options" :key="option">
          <v-btn @click="checkAnswer(option, currentQuestion.answer)">{{ option }}</v-btn>
        </div>
      </div>
  
      <!-- Display the score after all questions are answered -->
      <div v-else>
        <h2>Quiz Complete! Your Score: {{ score }} / {{ questions.length }}</h2>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentQuestionIndex: 0, // Track the current question index
        score: 0, // Initialize score to 0
        questions: [
          {
            q: "Who painted the famous artwork 'Starry Night'?",
            options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Leonardo da Vinci"],
            answer: "Vincent van Gogh"
          },
          {
            q: "Which art movement is Salvador Dalí associated with?",
            options: ["Cubism", "Surrealism", "Impressionism", "Realism"],
            answer: "Surrealism"
          },
          {
            q: "What is the name of the painting where Mona Lisa is depicted?",
            options: ["The Last Supper", "Mona Lisa", "The Creation of Adam", "Girl with a Pearl Earring"],
            answer: "Mona Lisa"
          },
          {
            q: "The Persistence of Memory is a famous painting by which artist?",
            options: ["Edvard Munch", "Pablo Picasso", "Salvador Dalí", "Georgia O'Keeffe"],
            answer: "Salvador Dalí"
          },
          {
            q: "Which artist is known for pioneering the style of Cubism?",
            options: ["Pablo Picasso", "Claude Monet", "Jackson Pollock", "Michelangelo"],
            answer: "Pablo Picasso"
          }
        ]
      };
    },
    computed: {
      currentQuestion() {
        // Check if currentQuestionIndex is less than the length of the questions array
        if (this.currentQuestionIndex < this.questions.length) {
          return this.questions[this.currentQuestionIndex];
        } else {
          // If all questions have been answered, return null or handle as appropriate
          return null;
        }
      }
    },
    methods: {
      // Handle answering questions and moving to the next one
      checkAnswer(selectedAnswer, correctAnswer) {
        if (selectedAnswer === correctAnswer) {
          this.score++; // Increment the score if the answer is correct
        }
        this.nextQuestion(); // Move to the next question
      },
      // Move to the next question
      nextQuestion() {
        // Allow currentQuestionIndex to go beyond the last question
        if (this.currentQuestionIndex < this.questions.length) {
          this.currentQuestionIndex++; // Move to the next question
        }
      }
    }
  };
  </script>
  