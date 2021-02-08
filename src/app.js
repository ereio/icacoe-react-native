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
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';

import Home from './views/home';
import Game from './views/game';
import Score from './views/score';
import {Routes} from './global/values';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name={Routes.Home} component={Home} />
              <Stack.Screen name={Routes.Game} component={Game} />
              <Stack.Screen name={Routes.Score} component={Score} />
            </Stack.Navigator>
          </NavigationContainer>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
