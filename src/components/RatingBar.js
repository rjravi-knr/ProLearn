import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import AntDesicgIcons from 'react-native-vector-icons/AntDesign';
import {normalize} from '../constants/Platform';
import {COLORS} from '../constants/Colors';

class RatingBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingBar: [],
    };
  }

  printStars() {
    let ratingbar = [];
    let {selected} = this.state;
    for (let i = 1; i <= this.props.stars; i++) {
      ratingbar.push(
        <AntDesicgIcons
          name={'star'}
          style={
            this.props.rating < i ? styles.starUnchecked : styles.starChecked
          }
        />,
      );
    }
    return ratingbar;
  }

  render() {
    return <View style={styles.container}>{this.printStars()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: normalize(4),
    flexDirection: 'row',
    alignItems: 'center',
  },
  starUnchecked: {
    fontSize: normalize(12),
    color: COLORS.LIGHT_GREY,
    marginRight: normalize(4),
  },
  starChecked: {
    fontSize: normalize(12),
    color: COLORS.PRIMARY,
    marginRight: normalize(4),
  },
});

export default RatingBar;
