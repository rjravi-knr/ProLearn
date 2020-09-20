import React, {Component} from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';
import {
  normalize,
  dim,
  AppBarHeight,
  StatusBarHeight,
} from '../constants/Platform';
import {FONTS} from '../constants/Fonts';
import {COLORS} from '../constants/Colors';
import PlView from '../ui-elements/PlView';
import PlIcon from '../ui-elements/PlIcon';
import PlText from '../ui-elements/PlText';
import {useNavigation} from '@react-navigation/native';

const Header = props => {
  const {
    headerStyle,
    gradiant,
    right,
    left,
    title,
    backButton,
    homeButton,
  } = props;
  const navigation = useNavigation();

  return (
    <PlView
      gradiant={gradiant ? true : false}
      style={[styles.header, headerStyle]}>
      <View style={{flex: 0.25}}>
        {backButton ? (
          <PlIcon
            size={Platform.OS === 'ios' ? 34 : 30}
            type={'Ionicons'}
            name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
            style={{
              color: COLORS.WHITE,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: normalize(16),
            }}
            onPress={() => {
              navigation.goBack();
            }}
          />
        ) : null}
        {homeButton ? (
          <PlIcon
            onPress={() => {
              navigation.openDrawer();
            }}
            size={Platform.OS === 'ios' ? 34 : 30}
            type={'Ionicons'}
            name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
            style={{
              color: COLORS.WHITE,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: normalize(16),
            }}
          />
        ) : null}
      </View>
      <View
        style={{
          flex: 1,
          left: normalize(0),
          justifyContent: 'flex-start',
        }}>
        {/*  title here */}
        {title ? (
          <PlText
            numberOfLines={1}
            style={{
              textAlign: Platform.OS === 'android' ? 'left' : 'center',
              color: COLORS.WHITE,
              fontFamily: FONTS.SEMI_BOLD,
              fontSize: normalize(18),
            }}>
            {title.toUpperCase()}
          </PlText>
        ) : null}
      </View>
      <View style={{flex: 0.25}}></View>
    </PlView>
  );
};

const styles = StyleSheet.create({
  header: {
    alignSelf: 'stretch',
    height: AppBarHeight() + StatusBarHeight(),
    paddingTop: Platform.OS === 'ios' ? normalize(24) : 0,
    flexDirection: 'row',
    width: dim.width,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY,
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  right: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  box: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    height: AppBarHeight(),
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0.3,
    color: COLORS.WHITE,
    fontFamily: FONTS.REGULAR,
  },
});

export default Header;
