import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import PlView from '../ui-elements/PlView';
import CourseItem from '../components/Courses/CourseItem';
import _ from 'lodash';
import {FeaturedCoursesData} from '../data/FeaturedCoursesData';
import Header from '../components/Header';
import PlText from '../ui-elements/PlText';
import PlTextInput from '../ui-elements/PlTextInput';
import {COLORS} from '../constants/Colors';
import {normalize, isIos} from '../constants/Platform';
import PlIcon from '../ui-elements/PlIcon';

export default class SearchCourse extends Component {
  render() {
    return (
      <PlView>
        <Header gradiant title={'Search'} homeButton />
        <PlView gradiant>
          <PlTextInput
            containerStyle={styles.inputContainer}
            autoFocus={true}
            iconName={'search'}
            iconType={'MaterialIcons'}
          />
        </PlView>
        {_.map(FeaturedCoursesData, single => {
          return (
            <CourseItem
              rating={single.stars}
              author={single.author}
              title={single.title}
              imageUrl={single.imageUrl}
            />
          );
        })}
      </PlView>
    );
  }
}
const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: normalize(8),
    paddingVertical: isIos() ? normalize(12) : 0,
  },
});
