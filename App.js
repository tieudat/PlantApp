import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Home,PlantDetail } from './screens';
import Tabs from './navigation/Tabs'

const Stack = createStackNavigator();

const App = () => {
  

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName ={'Home'}
      >
          <Stack.Screen 
            name ="Home"
            component={Tabs}
            options = {{
              headerShown:false,
            }}
            
          />
          <Stack.Screen 
            name ="PlantDetail"
            component={PlantDetail}
            options = {{
              headerShown:false,
            }}
          />
         
         
        

      </Stack.Navigator>
        
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  body:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20
  }
});

export default App;
