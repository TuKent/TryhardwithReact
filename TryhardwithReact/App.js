import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Intro from './screen/intro/index';
import Intro2 from './screen/intro2/index';
import Intro3 from './screen/intro3/index';
import Login from './screen/login/index';
const Stack = createStackNavigator();

class App extends Component {
  render() {

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            style={{ "alignItems": 'center' }}
            name="Welcome"
            component={Login}
            options={{
              headerStyle: {
                backgroundColor: '#E60509',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} />

          <Stack.Screen
            style={{ "alignItems": 'center' }}
            name="Intro"
            component={Intro}
            options={{
              headerStyle: {
                backgroundColor: '#E60509',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} />

          <Stack.Screen
            style={{ "alignItems": 'center' }}
            name="Intro2"
            component={Intro2}
            options={{
              headerStyle: {
                backgroundColor: '#E60509',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} />

<Stack.Screen
            style={{ "alignItems": 'center' }}
            name="Intro3"
            component={Intro3}
            options={{
              headerStyle: {
                backgroundColor: '#E60509',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} />

        </Stack.Navigator>
      </NavigationContainer>
      // <View style={{ flex: 1, flexDirection: 'row' }}>
      //   <View style={{ flex:1, backgroundColor: 'powderblue' }}>
      //     <Text>SẶC</Text>
      //   </View>
      //   <View style={{ width: 150, height: 150, backgroundColor: 'skyblue' }} />
      //   <View style={{ width: 150, height: 150, backgroundColor: 'steelblue' }} />
      // </View>
    )
  }
}

export default App;
