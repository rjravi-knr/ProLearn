import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {COLORS} from '../constants/Colors';
import {normalize} from '../constants/Platform';
import {FONTS} from '../constants/Fonts';
import AllCourse from '../screens/MyCourse/AllCourse';
import OnGoing from '../screens/MyCourse/OnGoing';
import Completed from '../screens/MyCourse/Completed';

const Tab = createMaterialTopTabNavigator();

export default function MyCourseTabs() {
  return (
    <Tab.Navigator
      initialRouteName="All"
      tabBarOptions={{
        indicatorStyle: {backgroundColor: COLORS.PRIMARY},
        activeTintColor: COLORS.PRIMARY,
        inactiveTintColor: COLORS.GREY,
        labelStyle: {fontSize: 14, fontFamily: FONTS.SEMI_BOLD},
        style: {
          marginTop: normalize(16),
          backgroundColor: 'transparent',
          marginHorizontal: normalize(16),
          shadowOffset: {height: 0, width: 0},
          shadowColor: 'transparent',
          shadowOpacity: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="All"
        component={AllCourse}
        options={{tabBarLabel: 'All'}}
      />
      <Tab.Screen
        name="OnGoing"
        component={OnGoing}
        options={{tabBarLabel: 'OnGoing'}}
      />
      <Tab.Screen
        name="Completed"
        component={Completed}
        options={{tabBarLabel: 'Completed'}}
      />
    </Tab.Navigator>
  );
}
