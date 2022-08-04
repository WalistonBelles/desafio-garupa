<template>
  <section class="beer-container">
    <Title text="Listagem de Cervejas" />
    
    <Beer class="beer-table mt-2"/>
  </section>
</template>

<style scoped>
  .beer-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
  }

  .beer-table {
    width: 80%;
    height: 80%;
  }
</style>
