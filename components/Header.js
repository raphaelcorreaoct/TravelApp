import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Avatar} from './Avatar';
import {PrimaryButton} from './PrimaryButton';

export const Header = () => {
  return (
    <View style={style.container}>
      <Avatar src={require('../assets/images/Place4.png')} />
      <View style={style.textContainer}>
        <Text style={style.primaryText}>Welcome Raphael</Text>
        <Text style={style.secondaryText}>Explore beautiful world</Text>
      </View>
      <PrimaryButton style={{width: 54}}>
        <Image
          source={require('../assets/icons/icon-menu.png')}
          style={{width: 24, height: 24}}
        />
      </PrimaryButton>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 23,
    paddingHorizontal: 30,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 12,
  },
  primaryText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  secondaryText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#333',
  },
});
