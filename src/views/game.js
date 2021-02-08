import React from 'react';
import {useSelector, deepEqual, useDispatch} from 'react-redux';

import {StyleSheet, SafeAreaView, View, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Button, Board} from './components';
import {Routes} from '../global/values';
import {t} from 'react-native-tailwindcss';
import {useCallback} from 'react';
import {addPlayerMove} from '../store/board/actions';

/**
 * Home Screen
 */
const Game = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const positions = useSelector((state) => state.board.positions, deepEqual);
  const winner = useSelector((state) => state.game.winner, deepEqual);

  const onSetPlayerMove = useCallback((spot) => dispatch(addPlayerMove(spot)), [
    dispatch,
  ]);

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
          <Board onPressSpot={onSetPlayerMove} positions={positions} />
        </View>
        {!winner || (
          <Button
            onPress={() => navigation.replace(Routes.Score)}
            disabled={!winner}>
            <Text style={[t.textWhite]}>{'View Score'}</Text>
          </Button>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Game;
