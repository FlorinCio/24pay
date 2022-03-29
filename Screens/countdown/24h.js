import React, { Component } from "react";
import { Text } from 'react-native';

const textArray = [23,22,21,20,19,18,17,16,15,14,13,
  12,11,10,9,8,7,6,5,4,3,2,1,0];


class Countdown24h extends Component {
  constructor(hours) {
    super();
    this.state = { textIdx: textArray.indexOf(hours['hours']) };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 3600000);
  }

componentWillUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];

    return (
        <Text>
        {textThatChanges}
        </Text>
    );
  }
}

export default Countdown24h;
