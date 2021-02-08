import React from 'react';
import {useDispatch} from 'react-redux';
import {StyleSheet, ScrollView, View, Text, SafeAreaView} from 'react-native';

import {Button} from './components';

import {useNavigation} from '@react-navigation/native';
import {Routes} from '../global/values';
import {colors, t} from 'react-native-tailwindcss';
import {useCallback} from 'react';
import {RESET_GAME, RESET_BOARD, resetGame} from '../store/game/actions';

/**
 * Score Screen
 */
const Score = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onResetGame = useCallback((spot) => dispatch(resetGame()), [dispatch]);
  return (
    <SafeAreaView>
      <View
        style={[
          t.flex,
          t.flexCol,
          t.flexGrow,
          t.alignCenter,
          t.justifyAround,
          t.p12,
        ]}>
        <Button
          onPress={() => {
            onResetGame();
            navigation.replace(Routes.Home);
          }}>
          <Text style={[t.textWhite]}>{'Return Home'}</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {},
});

export default Score;
