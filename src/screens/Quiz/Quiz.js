import React from 'react';
import {StyleSheet} from 'react-native';
import UiContainer from '../../components/UiContainer';
import PlText from '../../ui-elements/PlText';
import OptionItem from '../../components/Quiz/OptionItem';
import {FONTS} from '../../constants/Fonts';
import {normalize} from '../../constants/Platform';
import {COLORS} from '../../constants/Colors';

const Quiz = () => {
  return (
    <UiContainer
      footerButton={'Next Question'}
      footerButtonPress={() => console.log('CLICKED')}
      headerGradiant
      backButton
      title={'Quiz'}>
      <PlText style={styles.label}>Question 3 of 10</PlText>
      <PlText style={styles.question}>
        Which one of the floowing will be correct answer?
      </PlText>
      <OptionItem text={'RAW '} />
      <OptionItem selected text={'ISO '} />
      <OptionItem selected correct text={'Satrun '} />
      <OptionItem correct text={'Shutter Speed '} />
    </UiContainer>
  );
};
const styles = StyleSheet.create({
  label: {
    fontFamily: FONTS.REGULAR,
    fontSize: normalize(14),
    color: COLORS.LIGHT_GREY,
    marginHorizontal: normalize(16),
    marginTop: normalize(16),
  },
  question: {
    fontFamily: FONTS.BOLD,
    color: COLORS.BLACK,
    fontSize: normalize(24),
    margin: normalize(16),
  },
});
export default Quiz;
