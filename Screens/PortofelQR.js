import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, RefreshControl } from 'react-native';
import { colors } from '../Themes/Colors';
import QRCode from "react-qr-code";
import CountDown from 'react-native-countdown-component';
import Countdown25 from './countdown.js'
var timex = 6


// var arr = [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0];
var arr = [6,5,4,3,2,1,0];
let times = 25
// setInterval(function(){
//     times = arr[index++ % arr.length];
// }, 1000)

function PortofelQR() {




  return (



  <View style={{ flex:1,backgroundColor: colors.darkgray}}>
      <View style={{borderBottomWidth:1, borderBottomColor:colors.whitetext}}>
      </View>
    <View style={styles.upperline}>
      <Text style={styles.text}>Order       10422899</Text>
    </View>
    <View style={styles.upperline}>
          <Text style={styles.text}>Data       09.03.22 11:35:35</Text>
    </View>
    <View style={styles.upperline}>
      <Text style={styles.text}>Tip       Iasi - abonament student o zone, 30 zile</Text>
    </View>

    <Text style={{flex:1, position:'absolute', marginLeft:5, color:colors.scanYellow, marginTop:95}}>Pret       12.00 lei</Text>

    <View style={styles.qrview}>
      <QRCode value="123888888888888888888888888885" size='360' bgColor={colors.whitetext} level='H' style={styles.qr} fgColor={colors.black}/>
    </View>
    <View style={styles.underQR}>
      <Text style={styles.textunderQR}>Cod control valabil: <Countdown25/>  seconds</Text>
      <Text style={styles.textunderQR}>Ticked valid till - zile: 29 , ore:23 , min:16 , sec:
        <CountDown
        id={Math.random()}
        until={25}
        digitStyle={{backgroundColor: 'transparent',  flexDirection:'row', marginRight:-9, width:25 ,height:30}}
        digitTxtStyle={{color: colors.scanYellow, marginTop:18, marginRight:9}}
        timeToShow={['S']}
        timeLabels={{s:''}}
        size={12}
        /></Text>
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
    marginLeft:10,
    color:colors.textgray,

  },underQR:{
    paddingTop:20,

  },
  textunderQR:{
    color:colors.scanYellow,
    justifyContent:'center'
  }
})
