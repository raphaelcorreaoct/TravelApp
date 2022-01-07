import React from 'react';
import {Image} from 'react-native';
export const Avatar = ({src}) => (
  <Image source={src} style={{width: 54, height: 54, borderRadius: 8}} />
);
