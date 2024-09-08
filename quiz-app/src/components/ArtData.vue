<template>
    <div>
      <!-- Render the current question -->
      <div v-if="currentQuestionIndex < questions.length">
        <h3>{{ currentQuestion.q }}</h3>
        
        <!-- Render the image for the current question -->
        <img :src="currentQuestion.link" alt="Art Image" class="question-image" />
  
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
            answer: "Vincent van Gogh",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFWac6FmArsdaTagQFG1gMJqQS7mO7zWMeYw&s"
          },
          {
            q: "Which art movement is Salvador Dalí associated with?",
            options: ["Cubism", "Surrealism", "Impressionism", "Realism"],
            answer: "Surrealism",
            link: "https://cdn.sanity.io/images/cctd4ker/production/473f67e2d32a6e693c19d30bda823320cc1f04b9-595x878.jpg?w=1920&q=75&fit=clip&auto=format"
          },
          {
            q: "What is the name of the painting where Mona Lisa is depicted?",
            options: ["The Last Supper", "Mona Lisa", "The Creation of Adam", "Girl with a Pearl Earring"],
            answer: "Mona Lisa",
            link: "https://i0.wp.com/lightsources.org/wp-content/uploads/2023/10/DaVinci_web.png?w=700&ssl=1"
          },
          {
            q: "The Persistence of Memory is a famous painting by which artist?",
            options: ["Edvard Munch", "Pablo Picasso", "Salvador Dalí", "Georgia O'Keeffe"],
            answer: "Salvador Dalí",
            link: "https://cdn.sanity.io/images/cctd4ker/production/473f67e2d32a6e693c19d30bda823320cc1f04b9-595x878.jpg?w=1920&q=75&fit=clip&auto=format"
          },
          {
            q: "Which artist is known for pioneering the style of Cubism?",
            options: ["Pablo Picasso", "Claude Monet", "Jackson Pollock", "Michelangelo"],
            answer: "Pablo Picasso",
            link: "https://www.cubismartwork.com/wp-content/uploads/2023/09/pablo-picasso-cubism.jpg"
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
  
  <style scoped>
 .question-image {
  max-width: 400px; /* Increase the image size */
  height: auto;
  border-radius: 12px; /* Keep the rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add a subtle shadow */
  margin-bottom: 20px; /* Adjust margin for space below the image */
  margin-top: -20px; /* Move the image up slightly */
  float: right; /* Align the image to the right */
  margin-left: 30px; /* Space between image and text */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth hover effect */
}

.question-image:hover {
  transform: scale(1.15); /* Enlarge the image a bit more on hover */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Stronger shadow on hover */
}


  </style>
  