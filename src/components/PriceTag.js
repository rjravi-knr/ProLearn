import React from 'react';
import {StyleSheet} from 'react-native';
import PlText from '../ui-elements/PlText';
import PlView from '../ui-elements/PlView';
import {FONTS} from '../constants/Fonts';
import {normalize} from '../constants/Platform';
import {COLORS} from '../constants/Colors';

const PriceTag = props => {
  const {basePrice, offerdPrice, currency} = props;
  return (
    <PlView style={styles.container}>
      <PlText style={styles.basePrice}>
        {currency} {basePrice}
      </PlText>
      <PlText style={styles.offerdPrice}>
        {currency} {offerdPrice}
      </PlText>
    </PlView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  basePrice: {
    fontFamily: FONTS.REGULAR,
    fontSize: normalize(14),
    color: COLORS.BLACK,
    marginRight: normalize(8),
  },
  offerdPrice: {
    fontFamily: FONTS.LIGHT,
    fontSize: normalize(12),
    color: COLORS.LIGHT_GREY,
    textDecorationLine: 'line-through',
  },
});

export default PriceTag;
