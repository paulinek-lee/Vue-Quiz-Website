<template>
  <div>
    <div v-if="HP != 0 && questionNum != 5">
      <div class="d-flex justify-center">
        <v-icon v-for="n in HP" :key="n" size="50"> mdi-heart </v-icon>
        <v-icon v-for="n in 3 - HP" :key="n" size="50">
          mdi-heart-outline
        </v-icon>
      </div>
      <h1 class="d-flex justify-center">{{ questionBank[questionNum] }}</h1>
      <v-container style="max-width: 700px">
        <v-row class="justify-space-between">
          <v-col
            v-for="(answer, index) in answerBank[questionNum]"
            :key="index"
            cols="6"
            height="75"
          >
            <v-btn
              height="75"
              block
              :color="isFlashing ? btnColor : ''"
              v-on:click="checkAnswer(Object.values(answer)[0])"
            >
              {{ Object.keys(answer)[0] }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <div class="d-flex justify-center">
        <v-progress-linear
          style="max-width: 700px"
          :value="timer"
        ></v-progress-linear>
      </div>
    </div>

    <div v-else-if="HP === 0" class="d-flex justify-center">
      <h1>You lose!</h1>
    </div>
    <div v-else class="d-flex justify-center">
      <h1>You win! You got {{ count }} questions right!</h1>
    </div>
  </div>
</template>
  
  <script>
export default {
  data: () => ({
    questionBank: [
      "What is 9 + 10?",
      "What is 12 * 13?",
      "What is 20 * 25?",
      "15*16?",
      "What is 17*18?",
    ],
    answerBank: [
      [{ 21: false }, { 19: true }, { 18: false }, { 15: false }],
      [{ 132: true }, { 142: false }, { 152: false }, { 122: false }],
      [{ 600: false }, { 550: false }, { 500: true }, { 400: false }],
      [{ 210: false }, { 220: false }, { 230: false }, { 240: true }],
      [{ 324: false }, { 288: false }, { 306: true }, { 289: false }],
    ],
    HP: 3,
    questionNum: 0,
    isFlashing: false,
    btnColor: "primary",
    timer: 0, // Initial timer value
    intervalId: null, // To store the interval ID so we can stop the timer later
  }),
  methods: {
    checkAnswer: function (answer) {
      if (answer) {
        this.btnColor = "green";
        // Increment the counter by dispatching Vuex action
        this.$store.dispatch('increment');

        this.flashButton();
      } else {
        this.btnColor = "red";
        this.flashButton();
        this.HP--;
      }
      if (this.HP != 0) {
        setTimeout(() => {
          this.questionNum++;
        }, 500);
      }
      setTimeout(() => {
        this.resetTimer();
      }, 500);
    },

    flashButton() {
      this.isFlashing = true;
      setTimeout(() => {
        this.isFlashing = false;
      }, 500);
    },

    startTimer() {
      // Use setInterval to run the function every second
      this.intervalId = setInterval(() => {
        this.timer++;
        if (this.timer === 100) {
          this.checkAnswer(false);
        }
        console.log(this.timer);
      }, 100); // 1000ms = 1 second
    },
    resetTimer() {
      // Use setInterval to run the function every second
      this.timer = 0;
    },
  },
  computed: {
     count() {
       return this.$store.getters.getCount;
     }
  },

  mounted() {
    this.startTimer();
  },
};
</script>

