<template>
  <v-app>
    <v-main>
      <Nuxt />
    </v-main>

    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LayoutDefault',
  middleware: 'auth',
})
</script>
