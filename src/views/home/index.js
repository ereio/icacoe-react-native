import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

import { Button } from '../components';

import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../global/values';
import { colors, t } from 'react-native-tailwindcss';

/**
 * Home Screen
 */
export const Home = (props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={[
        t.flex,
        t.flexCol,
        t.flexGrow,
        t.alignCenter,
        t.justifyAround,
        t.m6,
      ]}>
      <View style={(t.justifyCenter, t.itemsCenter)}>
        <Text style={[t.text5xl]}>{'Icacoe'}</Text>
        <Text style={[t.alignCenter, t.text2xl, t.p4]}>
          {'A Tic Tac Toe Example'}
        </Text>
      </View>
      <Button onPress={() => navigation.replace(Routes.Game)}>
        <Text style={[t.textWhite]}>{'Start Game'}</Text>
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  defaults: {},
  title: {},
}); 
