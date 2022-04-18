import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { colors } from './Themes/Colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import pay24 from './Images/drawable-xhdpi/toolbar_logo1.png';
import eye from './Images/drawable-xhdpi/eye_icon.png';
import amprenta24p from './Images/drawable-xxhdpi/amprenta24p.png';



export default function Login({ navigation }) {
  return (
<View style={{flex:1, backgroundColor: colors.darkgray}}>
  <StatusBar style='light'  currentHeight ='50' backgroundColor={colors.black} />
  <View style={{alignItems:'center', overflow: 'hidden', borderRadius: 20}}>

      <Image source={pay24} style={{height: 60, width:125, marginTop: 40, paddingTop:1, marginBottom:5,  shadowOffset: { width: 90, height: 100 },
    shadowColor: 'black' }}/>

  </View>
  <View style={{marginLeft: '11%'}}>
  <Text style={{color:colors.white, marginTop:45, marginBottom:5, fontSize: 16 }}>Introdu codul PIN:</Text>
  <TextInput  secureTextEntry={true} maxLength={4} tintColor={colors.red} keyboardType="numeric" style={{ fontSize:20, paddingLeft:20, paddingBottom:'1.5%',marginTop:'0.5%', marginRight: 30, borderBottomWidth: 1, borderBottomColor: '#d1d8de' , color: colors.gray }} selectionColor={colors.yellow}
   placeholder='PIN24pay' placeholderTextColor={'#64666a'} />
   <Image source={eye} style={{ flex:1, position:'absolute', marginLeft:265,marginTop:70, height: 15, width:25}}/>
   <Text style={{color: colors.yellow, fontStyle: 'italic', textDecorationLine: 'underline', fontSize:18, marginTop:15}}>Am uitat PIN24pay</Text>
  </View>

    <View style={{alignItems:'center', justifyContent:'center'}}>

      <Image source={amprenta24p} style={{height: 60, width:120, marginTop:50}} resizeMode={'contain'}/>
    </View>
    <View style={{alignItems:'center', justifyContent:'center'}}>
      <Text style={{color: colors.yellow, fontSize:15, marginTop:82}}>Contact: 0721 10 24 24</Text>
     </View>
     <TouchableOpacity style={{backgroundColor: colors.yellow, borderRadius:7, fontSize:15,  marginRight:30, marginLeft:30, marginTop:20, height:50, alignItems:'center', justifyContent:'center'}}
     onPress={()=>{navigation.navigate('Home')}}>

       <Text style={{color: colors.black, fontSize:15}}>Autentificare</Text>

     </TouchableOpacity>
  </View>
  )
  // return(
  //   <div className="login-wrapper" style={styles.login}>
  //     <h1>Please Log In</h1>
  //     <form>
  //       <label>
  //         <p>Username</p>
  //         <input type="text" />
  //       </label>
  //       <label>
  //         <p>Password</p>
  //         <input type="password" />
  //       </label>
  //       <div>
  //         <button type="submit">Submit</button>
  //       </div>
  //     </form>
  //   </div>
  // )
}
const styles = StyleSheet.create({
forward:{
  display:'flex',
  flexDirection:'column',
  alignItems: 'center'
}
});
