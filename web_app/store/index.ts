import { Store } from 'vuex';
import { initializeStores } from '@/utils/store-util';

const initializer = (store: Store<any>) => initializeStores(store);

export const plugins = [initializer];
export const strict = false;
export * from '@/utils/store-util';
