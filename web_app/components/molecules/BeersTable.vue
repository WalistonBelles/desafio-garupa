<template>
  <div>
    <v-data-table
      :headers="getHeaders"
      :items="beersData"
      :options.sync="options"
      :items-per-page="itemsPerPage"
      :loading="isLoadingGrid"
      :page="page"
      height="80vh"
      hide-default-footer
      mobile-breakpoint="0"
      loading-text="Carregando lista de cervejas..."
      no-data-text="Nenhuma cerveja encontrada"
      @page-count="pageCount = $event"
    />
    
    <v-col cols="12" class="text-center">
      <v-btn :disabled="isLoadingGrid" icon @click="changePage(false)">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>

      {{ page }}
      
      <v-btn :disabled="isLoadingGrid || beersData.length < 25" icon @click="changePage(true)">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-col>
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
      this.$set(this, 'isLoadingGrid', true);

      const { itemsPerPage } = this.options;
      
      const response = await beer.getBeers({ page: this.page, limit: itemsPerPage });

      if (response.code === "SEARCH_SUCCESS") {
        this.$set(this, 'beersData', response.result);
      }
      
      else {
        this.$set(this, 'beersData', []);
      }

      this.$set(this, 'isLoadingGrid', false);
    },

    changePage(next) {
      if (next) {
        this.$set(this, 'page', this.page + 1);
        this.getBeers();
      } else if (this.page >= 2) {
        this.$set(this, 'page', this.page - 1);
        this.getBeers();
      }
    }
  }
})
</script>