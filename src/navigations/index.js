import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainDrawerNavigation from '../navigations/MainDrawerNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import CourseDetails from '../screens/CourseDetails';
import VideoLesson from '../screens/LessonScreens/VideoLesson';
import TutorialScreen from '../screens/TutorialScreen';
import SignUp from '../screens/User/SignUp';
import SignIn from '../screens/User/Signin';
import ChangePassword from '../screens/User/ChangePassword';
import ForgotPassword from '../screens/User/ForgotPassword';
import ProfileScreen from '../screens/ProfileScreen';
import FlashCards from '../screens/FlashCards/FlashCards';
import Quiz from '../screens/Quiz/Quiz';
import QuizHome from '../screens/Quiz/QuizHome';
import SwipeCards from '../screens/SwipCards/SwipeCards';
import SwipCardsHome from '../screens/SwipCards/SwipCardsHome';
import Notifications from '../screens/Notifications';

const Stack = createStackNavigator();

export default class MainContainer extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          headerMode={'none'}
          initialRouteName={'TutorailScreen'}>
          <Stack.Screen name="Main" component={MainDrawerNavigation} />
          <Stack.Screen name="CourseDetail" component={CourseDetails} />
          {/* Video Lessons */}
          <Stack.Screen name="VideoLesson" component={VideoLesson} />
          <Stack.Screen name="TutorailScreen" component={TutorialScreen} />
          {/* user screens */}
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          {/* FlashCards */}
          <Stack.Screen name="FlashCards" component={FlashCards} />
          {/* Quiz */}
          <Stack.Screen name="Quiz" component={Quiz} />
          <Stack.Screen name="QuizHome" component={QuizHome} />
          {/* SwipeCards */}
          <Stack.Screen name="SwipeCardsHome" component={SwipCardsHome} />
          <Stack.Screen name="SwipeCards" component={SwipeCards} />
          {/* Notifications */}
          <Stack.Screen name="Notification" component={Notifications} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
