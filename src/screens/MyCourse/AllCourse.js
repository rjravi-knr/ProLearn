import React from 'react';
import PlView from '../../ui-elements/PlView';
import CourseItem from '../../components/Courses/CourseItem';
import _ from 'lodash';
import {FeaturedCoursesData} from '../../data/FeaturedCoursesData';

const AllCourse = props => {
  return (
    <PlView>
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
};

export default AllCourse;
