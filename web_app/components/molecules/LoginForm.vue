<template>
  <v-form
    ref="form"
    v-model="valid"
    class="login-form mt-2"
    @submit.prevent="validate"
    @keyup.native.enter="validate"
  >
    <v-text-field
      v-model="email"
      :rules="rules.email"
      label="Digite seu e-mail"
      type="email"
      validate-on-blur
      dense
      outlined
    ></v-text-field>

    <v-text-field
      v-model="password"
      label="Digite sua senha"
      :rules="rules.password"
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      hide-details="auto"
      dense
      outlined
      @click:append="showPassword = !showPassword"
    ></v-text-field>

    <v-checkbox
      v-model="rememberMe"
      label="Mantenha-me conectado"
      color="success"
      hide-details
    ></v-checkbox>

    <br>

    <v-btn
      depressed
      class="btn btn-success-primary"
      @click="validate"
    >
      Entrar
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '~/store'

export default Vue.extend({
  data() {
    return {
      valid: true,
      email: '',
      password: '',
      rememberMe: false,
      rules: {
        email: [
          (v: string) => !!v || 'Campo obrigatório',
          (v: string) => /.+@.+\..+/.test(v) || 'O formato do e-mail não é válido.',
        ],
        password: [
          (v: string) => !!v || 'Campo obrigatório'
        ]
      },
      showPassword: false,
    }
  },

  methods: {
    async onLogin() {
      try {
        await auth.create({
          email: this.email,
          password: this.password,
          rememberMe: this.rememberMe
        })
        
        this.$router.replace('/');

      } catch (error) {
        auth.setError();
      }
    },

    async validate(this: any) {
      await this.$refs.form.validate();
      if (this.valid)
        await this.onLogin();
    },
  }
})
</script>
