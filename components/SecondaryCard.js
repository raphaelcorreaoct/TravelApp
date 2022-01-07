import React from 'react';

import {TouchableOpacity, StyleSheet, View, Image, Text} from 'react-native';

export const SecondaryCard = ({title, subTitle, src}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={style.container}>
      <Image source={src} style={style.image} />
      <View style={{padding: 10}}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.subTitle}>{subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    width: 280,
    height: 107,
    marginRight: 10,
    borderRadius: 20,
    flexDirection: 'row',
    elevation: 6,
    backgroundColor: '#fff',
  },
  image: {
    borderRadius: 20,
    justifyContent: 'flex-end',
    padding: 20,
    width: 107,
    height: 107,
  },
  title: {
    color: '#5E5959',
    fontWeight: '500',
    fontSize: 18,
  },
  subTitle: {
    color: '#5E5959',
    fontWeight: '400',
    fontSize: 14,
  },
});
