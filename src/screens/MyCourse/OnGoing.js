import React from 'react';
import {StyleSheet} from 'react-native';
import _ from 'lodash';
import PlView from '../../ui-elements/PlView';
import {normalize} from '../../constants/Platform';
import CourseItem from '../../components/Courses/CourseItem';
import {OnGoingCourseData} from '../../data/OnGoingCourseData';

const OnGoing = () => {
  return (
    <PlView>
      {_.map(OnGoingCourseData, single => {
        return (
          <CourseItem
            progress={single.progress}
            title={single.title}
            imageUrl={single.imageUrl}
          />
        );
      })}
    </PlView>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: normalize(16),
  },
});

export default OnGoing;
