<template>
  <v-btn
    block
    :style="buttonStyle"
    @click="selectAnswer"
    :disabled="disabled"
  >
    {{ answerOptionText }}
  </v-btn>
</template>

<script>
export default {
  props: {
    answerOptionText: {
      type: String,
      required: true
    },
    selectedAnswer: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isSelected() {
      return this.selectedAnswer === this.answerOptionText;
    },
    buttonStyle() {
      return {
        backgroundColor: this.isSelected ? "#7FA1C3" : '#e0e0e0', // Default white for selected, gray for non-selected
        color: 'black', // Ensure text is readable
        borderRadius: '8px'
      };
    }
  },
  methods: {
    selectAnswer() {
      this.$emit('answer-selected', this.answerOptionText);
    }
  }
}
</script>
