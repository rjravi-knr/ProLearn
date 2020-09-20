import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import PlView from '../ui-elements/PlView';
import PlIcon from '../ui-elements/PlIcon';
import {normalize} from '../constants/Platform';
import {COLORS} from '../constants/Colors';

const SocialMediaLogins = () => {
  return (
    <PlView style={styles.container}>
      <PlIcon
        size={normalize(26)}
        type={'AntDesign'}
        name={'google'}
        style={styles.google}
      />
      <PlIcon
        size={normalize(26)}
        type={'AntDesign'}
        name={'facebook-square'}
        style={styles.facebook}
      />
      <PlIcon
        size={normalize(26)}
        type={'AntDesign'}
        name={'twitter'}
        style={styles.twitter}
      />
    </PlView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: normalize(16),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
  },
  facebook: {
    color: '#3a5694',
  },
  twitter: {
    color: '#1e9ceb',
  },
  google: {color: '#d54837'},
});
export default SocialMediaLogins;
