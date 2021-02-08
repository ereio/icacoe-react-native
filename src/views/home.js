import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

import {Button} from './components';

import {useNavigation} from '@react-navigation/native';
import {Routes} from '../global/values';

/**
 * Home Screen
 */
const Home = (props) => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
          <Button onPress={() => navigation.push(Routes.Game)}>
            <Text>{'Start Game'}</Text>
          </Button>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default Home;
