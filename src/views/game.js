import React from 'react';
import { useSelector, deepEqual, useDispatch } from 'react-redux';

import { StyleSheet, SafeAreaView, View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Button, Board } from './components';
import { Routes } from '../global/values';
import { t } from 'react-native-tailwindcss';
import { useCallback } from 'react';
import { addPlayerMove } from '../store/board/actions';

/**
 * Home Screen
 */
const Game = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const full = useSelector((state) => state.board.full, deepEqual);
  const winner = useSelector((state) => state.game.winner, deepEqual);
  const positions = useSelector((state) => state.board.positions, deepEqual);

  // useCallback to optimize rerendering - alternative below
  // onSetPlayerMove = (spot) => dispatch(addPlayerMove(spot));
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
          <View style={[t.flex, t.justifyCenter, t.itemsCenter]}>
            <Text
              style={[
                t.textGreen800,
                t.textXl,
                t.p6,
              ]}>{`${winner} won the round!`}</Text>
          </View>
        )}
        {!full || (
          <View style={[t.flex, t.justifyCenter, t.itemsCenter]}>
            <Text style={[t.textGreen800, t.textXl, t.p6]}>
              {'This round was a tie'}
            </Text>
          </View>
        )}
        {(!winner && !full) || (
          <Button
            onPress={() => navigation.replace(Routes.Score)}
            disabled={!winner && !full}>
            <Text style={[t.textWhite]}>{'View Score'}</Text>
          </Button>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Game;
