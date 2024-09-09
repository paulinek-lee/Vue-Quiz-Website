<template>
  <v-img
    :src="imageSource"
    max-width="300"
    max-height="300"
    contain
    class="d-flex justify-center"
  />
</template>

<script>
export default {
  props: {
    imageSource: {
      type: String,
      required: true
    }
  }
}
</script>
