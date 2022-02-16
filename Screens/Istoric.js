import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { colors } from '../Themes/Colors';

import forward from '../Images/drawable-xxhdpi/forward_yellow_arrow.png';
import calendar from '../Images/drawable-xxhdpi/calendar_icon.png';
import clock from '../Images/drawable-xxhdpi/clock_icon.png';

function Istoric({ navigation }) {
return (
<View>
<ScrollView style={{  height: 600, width:400, backgroundColor:colors.darkgray, marginLeft:15 }}>
<TouchableOpacity style={styles.button} onPress={()=>{alert("Branza !")}}>
  <View style={styles.button1}>
    <Text style={{color:colors.yellow, fontSize:20, marginTop:10}}>12.00 RON</Text>
    <Text style={{color:colors.whitetext, marginTop:5}}> Iasi - abonament student o zona, 30 zile </Text>
    <Text style={{color:colors.whitetext, marginTop:10, position:'absolute',   textAlign:'right', marginLeft:275}}> 23 nov. 20212</Text>
    <Image source={calendar} style={{ marginTop:10, position:'absolute', alignSelf:'flex-end', height:15, width: 15}}/>
    <Text style={{color:colors.whitetext, marginTop:37,position:'absolute',   textAlign:'right', marginLeft:320}}> 08:25</Text>
    <Image source={clock} style={{ marginTop:37, position:'absolute', alignSelf:'flex-end', height:15, width: 15}}/>
  </View>

</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={()=>{alert("Branza !")}}>
<View style={styles.button1}>
  <Text style={{color:colors.yellow, fontSize:20, marginTop:10}}>12.00 RON</Text>
  <Text style={{color:colors.whitetext, marginTop:5}}> Iasi - abonament student o zona, 30 zile </Text>
  <Text style={{color:colors.whitetext, marginTop:10, position:'absolute',   textAlign:'right', marginLeft:275}}> 22 oct. 20212</Text>
  <Image source={calendar} style={{ marginTop:10, position:'absolute', alignSelf:'flex-end', height:15, width: 15}}/>
  <Text style={{color:colors.whitetext, marginTop:37,position:'absolute',   textAlign:'right', marginLeft:320}}> 19:16</Text>
  <Image source={clock} style={{ marginTop:37, position:'absolute', alignSelf:'flex-end', height:15, width: 15}}/>
</View>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={()=>{alert("Branza !")}}>
<View style={styles.button1}>
  <Text style={{color:colors.yellow, fontSize:20, marginTop:10}}>12.00 RON</Text>
  <Text style={{color:colors.whitetext, marginTop:5}}> Iasi - abonament student o zona, 30 zile </Text>
  <Text style={{color:colors.whitetext, marginTop:10, position:'absolute',   textAlign:'right', marginLeft:275}}> 17 sep. 20212</Text>
  <Image source={calendar} style={{ marginTop:10, position:'absolute', alignSelf:'flex-end', height:15, width: 15}}/>
  <Text style={{color:colors.whitetext, marginTop:37,position:'absolute',   textAlign:'right', marginLeft:320}}> 08:30</Text>
  <Image source={clock} style={{ marginTop:37, position:'absolute', alignSelf:'flex-end', height:15, width: 15}}/>
</View>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={()=>{alert("Branza !")}}>
<View style={styles.button1}>
  <Text style={{color:colors.yellow, fontSize:20, marginTop:10}}>12.00 RON</Text>
  <Text style={{color:colors.whitetext, marginTop:5}}> Iasi - abonament student o zona, 30 zile </Text>
  <Text style={{color:colors.whitetext, marginTop:10, position:'absolute',   textAlign:'right', marginLeft:275}}> 18 aug. 20212</Text>
  <Image source={calendar} style={{ marginTop:10, position:'absolute', alignSelf:'flex-end', height:15, width: 15}}/>
  <Text style={{color:colors.whitetext, marginTop:37,position:'absolute',   textAlign:'right', marginLeft:320}}> 08:30</Text>
  <Image source={clock} style={{ marginTop:37, position:'absolute', alignSelf:'flex-end', height:15, width: 15}}/>
</View>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={()=>{alert("Branza !")}}>
<View style={styles.button1}>
  <Text style={{color:colors.yellow, fontSize:20, marginTop:10}}>12.00 RON</Text>
  <Text style={{color:colors.whitetext, marginTop:5}}> Iasi - abonament student o zona, 30 zile </Text>
  <Text style={{color:colors.whitetext, marginTop:10, position:'absolute',   textAlign:'right', marginLeft:275}}> 19 iul. 20212</Text>
  <Image source={calendar} style={{ marginTop:10, position:'absolute', alignSelf:'flex-end', height:15, width: 15}}/>
  <Text style={{color:colors.whitetext, marginTop:37,position:'absolute',   textAlign:'right', marginLeft:320}}> 08:12</Text>
  <Image source={clock} style={{ marginTop:37, position:'absolute', alignSelf:'flex-end', height:15, width: 15}}/>
</View>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={()=>{alert("Branza !")}}>
<View style={styles.button1}>
  <Text style={{color:colors.yellow, fontSize:20, marginTop:10}}>12.00 RON</Text>
  <Text style={{color:colors.whitetext, marginTop:5}}> Iasi - abonament student o zona, 30 zile </Text>
  <Text style={{color:colors.whitetext, marginTop:10, position:'absolute',   textAlign:'right', marginLeft:275}}> 18 iun. 20212</Text>
  <Image source={calendar} style={{ marginTop:10, position:'absolute', alignSelf:'flex-end', height:15, width: 15}}/>
  <Text style={{color:colors.whitetext, marginTop:37,position:'absolute',   textAlign:'right', marginLeft:320}}> 16:23</Text>
  <Image source={clock} style={{ marginTop:37, position:'absolute', alignSelf:'flex-end', height:15, width: 15}}/>
</View>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={()=>{alert("Branza !")}}>
<View style={styles.button1}>
  <Text style={{color:colors.yellow, fontSize:20, marginTop:10}}>12.00 RON</Text>
  <Text style={{color:colors.whitetext, marginTop:5}}> Iasi - abonament student o zona, 30 zile </Text>
  <Text style={{color:colors.whitetext, marginTop:10, position:'absolute',   textAlign:'right', marginLeft:275}}> 14 mai 20212</Text>
  <Image source={calendar} style={{ marginTop:10, position:'absolute', alignSelf:'flex-end', height:15, width: 15}}/>
  <Text style={{color:colors.whitetext, marginTop:37,position:'absolute',   textAlign:'right', marginLeft:320}}> 12:49</Text>
  <Image source={clock} style={{ marginTop:37, position:'absolute', alignSelf:'flex-end', height:15, width: 15}}/>
</View>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={()=>{alert("Branza !")}}>
<View style={styles.button1}>
  <Text style={{color:colors.yellow, fontSize:20, marginTop:10}}>12.00 RON</Text>
  <Text style={{color:colors.whitetext, marginTop:5}}> Iasi - abonament student o zona, 30 zile </Text>
  <Text style={{color:colors.whitetext, marginTop:10, position:'absolute',   textAlign:'right', marginLeft:275}}> 11 apr. 20212</Text>
  <Image source={calendar} style={{ marginTop:10, position:'absolute', alignSelf:'flex-end', height:15, width: 15}}/>
  <Text style={{color:colors.whitetext, marginTop:37,position:'absolute',   textAlign:'right', marginLeft:320}}> 15:16</Text>
  <Image source={clock} style={{ marginTop:37, position:'absolute', alignSelf:'flex-end', height:15, width: 15}}/>
</View>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={()=>{alert("Branza !")}}>
<View style={styles.button1}>
  <Text style={{color:colors.yellow, fontSize:20, marginTop:10}}>12.00 RON</Text>
  <Text style={{color:colors.whitetext, marginTop:5}}> Iasi - abonament student o zona, 30 zile </Text>
  <Text style={{color:colors.whitetext, marginTop:10, position:'absolute',   textAlign:'right', marginLeft:275}}> 6 mar. 20212</Text>
  <Image source={calendar} style={{ marginTop:10, position:'absolute', alignSelf:'flex-end', height:15, width: 15}}/>
  <Text style={{color:colors.whitetext, marginTop:37,position:'absolute',   textAlign:'right', marginLeft:320}}> 16:03</Text>
  <Image source={clock} style={{ marginTop:37, position:'absolute', alignSelf:'flex-end', height:15, width: 15}}/>
</View>
</TouchableOpacity>

</ScrollView>
</View>
)
}

export default Istoric

const  styles= StyleSheet.create({
  button:{
    flex:1,

    flexDirection:'row',
    backgroundColor:colors.darkgray,
    width:400,
    height:70,
    borderBottomWidth:1,
    borderBottomColor:colors.bargrey,
    // borderBottomLength:50,
    // padding:10,
    // marginBottom: 30
  },
  button1:{
    width:380,
    backgroundColor:colors.darkgray,
    // borderBottomColor:colors.bargrey,
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
