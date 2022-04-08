import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ScrollView } from 'react-native';
import { colors } from '../Themes/Colors';
import infoarad from '../Images/transportPublic/infoarad.png';
import infobaiamare from '../Images/transportPublic/infobaiamare.png';
import infobrasov from '../Images/transportPublic/infobrasov.png';
import infobucuresti from '../Images/transportPublic/infobucuresti.png';
import infocluj from '../Images/transportPublic/infocluj.png';
import infoiasi from '../Images/transportPublic/infoiasi.png';
import infopiatraneamt from '../Images/transportPublic/infopiatraneamt.png';
import infoploiesti from '../Images/transportPublic/infoploiesti.png';
import inforamnicuvalcea from '../Images/transportPublic/inforamnicuvalcea.png';
import inforesita from '../Images/transportPublic/inforesita.png';
import infosacele from '../Images/transportPublic/infosacele.png';
import infosibiu from '../Images/transportPublic/infosibiu.png';
import infotargujiu from '../Images/transportPublic/infotargujiu.png';
import infotimisoara from '../Images/transportPublic/infotimisoara.png';

import logoarad from '../Images/transportPublic/logoarad.png';
import logobaiamare from '../Images/transportPublic/logobaiamare.png';
import logobrasov from '../Images/transportPublic/logobrasov.png';
import logobucuresti from '../Images/transportPublic/logobucuresti.png';
import logocluj from '../Images/transportPublic/logocluj.png';
import logoiasi from '../Images/transportPublic/logoiasi.png';
import logopiatraneamt from '../Images/transportPublic/logopiatraneamt.png';
import logoploiesti from '../Images/transportPublic/logoploiesti.png';
import logormvnicuvalcea from '../Images/transportPublic/logormvnicuvalcea.png';
import logoresita from '../Images/transportPublic/logoresita.png';
import logosacele from '../Images/transportPublic/logosacele.png';
import logosibiu from '../Images/transportPublic/logosibiu.png';
import logotargujiu from '../Images/transportPublic/logotargujiu.png';
import logotimisoara from '../Images/transportPublic/logotimisoara.png';


import forward from '../Images/drawable-xxhdpi/forward_yellow_arrow.png';

function TransportPublic() {
    return (
    <View style={{alignItems:'center', paddingTop:15, flex:1,backgroundColor: colors.darkgray, fontSize: 14}}>
    <ScrollView style={{  height: 600, width:400, backgroundColor:colors.darkgray, marginLeft:15 }}>
    <StatusBar style='light'  currentHeight ='50' backgroundColor={colors.black} />
    <Text style={{color: colors.yellow, textAlign:'center'}}>Transport Public</Text>

    <TouchableOpacity style={styles.button} onPress={()=>{alert("Adina e bleaga!")}}>
      <Image source={infoarad} style={styles.image}/>
      <Text style={styles.text} >Arad</Text>
      <Image source={logoarad} style={styles.logo}/>
      <Image source={forward} style={styles.forward}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={()=>{alert("Adina e bleaga!")}}>
      <Image source={infobaiamare} style={styles.image}/>
      <Text style={styles.text} >Baia Mare</Text>
      <Image source={logobaiamare} style={styles.logo}/>
      <Image source={forward} style={styles.forward}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={()=>{alert("Adina e bleaga!")}}>
      <Image source={infobrasov} style={styles.image}/>
      <Text style={styles.text} >Brașov</Text>
      <Image source={logobrasov} style={styles.logo}/>
      <Image source={forward} style={styles.forward}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={()=>{alert("Adina e bleaga!")}}>
      <Image source={infobucuresti} style={styles.image}/>
      <Text style={styles.text} >Bucuresti</Text>
      <Image source={logobucuresti} style={styles.logo}/>
      <Image source={forward} style={styles.forward}/>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=>{alert("Adina e bleaga!")}}>
      <Image source={infocluj} style={styles.image}/>
      <Text style={styles.text} >Cluj</Text>
      <Image source={logocluj} style={styles.logo}/>
      <Image source={forward} style={styles.forward}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={()=>{alert("Adina e bleaga!")}}>
      <Image source={infoiasi} style={styles.image}/>
      <Text style={styles.text} >Iasi</Text>
      <Image source={logoiasi} style={styles.logo}/>
      <Image source={forward} style={styles.forward}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={()=>{alert("Adina e bleaga!")}}>
      <Image source={infopiatraneamt} style={styles.image}/>
      <Text style={styles.text} >Piatra Neamț</Text>
      <Image source={logopiatraneamt} style={styles.logo}/>
      <Image source={forward} style={styles.forward}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={()=>{alert("Adina e bleaga!")}}>
      <Image source={infoploiesti} style={styles.image}/>
      <Text style={styles.text} >Ploiești</Text>
      <Image source={logoploiesti} style={styles.logo}/>
      <Image source={forward} style={styles.forward}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={()=>{alert("Adina e bleaga!")}}>
      <Image source={inforamnicuvalcea} style={styles.image}/>
      <Text style={styles.text} >Rȃmnicu Vȃlcea</Text>
      <Image source={logormvnicuvalcea} style={styles.logo}/>
      <Image source={forward} style={styles.forward}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={()=>{alert("Adina e bleaga!")}}>
      <Image source={inforesita} style={styles.image}/>
      <Text style={styles.text} >Reșița</Text>
      <Image source={logoresita} style={styles.logo}/>
      <Image source={forward} style={styles.forward}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={()=>{alert("Adina e bleaga!")}}>
      <Image source={infosacele} style={styles.image}/>
      <Text style={styles.text} >Săcele</Text>
      <Image source={logosacele} style={styles.logo}/>
      <Image source={forward} style={styles.forward}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={()=>{alert("Adina e bleaga!")}}>
      <Image source={infosibiu} style={styles.image}/>
      <Text style={styles.text} >Sibiu</Text>
      <Image source={logosibiu} style={styles.logo}/>
      <Image source={forward} style={styles.forward}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={()=>{alert("Adina e bleaga!")}}>
      <Image source={infotargujiu} style={styles.image}/>
      <Text style={styles.text} >Tȃrgu Jiu</Text>
      <Image source={logotargujiu} style={styles.logo}/>
      <Image source={forward} style={styles.forward}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={()=>{alert("Adina e bleaga!")}}>
      <Image source={infotimisoara} style={styles.image}/>
      <Text style={styles.text} >Timișoara</Text>
      <Image source={logotimisoara} style={styles.logo}/>
      <Image source={forward} style={styles.forward}/>
    </TouchableOpacity>

<Text style={{color: colors.yellow, textAlign:'center', marginTop:20, marginBottom:20}}>Orașul tău nu se regăsește in listă ? </Text>

    </ScrollView>
    </View>


    )
  }
  export default TransportPublic

const styles = StyleSheet.create({
  forward:{
    flex:1,
    position:'absolute',
    marginLeft:375,
    height: 15,
    width:11
  },
  logo:{
    flex:1,
    position:'absolute',
    marginLeft:280,
    color:colors.textgray,
    height: 47,
    width:75,
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
  image:{
    height: 60,
    width:60
  },
  text:{
    marginLeft:10,
    color:colors.whitetext
  }
});
