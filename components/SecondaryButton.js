import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

export const SecondaryButton = ({text, style, ...rest}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, style]}
      {...rest}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.triangle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#8F9090',
    paddingHorizontal: 8,
    paddingVertical: 5,
    flexDirection: 'row',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 12,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#8F9090',
    marginLeft: 5,
    transform: [{rotate: '180 deg'}],
  },
  text: {
    fontSize: 16,
    color: '#8F9090',
  },
});
