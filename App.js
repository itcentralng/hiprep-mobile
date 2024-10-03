import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Import Bottom Tab Navigator
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons for tab icons
import AppLoading from 'expo-app-loading'; // For showing loading screen
import { ThemeProvider } from './src/theme/ThemeProvider';

// Import your screens
import LoginScreen from './src/screens/LoginScreen';
import FindTutor from './src/screens/FindTutor';
import HomeScreen from './src/screens/HomeScreen';
import BookingsScreen from './src/screens/BookingsScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import AccountScreen from './src/screens/AccountScreen';
import { Text } from 'react-native';

import DashboardScreen from './src/screens/Tutor/DashboardScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator(); // Create the Bottom Tab Navigator

// Main Tabs Component - Defines the tab navigation
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // Set icons based on the route name
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Bookings':
              iconName = 'book';
              break;
            case 'FindTutor':
              iconName = 'search';
              break;
            case 'Messages':
              iconName = 'message';
              break;
            case 'Account':
              iconName = 'account-circle';
              break;
          }

          // Return the icon component with size changes based on focus
          return <MaterialIcons name={iconName} size={focused ? 30 : 25} color={color} />;
        },
        tabBarLabel: ({ focused, color }) => (
          <Text style={{ color, fontSize: focused ? 14 : 12 }}>{route.name}</Text>
        ),
        headerShown: false, // Hide headers for all tab screens
        tabBarActiveTintColor: '#FC5C99', // Active tab icon and text color
        tabBarInactiveTintColor: 'gray', // Inactive tab icon and text color
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        },
      })}
    >
      {/* Define each tab screen with its corresponding component */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Bookings" component={BookingsScreen} />
      <Tab.Screen name="FindTutor" component={FindTutor} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Function to load custom fonts
  const loadFonts = async () => {
    await Font.loadAsync({
      'CustomFont-Regular': require('./assets/fonts/IBM_Plex_Sans/IBMPlexSans-Regular.ttf'),
      'CustomFont-Bold': require('./assets/fonts/IBM_Plex_Sans/IBMPlexSans-Bold.ttf'),
    });
    setFontsLoaded(true);
  };

  // Load fonts when the component is mounted
  useEffect(() => {
    loadFonts();
  }, []);

  // If fonts are not loaded, show the loading screen
  if (!fontsLoaded) {
    return <AppLoading />; // Show loading screen while fonts load
  }

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false, // Hide headers for all screens
          }}
        >
          {/* Stack screen for login */}
          <Stack.Screen name="Login" component={LoginScreen} />

          {/* Main Tabs after login */}
          <Stack.Screen
            name="MainTabs"
            component={MainTabs} // Load Tab Navigator after login
          />

          <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
