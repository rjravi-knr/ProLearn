import React from 'react';
import {View, Text} from 'react-native';
import LinearGradiant from 'react-native-linear-gradient';
import {
  GRADENT_PATTERNS,
  GRADIENT_VERTICAL,
  GRADIENT_HORIZONTAL,
} from '../constants/Colors';

const PlView = props => {
  return props.gradiant ? (
    <LinearGradiant
      start={
        props.transparent ? GRADIENT_HORIZONTAL.START : GRADIENT_VERTICAL.START
      }
      end={GRADIENT_VERTICAL.END}
      style={props.style}
      colors={
        props.transparent
          ? GRADENT_PATTERNS.PATTERNS_2
          : GRADENT_PATTERNS.PATTERNS_1
      }>
      {props.children}
    </LinearGradiant>
  ) : (
    <View style={props.style}>{props.children}</View>
  );
};

export default PlView;
