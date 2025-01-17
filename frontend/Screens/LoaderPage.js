import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const LoaderPage = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Welcome');
    }, 4000); // 3 seconds

    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/file.png')}
        style={styles.logo}
      />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // You can change the background color
  },
  logo: {
    width: 400, // Adjust the size of your logo
    height: 500, // Adjust the size of your logo
    resizeMode: 'contain',
  },
  loadingText: {
    fontSize: 20,
    marginTop: 20,
    fontFamily: 'Poppins',
  },

});

export default LoaderPage;