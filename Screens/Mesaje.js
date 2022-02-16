import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { colors } from '../Themes/Colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CountDown from 'react-native-countdown-component';

import forward from '../Images/drawable-xxhdpi/forward_yellow_arrow.png';


function Mesaje({ navigation }) {
return (
<View
style={{alignItems:'center', justifyContent:'center', flex:1}}>

<TouchableOpacity style={styles.button} onPress={()=>{alert("Branza !")}}>
<Text style={styles.text} >Mesaje primite</Text>
  <Image source={forward} style={styles.forward}/>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={()=>{alert("Branza !")}}>
  <Text style={styles.text} >Mesaje trimise</Text>
  <Image source={forward} style={styles.forward}/>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={()=>{alert("Branza !")}}>
  <Text style={styles.text} >Trimite feedback</Text>
  <Image source={forward} style={styles.forward}/>
</TouchableOpacity>


<View style={{flex:6}} onPress={()=>{alert("Branza !")}}>

</View>

</View>
)
}

export default Mesaje

const  styles= StyleSheet.create({
  button:{
    flex:1,
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:colors.darkgray,
    width:380,
    borderBottomWidth:1,
    borderBottomColor:colors.bargrey,
    // borderBottomLength:50,
    // padding:10,
    // marginBottom: 30
  },
  forward:{
    flex:1,
    position:'absolute',
    marginLeft:375,
    height: 15,
    width:11
    // marginLeft:20
  },
    text:{
      marginLeft:10,
      marginLeft:0,
      fontSize:15,
      color:colors.whitetext
    }
})
