import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Header from '../components/Header';
import CourseCollection from '../components/Courses/CourseCollection';
import {FeaturedCoursesData} from '../data/FeaturedCoursesData';
import PlView from '../ui-elements/PlView';
import PlButton from '../ui-elements/PlButton';
import FlashCards from './FlashCards/FlashCards';

export default class FeaturedCourse extends Component {
  render() {
    return (
      <PlView>
        <Header gradiant title={'Courses'} homeButton />
        <ScrollView>
          <CourseCollection
            title={'Featured courses'}
            item={FeaturedCoursesData}
          />
          <CourseCollection title={'New courses'} item={FeaturedCoursesData} />
        </ScrollView>
      </PlView>
    );
  }
}
