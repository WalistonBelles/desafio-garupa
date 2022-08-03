<template>
  <div class="login-container">
    <Logo class="logo"/>
    
    <LoginForm />

    <div class="pt-12">
      <NuxtLink to="/">
        <Button text="Entrar"/>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'LoginOrganisms',

  data() {
    return {
      dialog: false
    }
  }
})
</script>

<style scoped>
.login-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
}

.need-help {
  font-size: 14px;
  font-weight: 400;
  color: var(--gray);
  line-height: 20px;
  cursor: pointer;
}
</style>