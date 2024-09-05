<template>
<div>
  <hero-page/>
  <quiz-options/>
</div>
  
</template>

<script>
import HeroPage from '../components/HeroPage.vue'
//import QuizCard from '../components/QuizCard'
import QuizOptions from '../components/QuizOptions.vue'
  export default {
    name: 'Home-Page',
    components: {
      QuizOptions,
        HeroPage,
    
    },
  }
</script>
