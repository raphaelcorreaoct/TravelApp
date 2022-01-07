import React from 'react';

import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

export const PrimaryCard = ({title, subTitle, src}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={style.container}>
      <ImageBackground source={src} style={style.image}>
        <Text style={style.text}>{title}</Text>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../assets/icons/icon-pin.png')} />
          <Text style={style.text}>{subTitle}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    width: 250,
    height: 320,
    marginRight: 10,
    borderRadius: 20,
  },
  image: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'flex-end',
    padding: 20,
  },
  text: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 16,
  },
});
