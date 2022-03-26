import React, { Component } from "react";0
import { Text } from 'react-native';

const textArray = [59,58,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,
  38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,
  12,11,10,9,8,7,6,5,4,3,2,1,0];


class Countdown60 extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 1000);
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

export default Countdown60;
