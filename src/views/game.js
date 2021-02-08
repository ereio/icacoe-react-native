import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Button, Board} from './components';
import {Routes} from '../global/values';
import {t} from 'react-native-tailwindcss';

/**
 * Home Screen
 */
const Game = (props) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={[
        t.flex,
        t.flexCol,
        t.flexGrow,
        t.itemsCenter,
        t.justifyAround,
        t.m4,
      ]}>
      <View style={styles.body}>
        <View style={[t.flexCol, t.minH100, t.minW100, t.p12]}>
          <Board onPressSpot={(spot) => console.log(spot)} />
        </View>
        <Button onPress={() => navigation.replace(Routes.Score)}>
          <Text style={[t.textWhite]}>{'View Score'}</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Game;
