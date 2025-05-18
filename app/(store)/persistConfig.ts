import storage from 'redux-persist/lib/storage';
import { PersistConfig } from 'redux-persist';
import { RootState } from './rootReducer'; // Import RootState from rootReducer

const persistConfig: PersistConfig<RootState> = {
  key: `apexDocs/root`,
  version: 1,
  storage,
  whitelist: ['apexBilling_auth', 'apexBilling_storedSchema'], // Add any other reducers you want to persist
};

export default persistConfig;
