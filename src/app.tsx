import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { RootStoreProvider, Store, setupStore } from './config';
import Example from './example';

const App = () => {
  const [store, setStore] = React.useState<null | Store>(null);

  React.useEffect(() => {
    setupStore().then(setStore);
  }, []);

  if (!store) {
    return null; // or loading screen
  }

  return (
    <RootStoreProvider value={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Text>React Native Config + Context Example</Text>
          <Example />
        </View>
      </SafeAreaView>
    </RootStoreProvider>
  );
};

export default App;
