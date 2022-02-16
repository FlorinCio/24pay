import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { colors } from '../Themes/Colors';

import forward from '../Images/drawable-xxhdpi/forward_yellow_arrow.png';

function EcranSetari({ navigation }) {
return (
<View
style={{alignItems:'center', justifyContent:'center', flex:1}}>

<TouchableOpacity style={styles.button} onPress={()=>{alert("Branza !")}}>
  <Text style={styles.text} >Detalii plata</Text>
  <Image source={forward} style={styles.forward}/>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={()=>{alert("Branza !")}}>
  <Text style={styles.text} >Securitate</Text>
  <Image source={forward} style={styles.forward}/>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={()=>{alert("Branza !")}}>
  <Text style={styles.text} >Ajutor</Text>
  <Image source={forward} style={styles.forward}/>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={()=>{alert("Branza !")}}>
  <Text style={styles.text} >Limba</Text>
  <Image source={forward} style={styles.forward}/>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={()=>{alert("Branza !")}}>
  <Text style={styles.text} >Iesire din cont</Text>
</TouchableOpacity>


<View style={{flex:4}} onPress={()=>{alert("Branza !")}}>

</View>
</View>
)
}

export default EcranSetari

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
