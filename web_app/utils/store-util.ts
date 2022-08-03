import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';

import Auth from '~/store/auth';

// eslint-disable-next-line import/no-mutable-exports
let auth: Auth;

const initializeStores = (store: Store<any>) => {
  auth = getModule(Auth, store);
};

export {
  initializeStores,
  auth,
};
