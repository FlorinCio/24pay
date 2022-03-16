import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { colors } from '../Themes/Colors';

function Divertisment() {
    return (
    <View style={{alignItems:'center', paddingTop:15, flex:1,backgroundColor: colors.darkgray, fontSize: 14}}>
    <Text style={{color: colors.yellow}}>Divertisment</Text>
    </View>
    )
  }
  export default Divertisment
