import React from 'react';
import {StyleSheet} from 'react-native';
import PlView from '../../ui-elements/PlView';
import PlText from '../../ui-elements/PlText';
import {COLORS} from '../../constants/Colors';
import {normalize} from '../../constants/Platform';
import {FONTS} from '../../constants/Fonts';
import PlIcon from '../../ui-elements/PlIcon';

const CardFooter = () => {
  return (
    <PlView style={styles.container}>
      <PlIcon
        name={'chevron-left'}
        type={'MaterialIcons'}
        size={32}
        style={styles.icon}
      />
      <PlText style={styles.label}>
        {' '}
        <PlIcon
          name={'flag'}
          type={'MaterialIcons'}
          size={16}
          style={styles.icon}
        />{' '}
        Flag
      </PlText>
      <PlIcon
        name={'chevron-right'}
        type={'MaterialIcons'}
        size={32}
        style={styles.icon}
      />
    </PlView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: normalize(8),
    alignContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: normalize(14),
    color: COLORS.BLACK,
    textAlign: 'center',
  },
  icon: {
    color: COLORS.BLACK,
  },
});
export default CardFooter;
