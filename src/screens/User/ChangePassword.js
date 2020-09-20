import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import PlView from '../../ui-elements/PlView';
import PlTextInput from '../../ui-elements/PlTextInput';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import PlCard from '../../ui-elements/PlCard';
import PlText from '../../ui-elements/PlText';
import {normalize} from '../../constants/Platform';
import {FONTS} from '../../constants/Fonts';
import {COLORS} from '../../constants/Colors';
import PlButton from '../../ui-elements/PlButton';
import {useNavigation} from '@react-navigation/native';

const ChangePassword = () => {
  const navigation = useNavigation();
  return (
    <PlView gradiant style={styles.container}>
      <Header headerStyle={{backgroundColor: 'transparent'}} />
      <PlView></PlView>
      <Logo text={'ProLearn'} white />
      <PlCard style={styles.cardContainer}>
        <PlText style={styles.heading}>Change password</PlText>
        <PlText style={styles.subHeading}>Insert your new password</PlText>

        <PlView style={styles.inputContainer}>
          <PlTextInput placeholder={'NEW PASSWORD'} style={styles.inputField} />
          <PlTextInput
            placeholder={'CONFIRM PASSWORD'}
            style={styles.inputField}
          />
        </PlView>
        <PlButton
          onPress={() => navigation.navigate('Main')}
          style={styles.button}>
          Set new password
        </PlButton>
      </PlCard>
      <PlView style={styles.subView}>
        <PlText style={styles.alreadyAccount}>
          Remembered your old password ?
        </PlText>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <PlText style={styles.loginHereText}>Login here</PlText>
        </TouchableOpacity>
      </PlView>
    </PlView>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: normalize(14),
    color: COLORS.BLACK,
    alignSelf: 'center',
    textDecorationLine: 'underline',
    marginBottom: normalize(24),
  },
  loginHereText: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: normalize(16),
    color: COLORS.WHITE,
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
  alreadyAccount: {
    fontFamily: FONTS.REGULAR,
    fontSize: normalize(14),
    color: COLORS.WHITE,
    alignSelf: 'center',
  },
  subView: {
    alignItems: 'center',
  },
  inputField: {
    borderBottomWidth: 1,
    flex: 1,
    borderBottomColor: COLORS.LIGHT_GREY,
  },
  inputContainer: {
    marginVertical: normalize(24),
  },
  button: {
    margin: normalize(16),
  },
  heading: {
    fontFamily: FONTS.EXTRA_BOLD,
    fontSize: normalize(24),
    color: COLORS.BLACK,
    alignSelf: 'center',
    marginTop: normalize(16),
  },
  subHeading: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: normalize(16),
    color: COLORS.GREY,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  cardContainer: {
    width: '85%',
    borderRadius: normalize(16),
    marginHorizontal: normalize(16),
    marginVertical: normalize(16),
    padding: normalize(16),
  },
});
export default ChangePassword;
