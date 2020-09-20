import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import _ from 'lodash';
import PlView from '../../ui-elements/PlView';
import {normalize} from '../../constants/Platform';
import CourseItem from '../../components/Courses/CourseItem';
import {CompletedCourseData} from '../../data/CompletedCourseData';
import CourseCertificate from '../../components/Courses/CourseCertificate';

const Completed = () => {
  const [showCertificate, setshowCertificate] = useState(false);
  return (
    <PlView>
      {_.map(CompletedCourseData, single => {
        return (
          <CourseItem
            completed={single.completed}
            title={single.title}
            imageUrl={single.imageUrl}
            onCertificateClick={() => setshowCertificate(!showCertificate)}
          />
        );
      })}
      <CourseCertificate
        onShare={() => setshowCertificate(!showCertificate)}
        isVisible={showCertificate}
      />
    </PlView>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: normalize(16),
  },
});

export default Completed;
