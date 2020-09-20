import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import PlView from '../../ui-elements/PlView';
import PlText from '../../ui-elements/PlText';
import {normalize} from '../../constants/Platform';
import {COLORS} from '../../constants/Colors';
import {FONTS} from '../../constants/Fonts';

const CourseHeading = props => {
  const {title, viewAll} = props;
  return (
    <PlView style={styles.container}>
      <View style={styles.headingContainer}>
        <PlText style={styles.heading}>{title}</PlText>
      </View>

      <View>
        {viewAll ? (
          <TouchableOpacity style={styles.seeAllContainer}>
            <PlText style={styles.seeAllText}>See all</PlText>
          </TouchableOpacity>
        ) : null}
      </View>
    </PlView>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    alignContent: 'center',
    marginVertical: normalize(16),
    marginHorizontal: normalize(18),
  },
  headingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  heading: {
    color: COLORS.BLACK,
    fontSize: normalize(24),
    fontFamily: FONTS.SEMI_BOLD,
  },
  seeAllContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  seeAllText: {
    color: COLORS.SECONDARY,
    fontSize: normalize(14),
    fontFamily: FONTS.REGULAR,
  },
});
export default CourseHeading;
