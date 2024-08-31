import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './app/screens/loginScreen';
import SignupScreen from './app/screens/SignupScreen';
import UnderConstructionScreen from './app/screens/UnderConstructionScreen';
import ClientSignUpScreen from './app/screens/ClientSignUpScreen';
import ServiceProSignUpScreen from './app/screens/ServiceProSignUpScreen';
import ClientHomeScreen from './app/screens/ClientHomeScreen';
import ServiceProviderHomeScreen from './app/screens/ServiceProviderHomeScreen';
import ViewProposalsScreen from './app/screens/ViewProposalsScreen';
import SubmitProposalScreen from './app/screens/SubmitProposalScreen';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: 'URIT',
          headerTitleAlign: 'center',
        }}>

        <Stack.Screen name="LOGIN" component={LoginScreen} />
        <Stack.Screen name="SIGN UP" component={SignupScreen} />
        <Stack.Screen
          name="Reset Password"
          component={UnderConstructionScreen}
        />
        <Stack.Screen name="Sign Up as Client" component={ClientSignUpScreen} />
        <Stack.Screen
          name="Sign Up as Client as Service Provider"
          component={ServiceProSignUpScreen}
        />
        <Stack.Screen name="Client Homescreen" component={ClientHomeScreen} />
        <Stack.Screen
          name="ServiceProvider Homescreen"
          component={ServiceProviderHomeScreen}
        />
        <Stack.Screen
          name="View Proposals"
          component={ViewProposalsScreen}
        />
          <Stack.Screen
          name="Submit Proposal"
          component={SubmitProposalScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
