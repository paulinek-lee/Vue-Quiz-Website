<template>
    <div>
      <QuizTimer />
      <ArtData/>
    </div>
  </template>
  
  <script>
  import QuizTimer from '../components/QuizTimer.vue'; // Adjust the file path as needed
  import ArtData from '../components/ArtData.vue'; // Adjust the file path as needed

  export default {
    name: 'MainQuiz',
    components: {
      QuizTimer, // Use QuizTimer directly (instead of aliasing it as QuizOptions)
      ArtData
    },
  };
  </script>
  