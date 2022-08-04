/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';

import Auth from '@/store/auth';
import Beer from '@/store/beer';

let auth: Auth;
let beer: Beer;

const initializeStores = (store: Store<any>) => {
  auth = getModule(Auth, store);
  beer = getModule(Beer, store);
};

export {
  initializeStores,
  auth,
  beer
};
