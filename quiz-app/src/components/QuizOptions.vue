<template>
  <v-card
    class="mx-auto mb-6"
    max-width="500"
    color="#E2DAD6"
  >

    <v-toolbar
      color="#7FA1C3"
      dark
    >

      <v-toolbar-title color="#6482AD">Categories</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-toolbar>

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card :to="card.route" class="rounded-lg">
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Math', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6,route:'/math' },
        { title: 'Science', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 ,route:'/science'},
        { title: 'Art', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6,route:'/art' },
        
      ],
    }),
  }
</script>