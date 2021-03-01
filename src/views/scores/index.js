import React from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

import { Button } from '../components';

import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../global/values';
import { t } from 'react-native-tailwindcss';
import { useCallback } from 'react';
import { resetGame } from '../../store/game/actions';

/**
 * Score Screen 
 * 
 * TODO: Wanted to show the number of times someone had won
 * the game as X or O
 */
export const Scores = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onResetGame = useCallback(() => dispatch(resetGame()), [dispatch]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={(t.justifyCenter, t.itemsCenter)}>
        <Text style={[t.alignCenter, t.text2xl, t.p4]}>
          {'Scores:'}
        </Text>
      </View>
      <Button
        onPress={() => {
          onResetGame();
          navigation.replace(Routes.Home);
        }}>
        <Text style={[t.textWhite]}>{'Return Home'}</Text>
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: "space-around",
    marginHorizontal: 48,
  },
});
