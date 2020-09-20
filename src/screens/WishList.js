import React, {Component} from 'react';
import PlView from '../ui-elements/PlView';
import CourseItem from '../components/Courses/CourseItem';
import _ from 'lodash';
import {FeaturedCoursesData} from '../data/FeaturedCoursesData';

import Header from '../components/Header';
export default class WishList extends Component {
  render() {
    return (
      <PlView>
        <Header gradiant title={'Wishlist'} homeButton />
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
