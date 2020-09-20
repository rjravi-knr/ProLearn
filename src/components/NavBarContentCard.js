import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import PlView from '../ui-elements/PlView';
import _ from 'lodash';
import PlIcon from '../ui-elements/PlIcon';
import PlText from '../ui-elements/PlText';
import {FONTS} from '../constants/Fonts';
import {COLORS} from '../constants/Colors';
import {normalize} from '../constants/Platform';
import {useNavigation} from '@react-navigation/native';

const NavBarContentCard = props => {
  const {items, title, titleIcon, iconType} = props;

  const navigation = useNavigation();
  return (
    <PlView style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <PlIcon
          style={styles.icon}
          size={16}
          name={titleIcon}
          type={iconType}
        />
        <PlText style={styles.title}>{title.toUpperCase()}</PlText>
      </View>

      {_.map(items, item => {
        return (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate(item.value)}>
            <Text style={styles.itemText}>{item.label}</Text>
          </TouchableOpacity>
        );
      })}
    </PlView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    marginRight: normalize(24),
    borderTopRightRadius: normalize(16),
    borderBottomRightRadius: normalize(16),
    marginTop: normalize(24),
    paddingVertical: normalize(16),
    paddingHorizontal: normalize(24),
    alignContent: 'center',
  },
  title: {
    marginVertical: normalize(16),
    marginHorizontal: normalize(8),
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: normalize(18),
    color: COLORS.BLACK,
  },
  icon: {
    color: COLORS.GREY,
  },
  itemContainer: {
    marginVertical: normalize(8),
    marginHorizontal: normalize(24),
  },
  itemText: {
    fontFamily: FONTS.REGULAR,
    fontSize: normalize(16),
    color: COLORS.GREY,
  },
});

export default NavBarContentCard;
