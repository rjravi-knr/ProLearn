import React from 'react';
import {StyleSheet} from 'react-native';
import PlView from '../../ui-elements/PlView';
import PlProgressBar from '../../ui-elements/PlProgressBar';
import PlText from '../../ui-elements/PlText';
import PlIcon from '../../ui-elements/PlIcon';
import {COLORS} from '../../constants/Colors';
import {normalize} from '../../constants/Platform';
import {FONTS} from '../../constants/Fonts';

const CardProgress = () => {
  return (
    <PlView style={styles.container}>
      <PlIcon
        name={'shuffle'}
        type={'MaterialIcons'}
        size={24}
        style={styles.icon}
      />
      <PlView style={{flex: 1, marginHorizontal: normalize(16)}}>
        <PlProgressBar progress={40} />
      </PlView>
      <PlText style={styles.label}> 10 of 25</PlText>
    </PlView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: normalize(8),
  },
  label: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: normalize(14),
    color: COLORS.BLACK,
  },
  icon: {
    color: COLORS.BLACK,
  },
});
export default CardProgress;
