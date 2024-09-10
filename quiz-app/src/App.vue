<template>
  <v-app style="background-color: #F5EDED">
    <v-app-bar
      app
      color="#6482AD"
      dark
    >
      <router-link to="/" style="text-decoration: none; color: inherit;">
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
      </router-link>

      <v-spacer></v-spacer>

      <h2 v-if="$route.path !== '/'">Current Score: {{ this.$store.getters.getCount }}</h2>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({}),
};
</script>
