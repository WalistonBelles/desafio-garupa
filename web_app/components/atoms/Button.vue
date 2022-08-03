<template>
  <v-btn class="buttonBase">
    {{ text }}
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'ButtonBase',

  props: {
    text: {
      type: String,
      required: true,
      default: '',
    },
  },

  data() {
    return {};
  },

  computed: {},

  methods: {},
});
</script>

<style scoped>
.buttonBase {
  text-transform: none;
  text-decoration: none;
  letter-spacing: normal;
  font-weight: 700;
  font-size: 14px;
  background-color: var(--primary) !important;
  color: var(--white);
  border-radius: 8px;
  width: 240px;
  height: 40px;
}

.buttonBase:hover {
  background-color: var(--secondary) !important;
  transition: 0.3s ease-in-out;
}

.v-btn--is-elevated,
.v-btn--is-elevated:after {
  box-shadow: none !important;
}
</style>
