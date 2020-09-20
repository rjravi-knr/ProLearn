import React from 'react';
import {Text} from 'react-native';

const PlText = props => {
  return <Text {...props}>{props.children}</Text>;
};

export default PlText;
