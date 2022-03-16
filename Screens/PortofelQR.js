import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, RefreshControl } from 'react-native';
import { colors } from '../Themes/Colors';
import QRCode from "react-qr-code";
import CountDown from 'react-native-countdown-component';
import Timer from './countdown.js'


function PortofelQR() {
  const [time, setTime] = useState(25);
  const reset = () => {
    setTime(25);
  }
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
      <QRCode value="@C3ef26879-b704-4438-b467-85180156d778" size='350' bgColor={colors.whitetext} level='H' style={styles.qr} fgColor={colors.black}/>
    </View>
    <View style={styles.underQR}>
      <Text style={styles.textunderQR}>Cod control valabil:<Timer />
        <CountDown
        until={time}
        onFinish={reset}
        digitStyle={{backgroundColor: 'transparent',  flexDirection:'row', marginRight:-9, width:25 ,height:30}}
        digitTxtStyle={{color: colors.textgray, marginTop:18, marginRight:9}}
        timeToShow={['S']}
        timeLabels={{s:''}}
        size={12}
        /> seconds</Text>
      <Text style={styles.textunderQR}>Ticked valid till - zile: 29 , ore:23 , min:16 , sec:
        <CountDown
        until={15}
        digitStyle={{backgroundColor: 'transparent',  flexDirection:'row', marginRight:-9, width:25 ,height:30}}
        digitTxtStyle={{color: colors.textgray, marginTop:18, marginRight:9}}
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
