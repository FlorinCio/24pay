import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, RefreshControl } from 'react-native';
import { colors } from '../Themes/Colors';
import QRCode from "react-qr-code";
import CountDown from 'react-native-countdown-component';
import Countdown25 from './countdown/25sec.js'
import Countdown60 from './countdown/60sec.js'
import Countdown1h from './countdown/1h.js'
import QRcode1 from './QRchange.js'

var currentdate = new Date();
var datetime = (currentdate.getDate())+ "."
              + 0+(currentdate.getMonth()+1) +"."
              + currentdate.getFullYear() +"   "
              + currentdate.getHours() +":"
              + currentdate.getMinutes() +":"
              + currentdate.getSeconds()

function PortofelQR() {
  return (
  <View style={{ flex:1,backgroundColor: colors.darkgray}}>
      <View style={{borderBottomWidth:1, borderBottomColor:colors.whitetext}}>
      </View>
    <View style={styles.upperline}>
      <Text style={styles.text}>Order       10422899</Text>
    </View>
    <View style={styles.upperline}>
          <Text style={styles.text}>Data       {datetime}</Text>
    </View>
    <View style={styles.upperline}>
      <Text style={styles.text}>Tip       Iași - bilet o zonă 120 minute</Text>
    </View>

    <Text style={{flex:1, position:'absolute', marginLeft:5, color:colors.scanYellow, marginTop:95}}>Preț       2.50 lei</Text>

    <View style={styles.qrview}>
    <QRcode1 />
    </View>

    <View style={styles.underQR}>
      <Text style={styles.textunderQR}>Cod control valabil: <Countdown25/>  seconds</Text>
      <Text style={styles.textunderQR}>Ticket valid till - zile:0 , ore:1 ,
       min:<Countdown1h /> , sec:<Countdown60 />
       </Text>
    </View>
</View>
  )
}
export default PortofelQR;


const styles = StyleSheet.create({
  upperline:{
    // flex:1,
    // position:'absolute',
    marginTop:6,
    borderBottomWidth:1,
    borderBottomColor:colors.whitetext,
  },
  text:{
    marginLeft:5,
    color:colors.scanYellow,
    width:420,
    marginBottom:5,
    justifyContent:'center'
  },
  qrview:{
    height: 410,
    paddingLeft:30,
    paddingTop:30,
    color:colors.scanYellow,
    marginTop:42,
    backgroundColor:colors.whitetext
  },
  qr:{
    // marginLeft:10,
    color:colors.textgray,

  },
  underQR:{
    paddingTop:20,

  },
  textunderQR:{
    color:colors.scanYellow,
    justifyContent:'center'
  }
})
