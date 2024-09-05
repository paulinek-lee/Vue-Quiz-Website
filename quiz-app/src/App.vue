<template>
  <v-app style="background-color: #F5EDED">
    <v-app-bar
      app
      color="#6482AD"
      dark
    >
    <a href="/"
    style="text-decoration: none;
  color: inherit; /* Inherit color from parent */
">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <h1>IQ Odyssey</h1>
        
      </div>
    </a>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
