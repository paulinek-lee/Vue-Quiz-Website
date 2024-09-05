<template>
    <v-container class="text-center">
      <v-row justify="top">
        <v-col cols="auto">
          <h1>Countdown Timer</h1>
        </v-col>
      </v-row>
  
      <v-row justify="start" align="start">
        <v-col cols="auto">
          <!-- Display the timer in MM:SS format -->
          <div class="clock">
            <span>{{ minutes }}:{{ seconds }}</span>
          </div>
        </v-col>
      </v-row>
  
      <v-row justify="center">
        <v-col cols="auto">
          <!-- <v-btn color="primary"  @click="startTimer" :disabled="timerRunning">Start Timer</v-btn>
          <v-btn color="secondary" @click="resetTimer">Reset Timer</v-btn> -->
        </v-col>
      </v-row>
    </v-container>
  </template>



  <script>
  export default {
    data() {
      return {
        timeLeft: 600, // 10 minutes in seconds
        interval: null, // Holds the setInterval reference
        timerRunning: false

    };
    },
    computed: {
      minutes() {
        // Calculate minutes left
        return Math.floor(this.timeLeft / 60).toString().padStart(2, "0");
      },
      seconds() {
        // Calculate seconds left
        return (this.timeLeft % 60).toString().padStart(2, "0");
      }
    },
    methods: {
      startTimer() {
        if (!this.timerRunning) {
          this.timerRunning = true;
          this.interval = setInterval(() => {
            if (this.timeLeft > 0) {
              this.timeLeft--;
            } else {
              clearInterval(this.interval);
              this.timerRunning = false;
              alert("Time's up!");
            }
          }, 1000);
        }
      }, 
      resetTimer() {
        clearInterval(this.interval);
        this.timeLeft = 600; // Reset to 10 minutes
        this.timerRunning = false;
      }
    }, 
    mounted(){ this.startTimer();},

    beforeDestroy() {
      // Clear the interval when the component is destroyed
      clearInterval(this.interval);
    }
  };
//   startTimer();

        </script>
  
  <style scoped>
  .clock {
    font-size: 3em;
    font-family: 'Courier New', Courier, monospace;
    color: #4CAF50;
    background-color: #e0f7fa;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  </style>
  