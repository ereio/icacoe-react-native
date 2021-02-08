/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {t} from 'react-native-tailwindcss';

const Board = ({onPressSpot, spots}, ...props) => {
  const rows = [0, 1, 2];
  const cols = [0, 1, 2];

  return rows.map((row) => (
    <View key={row} style={[t.flex, t.flexRow]}>
      {cols.map((col) => (
        <TouchableOpacity
          {...props}
          key={row * 3 + col}
          onPress={() => onPressSpot(row * 3 + col)}
          style={[
            t.flex,
            t.textCenter,
            t.bgBlue700,
            t.alignCenter,
            t.itemsCenter,
            t.roundedFull,
            t.m4,
            styles.spotDefaults,
          ]}>
          {props.children}
        </TouchableOpacity>
      ))}
    </View>
  ));
};

const styles = StyleSheet.create({
  spotDefaults: {
    width: 48,
    height: 48,
  },
});

export default Board;
