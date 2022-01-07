import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

export const PrimaryButton = ({children, style, ...rest}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, style]}
      {...rest}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    minHeight: 53,
    minWidth: 53,
    elevation: 6,
    borderRadius: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
