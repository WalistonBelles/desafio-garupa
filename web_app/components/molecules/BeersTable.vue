<template>
  <div>
    <v-data-table
      :headers="getHeaders"
      :items="beersData"
      :options.sync="options"
      :items-per-page="itemsPerPage"
      :loading="isLoadingGrid"
      :page.sync="page"
      height="80vh"
      hide-default-footer
      mobile-breakpoint="0"
      loading-text="Carregando lista de cervejas..."
      no-data-text="Nenhuma cerveja encontrada"
      @page-count="pageCount = $event"
    >
    </v-data-table>
    
    <v-pagination
      v-model="page"
      :length="pageCount"
    ></v-pagination>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { beer } from '~/store'

export default Vue.extend({
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 25,
      isLoadingGrid: true,
      beersData: [],
      options: {},
    }
  },

  computed: {
    getHeaders(): Object[] {
      return [
        { text: 'Nome', value: 'name', align: 'center', sortable: false },
        { text: 'Descrição', value: 'description', align: 'center', sortable: false },
        { text: 'Primeira Fabricação', value: 'first_brewed', align: 'center', sortable: false },
      ];
    },
  },

  watch: {
    options: {
      handler () {
        this.getBeers()
      },
      deep: true,
    },
  },

  methods: {
    async getBeers(this: any) {
      this.isLoadingGrid = true;
      const { page, itemsPerPage } = this.options;
      
      const response = await beer.getBeers({ page, limit: itemsPerPage });

      if (response.code === "SEARCH_SUCCESS") {
        this.$set(this, 'beersData', response.result);
        this.isLoadingGrid = false;
      }
      
      else {
        this.$set(this, 'beersData', []);
        this.isLoadingGrid = false;
      }
    }
  }
})
</script>