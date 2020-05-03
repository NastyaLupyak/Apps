import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>K-KILL!</Text>
      <Text>Контора снова в деле</Text>
      <Text>Контора снова в деле</Text>
      <Text>Контора снова в деле</Text>
      <Text>Контора снова в деле</Text>
      <Text>Контора снова в деле</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#098',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
