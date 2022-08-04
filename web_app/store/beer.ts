import {
  Module,
  VuexModule,
  Action
} from 'vuex-module-decorators'

import { $axios } from '~/utils/nuxt-instance'

interface Paginate {
  page: Number,
  limit: Number
}

@Module({
  name: 'beer',
  stateFactory: true,
  namespaced: true
})

export default class Beer extends VuexModule {
  @Action
  public async getBeers(payload: Paginate) {
    try {
      return await $axios.$get(`beers/${payload.page}/${payload.limit}`)
        .then((response) => {
          if (response.code !== 'SEARCH_SUCCESS') 
            throw new Error(response);

          return response;
        })
        .catch(({ response }) => {
          return response;
        });
    } catch(err) {
      return err;
    }
  }
}