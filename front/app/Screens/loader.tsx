// app/Loader.tsx
import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import * as Font from 'expo-font';

const Loader = () => {
    const loadFonts = async () => {
        await Font.loadAsync({
          'BubblegumSans-Regular': require('../../assets/fonts/BubblegumSans-Regular.ttf'),
        });
      };

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="white" />
      <Text style={styles.LoaderTitle}>Readify</Text>
      <Text style={styles.LoaderSubtitle}>Your Gateway to Infinite Stories</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#1C1C5F',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoaderTitle:{
    padding:24,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'BubblegumSans-Regular',
  },
  LoaderSubtitle: {
    fontSize: 16,
    color: 'white',
  }
});

export default Loader;