import * as React from 'react';

import Config from 'react-native-config';

export interface Store {
  config: Config;
}

type EnvKeys = 'SOME_API_KEY';

interface Config {
  testValue: number;
  env: {
    [key in EnvKeys]: string;
  };
}

const initialStore: Store = {
  config: {
    testValue: 42,
    env: {
      SOME_API_KEY: Config.SOME_API_KEY,
    },
  },
};

export const setupStore = async (): Promise<Store> => {
  // we could perform asynchronously loading operations here
  return initialStore;
};

const RootStoreContext = React.createContext<Store>(initialStore);

/**
 * The provider our root component will use to expose the root store
 */
export const RootStoreProvider = RootStoreContext.Provider;

export const useConfig = () => React.useContext(RootStoreContext).config;
