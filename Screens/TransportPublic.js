import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { colors } from '../Themes/Colors';

function TransportPublic({ navigation }) {
return (
<View style={{alignItems:'center', justifyContent:'center', flex:1,backgrouncolor: '#e5ebf2'}}>
  <StatusBar style='light'  currentHeight ='50' backgroundColor="#000000" />
  <Button
    title="Go to Details... again"
    onPress={() => navigation.navigate('Istoric')}
  />
<Text>Chat Screen View</Text>

</View>
)
}
export default TransportPublic
