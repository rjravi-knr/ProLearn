import React from 'react';
import {StyleSheet} from 'react-native';
import PlView from '../../ui-elements/PlView';
import PlCard from '../../ui-elements/PlCard';
import PlText from '../../ui-elements/PlText';
import {normalize} from '../../constants/Platform';
import {LessonsListData} from '../../data/LessonsListData';
import LessonItem from '../../components/CourseDetails/LessonItem';
import _ from 'lodash';
import {COLORS} from '../../constants/Colors';

const Lessons = () => {
  return (
    <PlView style={styles.container}>
      <PlCard style={styles.card}>
        {_.map(LessonsListData, item => {
          return (
            <LessonItem
              title={item.title}
              time={item.time}
              type={item.type}
              sl_no={item.sl_no}
            />
          );
        })}
      </PlCard>
    </PlView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: normalize(16),
    marginVertical: normalize(8),
  },
  card: {
    borderRadius: normalize(8),
  },
});

export default Lessons;
