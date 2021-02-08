import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

import {Button} from './components';

import {useNavigation} from '@react-navigation/native';
import {Routes} from '../global/values';

/**
 * Score Screen
 */
const Score = (props) => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
          <Button onPress={() => navigation.popToTop()}>
            <Text>{'Return Home'}</Text>
          </Button>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default Score;
