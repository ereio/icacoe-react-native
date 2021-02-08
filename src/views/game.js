import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Button} from './components';
import {Routes} from '../global/values';

/**
 * Home Screen
 */
const Game = (props) => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
          <Button onPress={() => navigation.navigate(Routes.Score)}>
            <Text>{'View Score'}</Text>
          </Button>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default Game;
