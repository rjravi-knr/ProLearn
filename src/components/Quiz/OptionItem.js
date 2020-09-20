import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import PlView from '../../ui-elements/PlView';
import PlText from '../../ui-elements/PlText';
import {normalize} from '../../constants/Platform';
import {COLORS} from '../../constants/Colors';
import {FONTS} from '../../constants/Fonts';
import PlIcon from '../../ui-elements/PlIcon';

const OptionItem = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <PlView
        style={[
          styles.innerContainer,
          {
            borderWidth: props.selected ? 2 : 0,
            borderColor:
              props.selected && props.correct ? COLORS.SUCCESS : COLORS.ERROR,
          },
        ]}>
        <PlIcon
          size={normalize(18)}
          type={'MaterialCommunityIcons'}
          name={
            props.selected
              ? 'checkbox-marked-outline'
              : 'checkbox-blank-outline'
          }
          style={{
            color: props.selected
              ? props.correct
                ? COLORS.SUCCESS
                : COLORS.ERROR
              : COLORS.LIGHT_GREY,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: normalize(16),
          }}
        />
        <PlText style={styles.text}>{props.text}</PlText>
        {props.correct ? (
          <PlIcon
            size={normalize(18)}
            type={'MaterialCommunityIcons'}
            name={props.correct ? 'check' : null}
            style={{
              color: props.correct ? COLORS.SUCCESS : COLORS.ERROR,
              marginHorizontal: normalize(16),
            }}
          />
        ) : (
          <PlIcon
            size={normalize(18)}
            type={'MaterialCommunityIcons'}
            name={props.correct ? null : 'close'}
            style={{
              color: props.selected ? COLORS.ERROR : COLORS.WHITE,
              marginHorizontal: normalize(16),
            }}
          />
        )}
      </PlView>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: 'row',
    borderRadius: normalize(8),
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontFamily: FONTS.BOLD,
    fontSize: normalize(16),
    flex: 1,
    marginVertical: normalize(16),
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: normalize(16),
    marginVertical: normalize(8),
    borderRadius: normalize(8),

    backgroundColor: COLORS.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
export default OptionItem;
