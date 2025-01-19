// app/CustomLoader.tsx
import React from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

const CustomLoader = () => {
  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, { transform: [{ rotate: spin }] }]}>
        iogia
      </Animated.Text>
      <Text style={styles.text}>koleksi bacan istimewa</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default CustomLoader;