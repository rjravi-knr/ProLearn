import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Platform, TouchableOpacity} from 'react-native';
import PlView from '../ui-elements/PlView';
import PlText from '../ui-elements/PlText';
import FastImage from 'react-native-fast-image';
import {normalize} from '../constants/Platform';
import {FONTS} from '../constants/Fonts';
import {COLORS} from '../constants/Colors';
import Logo from '../components/Logo';
import {useNavigation} from '@react-navigation/native';

const TutorialScreen = () => {
  const navigation = useNavigation();

  return (
    <PlView style={styles.contanier}>
      <FastImage
        style={styles.image}
        source={require('../../assets/plant_desk.jpg')}
      />
      <Logo text={'ProLearn'} />
      <PlText style={styles.header}>
        Develop valuable skills anywhere, anytime.
      </PlText>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <PlView gradiant style={styles.button}>
          <PlText style={styles.buttonText}>Start learning now</PlText>
        </PlView>
      </TouchableOpacity>
    </PlView>
  );
};
export default TutorialScreen;
const styles = StyleSheet.create({
  contanier: {
    flex: 1,
  },
  button: {
    marginHorizontal: normalize(16),
    borderRadius: normalize(50),
    paddingVertical: normalize(16),
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: normalize(16),
    color: COLORS.WHITE,
  },
  image: {
    width: '100%',
    height: Platform.OS === 'ios' ? '60%' : '55%',
  },
  header: {
    width: '70%',
    marginHorizontal: normalize(16),
    color: COLORS.BLACK,
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: normalize(28),
    marginBottom: normalize(24),
  },
});
