import React from 'react';
import {StyleSheet} from 'react-native';
import PlView from './PlView';
import {COLORS} from '../constants/Colors';
import {normalize} from '../constants/Platform';

const PlCard = props => {
  return (
    <PlView style={[styles.cardContainer, props.style]}>
      {props.children}
    </PlView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.WHITE,
    elevation: 5,
    shadowOffset: {width: 3, height: 5},
    shadowColor: COLORS.LIGHT_GREY,
    shadowOpacity: 1.0,
    shadowRadius: 4,
    margin: normalize(8),
  },
});

export default PlCard;
