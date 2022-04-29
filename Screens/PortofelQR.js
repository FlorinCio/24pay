import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, RefreshControl } from 'react-native';
import { colors } from '../Themes/Colors';
import QRCode from "react-qr-code";
import CountDown from 'react-native-countdown-component';
import Countdown25 from './countdown/25sec.js'
import Countdown60 from './countdown/60sec.js'
import Countdown1h from './countdown/1h.js';
import Countdown24h from './countdown/24h.js';
import QRcode1 from './QRchange.js'

function addZeroToDate(date) {
  if (date < 10) {
    date = '0' + date;
  }
  return date;
}
function getTimeUntil(deadline){
  const time = new Date(deadline).getTime() - new Date().getTime();
  const seconds = Math.floor((time/1000) % 60);
  const minutes = Math.floor((time/1000/60) % 60);
  const hours = Math.floor(time/(1000*60*60) % 24);
  const days = Math.floor(time/(1000*60*60*24));

return {days: days, hours: hours, minutes: minutes, seconds: seconds};
}
var currentdate = new Date();
currentdate.setHours(7);
currentdate.setMinutes(18);
currentdate.setSeconds(5);
currentdate.setMilliseconds(0);
var currentdate2 = new Date();
var currentDay = addZeroToDate(currentdate.getDate());
if((currentdate2.getHours()  == 7 && currentdate2.getMinutes < 10) || currentdate2.getHours() < 7){
  currentDay--;
}
var currentMonth = addZeroToDate(currentdate.getMonth()+1);
var currentHours = addZeroToDate(currentdate.getHours());
var currentMinutes = addZeroToDate(currentdate.getMinutes());
var currentSeconds = addZeroToDate(currentdate.getSeconds());
var currentMilliseconds = addZeroToDate(currentdate.getMilliseconds());
var datetime = currentDay + "." + currentMonth + "."
              + currentdate.getFullYear() + "   "
              + currentHours + ":"
              + currentMinutes + ":"
              + currentSeconds;
let timeUntilTomorrow = getTimeUntil(currentdate.setDate(currentDay + 1));

function PortofelQR() {
  return (
  <View style={{ flex:1,backgroundColor: colors.darkgray}}>
      <View style={{borderBottomWidth:1, borderBottomColor:colors.whitetext}}>
      </View>
    <View style={styles.upperline}>
      <Text style={styles.text}>
        Order
      </Text>
      <Text style={{flex:1, position:'absolute', marginLeft:55, color:colors.scanYellow}}>10422899</Text>
    </View>
    <View style={styles.upperline}>
          <Text style={styles.text}>Data</Text>
          <Text style={{flex:1, position:'absolute', marginLeft:55, color:colors.scanYellow}}>{datetime}</Text>
    </View>
    <View style={styles.upperline}>
      <Text style={styles.text}>Tip</Text>
      <Text style={{flex:1, position:'absolute', marginLeft:55, color:colors.scanYellow}}>Abonament 1 zi</Text>
    </View>


    <Text style={{flex:1, position:'absolute', marginLeft:5, color:colors.scanYellow, marginTop:95}}>Preț</Text>
    <Text style={{flex:1, position:'absolute', marginLeft:55, color:colors.scanYellow, marginTop:95}}>10 lei</Text>
    <View style={styles.qrview}>
    <QRcode1 />
    </View>

    <View style={styles.underQR}>
      <Text style={styles.textunderQR}>Cod control valabil: <Countdown25  milliseconds={currentMilliseconds}/>  seconds</Text>
      <Text style={styles.textunderQR}>Ticket valid till - zile:0 , ore:
      <Countdown24h hours={timeUntilTomorrow['hours']}/> ,
       min:<Countdown1h minutes={timeUntilTomorrow['minutes']}/> ,
       sec:<Countdown60 seconds={timeUntilTomorrow['seconds']}/>
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
  text2:{
    // marginLeft:15,
    paddingLeft: 20,
    color:colors.scanYellow,
    width:420,
    marginBottom:1,
    // justifyContent:'center'
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
