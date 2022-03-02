import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { colors } from '../Themes/Colors';

function PortofelQR() {
  return (
  <View style={{alignItems:'center', justifyContent:'center', flex:1,backgroundColor: colors.darkgray}}>
  <Text style={{color: colors.red}}>Portofel QR</Text>
  </View>
  )
}
export default PortofelQR
