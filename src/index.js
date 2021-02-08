/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

import {Provider} from 'react-redux';

import Home from './views/home';
import Game from './views/game';
import Score from './views/score';
import {Routes} from './global/values';
import {store} from './store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.fullscreen}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name={Routes.Home} component={Home} />
            <Stack.Screen name={Routes.Game} component={Game} />
            <Stack.Screen name={Routes.Score} component={Score} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
  },
});

export default App;
