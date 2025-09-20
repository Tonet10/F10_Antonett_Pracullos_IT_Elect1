import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      <Text style={styles.counterText}>Count: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Increment"
          onPress={() => setCount(count + 1)}
        />
        <Button
          title="Decrement"
          onPress={() => setCount(count - 1)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counterText: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
});

export default CounterApp;