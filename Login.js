import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { colors } from './Themes/Colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import pay24 from './Images/drawable-xxhdpi/toolbar_logo.png';
import eye from './Images/drawable-xhdpi/eye_icon.png';
import amprenta24p from './Images/drawable-xxhdpi/amprenta24p.png';

export default function Login({ navigation }) {
  return (
<View style={{flex:1, backgroundColor: colors.darkgray}}>
  <StatusBar style='light'  currentHeight ='50' backgroundColor={colors.black} />
  <View style={{alignItems:'center'}}>
    <Image source={pay24} style={{height: 60, width:120, marginTop: 40, paddingTop:1, marginBottom:5}} resizeMode={'contain'}/>
  </View>
  <View style={{marginLeft: 30}}>
  <Text style={{color:colors.white, marginTop:45, marginBottom:5, fontSize: 15 }}>Introdu codul PIN:</Text>
  <TextInput  secureTextEntry={true} maxLength={4} tintColor={colors.red} keyboardType="numeric" style={{ fontSize:20, paddingLeft:20, marginRight: 30, borderBottomWidth: 2, borderBottomColor: colors.white, color: colors.gray }} selectionColor={colors.yellow}
   placeholder='PIN24pay' placeholderTextColor={colors.gray} caretColor={colors.red}/>
   <Image source={eye} style={{ flex:1, position:'absolute', marginLeft:260,marginTop:65, height: 20, width:32}}/>
   <Text style={{color: colors.yellow, fontStyle: 'italic', textDecorationLine: 'underline', fontSize:15, marginTop:15}}>Am uitat PIN24pay</Text>
  </View>

    <View style={{alignItems:'center', justifyContent:'center'}}>
      <Image source={amprenta24p} style={{height: 60, width:120, marginTop:50}} resizeMode={'contain'}/>
    </View>
    <View style={{alignItems:'center', justifyContent:'center'}}>
      <Text style={{color: colors.yellow, fontSize:15, marginTop:85}}>Contact: 0749568911</Text>
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
