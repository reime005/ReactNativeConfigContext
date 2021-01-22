import React from 'react';
import { View, Text } from 'react-native';
import { useConfig } from './config';

const Example = () => {
  const { testValue, env } = useConfig();

  return (
    <View>
      <Text>{testValue}</Text>
      <Text>{JSON.stringify(env)}</Text>
    </View>
  );
};

export default Example;
