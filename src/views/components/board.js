/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {t} from 'react-native-tailwindcss';

const Board = ({onPressSpot, positions}, ...props) => {
  const rows = [0, 1, 2];
  const cols = [0, 1, 2];

  return rows.map((row) => (
    <View key={row} style={[t.flex, t.flexRow]}>
      {cols.map((col) => {
        const position = row * 3 + col;
        let char = positions[position] || '';
        return (
          <TouchableOpacity
            {...props}
            key={position}
            onPress={() => (char.length ? null : onPressSpot(position))}
            style={[
              t.flex,
              t.textCenter,
              t.bgBlue700,
              t.alignCenter,
              t.itemsCenter,
              t.justifyCenter,
              t.roundedFull,
              t.m4,
              styles.spotDefaults,
            ]}>
            <Text style={[t.textWhite, t.textXl, t.fontBold]}>{char}</Text>
          </TouchableOpacity>
        );
      })}
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
