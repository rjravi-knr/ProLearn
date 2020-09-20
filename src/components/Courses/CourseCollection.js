import React from 'react';
import PlView from '../../ui-elements/PlView';
import CourseHeading from './CourseHeading';
import CourseItem from './CourseItem';
import _ from 'lodash';

const CourseCollection = props => {
  const {title, item} = props;
  return (
    <PlView>
      <CourseHeading title={title} viewAll={item.length > 4 ? true : false} />
      {_.map(item, single => {
        return (
          <CourseItem
            rating={single.stars}
            author={single.author}
            title={single.title}
            imageUrl={single.imageUrl}
            offerdPrice={single.offer}
            basePrice={single.price}
            currency={single.currency}
          />
        );
      })}
    </PlView>
  );
};

export default CourseCollection;
