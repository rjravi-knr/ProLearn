import React from 'react';
import {ScrollView} from 'react-native';
import PlView from '../ui-elements/PlView';

export default function Content(props) {
  if (props.scrollable) {
    return (
      <ScrollView
        style={{flex: 1}}
        bounces={props.bounces}
        showsVerticalScrollIndicator={false}>
        <PlView gradiant={props.gradiant}>{props.children}</PlView>
      </ScrollView>
    );
  }
  return (
    <PlView style={{flex: 1}} gradiant={props.gradiant}>
      {props.children}
    </PlView>
  );
}
