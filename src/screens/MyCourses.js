import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import PlView from '../ui-elements/PlView';
import Header from '../components/Header';
import MyCourseTabs from '../navigations/MyCourseTabs';

export default class MyCourses extends Component {
  render() {
    return (
      <PlView style={styles.container}>
        <Header gradiant title={'My Courses'} homeButton />
        <ScrollView>
          <MyCourseTabs />
        </ScrollView>
      </PlView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
