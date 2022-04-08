import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import Countdown25 from './countdown/25sec.js'
import { colors } from '../Themes/Colors';
import QRCode from "react-qr-code";

const textArray = [
  '@C88a9b376-1d22-4144-8fc6-51ee5d20eac0',
  '@Cebee2456-e4bb-45aa-907c-0b42a88130b4',
  '@C4d372484-4bdc-45fd-bd89-45ba83a94f3d',
  '@C9e267aae-55ea-4956-92d9-c4a215a553ca',
  '@C9767d852-c233-40a2-808b-bc1f46a1dc83',
  '@Cba7637f9-56ef-42b6-8afc-b75523d83d9c',
  '@C8cdede48-095f-41cc-83c3-fe96493944ed',
  '@C682401ec-cb3a-4840-928d-44cb7932f547',
  '@C7d7e5da8-8ffe-4e1d-a965-bfea4f4a2a3c',
  '@Ce6dd040f-f273-489d-a284-7d9dd001cc8a',
  '@Cfba5f5d3-8b58-4fdb-b005-180a765ace60'
  ];

class QRcode1 extends Component{
    constructor() {
      super();
      this.state = { textIdx: 0 };
    }

    componentDidMount() {
      this.timeout = setInterval(() => {
        let currentIdx = this.state.textIdx;
        this.setState({ textIdx: currentIdx + 1 });
      }, 24000);
    }

  componentWillUnmount() {
      clearInterval(this.timeout);
    }

  render(){

let textThatChanges = textArray[this.state.textIdx % textArray.length];

    return (
<QRCode value={textThatChanges} size={350} bgColor={colors.whitetext} level='H' style={styles.qr} fgColor={colors.black}/>
      // <QRCode value={value} size={350} bgColor={colors.whitetext} level='H' style={styles.qr} fgColor={colors.black} />

    );
  }
}

export default QRcode1;

const styles = StyleSheet.create({
  qr:{
    // marginLeft:10,
    color:colors.textgray,

  }
})
