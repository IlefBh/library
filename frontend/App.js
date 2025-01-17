import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoaderPage from './Screens/LoaderPage';
import WelcomePage from './Screens/WelcomePage';
import CommunityPage from './Screens/CommunityPage';
import ReadingPage from './Screens/ReadingPage';
import ProfilePage from './Screens/Profile';

const Stack = createStackNavigator();

const forSlide = ({ current, next, layouts }) => {
  const translateX = current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [layouts.screen.width, 0], // Slide in from the right
  });

  return {
    cardStyle: {
      transform: [{ translateX }],
    },
  };
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Loader"
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: forSlide, // Custom slide transition
        }}
      >
        <Stack.Screen name="Loader" component={LoaderPage} />
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="Community" component={CommunityPage} />
        <Stack.Screen name="Reading" component={ReadingPage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;