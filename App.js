import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import AppLoading from 'expo-app-loading'; 
import { ThemeProvider } from './src/theme/ThemeProvider';
import { useTheme } from './src/theme/ThemeProvider';


import LoginScreen from './src/screens/LoginScreen';
import FindTutor from './src/screens/FindTutor';
import HomeScreen from './src/screens/HomeScreen';
import BookingsScreen from './src/screens/BookingsScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import AccountScreen from './src/screens/AccountScreen';
import TutorProfileScreen from './src/screens/Tutor/TutorProfileScreen';
import TutorCheckingScreen from './src/screens/TutorCheckingScreen'
import { Text } from 'react-native';

import DashboardScreen from './src/screens/Tutor/DashboardScreen';
import ChildDetailsForm from './src/components/ChildDetailsForm';
import BookingSummary from './src/components/BookingSummary';
import PaymentSection from './src/components/PaymentSection';
import PaymentInfo from './src/screens/PaymentInfo';
import PasswordChange from './src/screens/PasswordChange';
import EmailUpdate from './src/screens/EmailUpdate';
import OTP from './src/screens/OTP';
import EmailUpdateSuccess from './src/screens/EmailUpdateSuccess';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator(); 


function MainTabs() {
  const {theme} = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          
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

          
          return <MaterialIcons name={iconName} size={focused ? 30 : 25} color={color} />;
        },
        tabBarLabel: ({ focused, color }) => (
          <Text style={{ color, fontSize: focused ? 14 : 12, fontFamily: theme.fonts.regular }}>{route.name}</Text>
        ),
        headerShown: false, 
        tabBarActiveTintColor: '#FC5C99', 
        tabBarInactiveTintColor: 'gray', 
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        },
      })}
    >
      {}
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

  
  const loadFonts = async () => {
    await Font.loadAsync({
      'CustomFont-Regular': require('./assets/fonts/IBM_Plex_Sans/IBMPlexSans-Regular.ttf'),
      'CustomFont-Bold': require('./assets/fonts/IBM_Plex_Sans/IBMPlexSans-Bold.ttf'),
    });
    
    setFontsLoaded(true);
  };

  
  useEffect(() => {
    loadFonts();
  }, []);

  
  if (!fontsLoaded) {
    return <AppLoading />; 
  }

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false, 
          }}
        >
          {}
          <Stack.Screen name="Login" component={LoginScreen} />

          {}
          <Stack.Screen
            name="MainTabs"
            component={MainTabs} 
          />

          <Stack.Screen
          name="FindTutor"
          component={FindTutor}
          />

          <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          />

          <Stack.Screen
          name="TutorProfile"
          component={TutorProfileScreen}
          />

          <Stack.Screen
          name="TutorChecking"
          component={TutorCheckingScreen}
          />

          <Stack.Screen
          name="BookingSummary"
          component={BookingSummary}
          />

          <Stack.Screen
          name="PaymentSection"
          component={PaymentSection}
          />

          <Stack.Screen
          name="PaymentInfo"
          component={PaymentInfo}
          />

          <Stack.Screen
          name="PasswordChange"
          component={PasswordChange}
          />

          <Stack.Screen
          name="EmailUpdate"
          component={EmailUpdate}
          />

          <Stack.Screen
          name="OTP"
          component={OTP}
          />

          <Stack.Screen
          name="EmailUpdateSuccess"
          component={EmailUpdateSuccess}
          />

<Stack.Screen name="ChildDetails" component={ChildDetailsForm} />

        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
