import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal, Pressable, ScrollView, TextInput, Image } from 'react-native';
import { colors } from '../Themes/Colors';
import TabelIncarcare from './tabelaIncarcare.js';
import bntcontacts from '../Images/drawable-xhdpi/bntcontacts.png';
import smiley_disabled from '../Images/drawable-xhdpi/smiley_disabled.png';


function Incarcare() {
const [modalVisible, setModalVisible] = useState(false);
return (
  <View style={{height: '100%', width:'100%', backgroundColor:colors.darkgray, color: colors.yellow}}>
    <View style={{marginLeft: '9.5%'}}>
      <Text style={{color:colors.gray, marginTop:'6%', marginBottom:5, fontSize: 12 }}>Introdu numarul de telefon pentru  reincarcare:</Text>
      <TextInput  secureTextEntry={false} maxLength={10} keyboardType="numeric" style={{width:'72%', fontSize:20,textDecorationLine: 'underline', paddingLeft:5, paddingBottom:'1.5%',marginTop:'0.5%', marginRight: 30, borderBottomWidth: 1, borderBottomColor: colors.gray , color: colors.gray }} selectionColor={colors.yellow}
       placeholder='07' placeholderTextColor={'#fbffff'} />
      <Image source={smiley_disabled} style={{ flex:1, position:'absolute', marginLeft:266,marginTop:68, height: 20, width:20}}/>
      <Image source={bntcontacts} style={{ flex:1, position:'absolute', marginLeft:300,marginTop:30, height: 37, width:50}}/>
    </View>
    <View style={{marginLeft:11}}>
      <Text style={{color: colors.yellow, fontWeight:'bold', fontSize:19, marginTop:21, marginBottom:11,marginLeft:25 }}>Preturi speciale prin 24pay</Text>
      <TabelIncarcare />
    </View>
  </View>
);
};

const styles = StyleSheet.create({
textStyle: {
  color: colors.scanYellow,
  fontSize:45,
  marginTop:'15%',
  marginLeft:'5%',
  // fontWeight: "bold",
  // textAlign: "center"
},
textStyle1: {
  // color: "scanYellow",
  fontSize:45,
  marginTop:'15%',
  marginLeft:'5%',
  fontWeight: "bold",
  paddingTop: '85%'
},

});
  export default Incarcare
