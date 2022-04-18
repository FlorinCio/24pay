import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, NavigationContainer } from 'react-native';
import { colors } from '../Themes/Colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import infoticket from '../Images/drawable-xhdpi/icon_menu_item_1.png';
import infocafe from '../Images/drawable-xhdpi/icon_menu_item_4.png';
import infohappy from '../Images/drawable-xhdpi/icon_menu_item_6.png';
import infotaxi from '../Images/drawable-xhdpi/icon_menu_item_5.png';
import infocartela from '../Images/drawable-xhdpi/icon_menu_item_3.png';
import infoparcare from '../Images/drawable-xhdpi/icon_menu_item_2.png';
import infoauto from '../Images/drawable-xhdpi/icon_menu_item_5_dis.png';
import orange from '../Images/drawable-xhdpi/logo_orange.png';
import telekom from '../Images/drawable-xhdpi/logo_telekom.png';
import vodafone from '../Images/drawable-xhdpi/logo_vodafone2.png';
import forward from '../Images/drawable-xxhdpi/forward_yellow_arrow.png';
import disableforward from '../Images/drawable-xhdpi/forward_grey_arrow.png';
import commingsoon from '../Images/drawable-xhdpi/bnt_coming_soon.png';
import qr from '../Images/drawable-xhdpi/scan2.png';

const HomeStack = createNativeStackNavigator();

function Acasa({ navigation  }) {
return (
<View style={{alignItems:'center', justifyContent:'center',flex:1, backgroundColor: colors.darkgray}}>
<StatusBar style='light'  currentHeight ='50' backgroundColor={colors.black} />

<TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('TransportPublic')}>
  <Image source={infoticket} style={styles.image}/>
  <Text style={styles.text} >Transport public</Text>
  <Image source={forward} style={styles.forward}/>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('AutomateCafea')}}>
  <Image source={infocafe} style={styles.image}/>
  <Text style={styles.text} >Automate cafea/snack</Text>
  <Image source={forward} style={styles.forward}/>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Divertisment')}}>
  <Image source={infohappy} style={styles.image}/>
  <Text style={styles.text} >Divertisment</Text>
  <Image source={forward} style={styles.forward}/>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Taxi')}}>
  <Image source={infotaxi} style={styles.image}/>
  <Text style={styles.text} >Taxi</Text>
  <Image source={forward} style={styles.forward}/>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Incarcare')}}>
  <Image source={infocartela} style={styles.image}/>
  <Text style={styles.text} >Încarcare electronică </Text>
  <Image source={orange} style={styles.incaracareElectronicaIconOrange} resizeMode={'contain'}/>
  <Image source={telekom} style={styles.incaracareElectronicaIconTelekom} resizeMode={'contain'}/>
  <Image source={vodafone} style={styles.incaracareElectronicaIconVodafone} resizeMode={'contain'}/>
  <Image source={forward} style={styles.forward}/>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={()=>{alert("Branza !")}}>
  <Image source={infoparcare} style={styles.image}/>
  <Text style={styles.text} >Parcare</Text>
  <Image source={forward} style={styles.forward}/>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={()=>{alert("Branza !")}}>
  <Image source={infoauto} style={styles.image}/>
  <Text style={styles.textdisable} >Auto</Text>
  <Image source={commingsoon} style={styles.commingsoonImage}/>
  <Text style={styles.commingsoonText}>În curând</Text>
  <Image source={disableforward} style={styles.forward}/>
</TouchableOpacity>

<TouchableOpacity style={styles.scanner} onPress={()=>{alert("Adina e bleaga!")}}>
  <View style={styles.scanare}>
    <Image source={qr} style={styles.imageQR} />
    <Text style={styles.textQR}>Scanare rapidă</Text>
  </View>
</TouchableOpacity>

</View>
)
}
export default Acasa

const styles = StyleSheet.create({
forward:{
  flex:1,
  position:'absolute',
  marginLeft:375,
  height: 15,
  width:11
},
incaracareElectronicaIconVodafone:{
  flex:1,
  justifyContent:'flex-end',
  marginRight:25,
  height: 35,
  width:35,
},
incaracareElectronicaIconTelekom:{
  flex:1,
  justifyContent:'flex-end',
  marginRight:-3,
  height: 35,
  width:35,
},
  incaracareElectronicaIconOrange:{
    flex:1,
    justifyContent:'flex-end',
    marginLeft:40,
    marginRight:1,
    height: 35,
    width:35,
  },
  text:{
    marginLeft:10,
    color:colors.whitetext
  },
  textdisable:{
    marginLeft:10,
    color:colors.textgray
  },
  scanner:{
    marginRight:5,
    marginLeft:5,
    marginTop:20,
    marginBottom:10
  },
  scanare:{
    padding:180,
    height:70,
    marginRight: 5,
    marginLeft: 5,
    marginTop: 30,
    marginBottom:10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: colors.scanYellow,
    borderRadius: 7,
    borderWidth: 1,
    flexDirection:'row',
    alignItems:'center',

  },
  textQR:{
    flex:1,
    position:'absolute',
    marginLeft:100,
    color:colors.black,
    fontSize:25,
    fontWeight:'bold'
  },
  imageQR:{
    flex:1,
    position:'absolute',
    marginLeft:14,
    height: 50,
    width: 50,
    marginTop: 0,
    paddingTop:5,

  },
  image:{
    height: 50 ,
    width: 50,
    marginTop: 0,
    paddingTop:0,
    marginLeft:5
  },
  button:{
    flex:1,
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:colors.darkgray,
    width:380,
    borderBottomWidth:1,
    borderBottomColor:colors.bargrey,
  },
  commingsoonImage:{
    flex:1,
    position:'absolute',
    marginLeft:255,
    height: 30,
    width:100
  },
  commingsoonText:{
    flex:1,
    fontSize:13,
    position:'absolute',
    marginLeft:280,
    color:colors.textgray,
    height: 17,
    width:100
  }
})
