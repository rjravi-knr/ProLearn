import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Content from './Content';
import PlText from '../ui-elements/PlText';
import PlView from '../ui-elements/PlView';
import Header from './Header';
import Footer from './Footer';

export default class UiContainer extends Component {
  render() {
    const {
      noHeader,
      noFooter,
      gradiant,
      headerGradiant,
      footerButtonPress,
      headerStyle,
      right,
      scrollable,
      left,
      title,
      backButton,
      homeButton,
      footerButton,
    } = this.props;
    return (
      <PlView style={{flex: 1}}>
        {noHeader ? null : (
          <Header
            headerStyle={headerStyle}
            right={right}
            left={left}
            title={title}
            backButton={backButton}
            homeButton={homeButton}
            gradiant={headerGradiant}
          />
        )}
        <Content gradiant={gradiant} scrollable={scrollable}>
          {this.props.children}
        </Content>
        {noFooter ? null : (
          <Footer
            footerButtonPress={footerButtonPress}
            footerButton={footerButton}
          />
        )}
      </PlView>
    );
  }
}
