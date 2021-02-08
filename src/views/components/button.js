/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import {tw} from 'react-native-tailwindcss';

const Game: () => React$Node = (props) => {
  return (
    <>
      <View
        style={[tw.bgBlue100, tw.alignCenter, tw.itemsCenter, tw.roundedFull]}>
        {props.children}
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default Game;
