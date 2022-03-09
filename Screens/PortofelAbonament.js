import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, Dimensions, Picker } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import downarrow from '../Images/drawable-xhdpi/down_arrow_yellow.png';
import arrrowUpYellow from '../Images/drawable-xhdpi/up_arrow_yellow.png';
import { colors } from '../Themes/Colors';
import forward from '../Images/drawable-xxhdpi/forward_yellow_arrow.png';
import Tabel from './tabela.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CountDown from 'react-native-countdown-component';

function Portofel({ navigation }) {

  const abonament2 = <TouchableOpacity style={{ backgroundColor: colors.darkgray }}onPress={()=>{navigation.navigate("PortofelScreen")}}>
      <Text style={styles.text}>
        Studenti 30 zile zona 1 - rămas
        <CountDown
        until={1080000}
        onFinish={() => alert('Finished')}
        digitStyle={{ backgroundColor: 'transparent', marginRight:-5,width:25 ,height:30}}
        digitTxtStyle={{color: colors.textgray, marginTop:18, marginRight:5}}
        timeToShow={['D']}
        timeLabels={{d: '' }}
        size={12}
        />
        <Text>d</Text>
        <CountDown
        until={100}
        onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: 'transparent',  flexDirection:'row', marginRight:-7, width:25 ,height:30}}
        digitTxtStyle={{color: colors.textgray ,marginTop:18, marginRight:7}}
        timeToShow={['H']}
        timeLabels={{m:''}}
        size={12}
        />
        <Text>h</Text>
        <CountDown
        until={1080000}
        onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: 'transparent',  flexDirection:'row', marginRight:-9, width:25 ,height:30}}
        digitTxtStyle={{color: colors.textgray, marginTop:18, marginRight:9}}
        timeToShow={['M']}
        timeLabels={{s:''}}
        size={12}
        />
        <Text>min</Text>
        </Text>


  </TouchableOpacity>

  const abonament3=
      <TouchableOpacity style={{ backgroundColor: colors.darkgray, marginLeft:-10}} onPress={()=> navigation.navigate('PortofelAbonament')}>
        <Tabel />
      </TouchableOpacity>


  const [open, setOpen] = useState(false);
const [value, setValue] = useState(null);
const [selectedValue, setSelectedValue] = useState("java");

return (
<View style={{alignItems:'center'}}>


<DropDownPicker
items={[

    {label: abonament2, value: 'apple', containerStyle: {backgroundColor: colors.darkgray, fontStyle: "italic", color:"#ff0000000", fontFamily: 'OpenSans-Bold'}, labelStyle:colors.darkgray}
    ,{label: abonament3, value: 'apple1', containerStyle: {backgroundColor: colors.darkgray, flexDirection:'row', height:145, marginTop:-10}}
]}
  onChangeItem={item => {alert(item.value)}}
  dropDownContainerStyle={{borderColor:colors.darkgray, borderRadius:0, borderBottomWidth:1, borderBottomColor:colors.darkgrey}}
  listMode="SCROLLVIEW"
  placeholder="SCTP Iasi"
  placeholderStyle={{
    fontSize:17
  }}
  maxHeight={500}
  closeAfterSelecting={true}
  style={{ backgroundColor:colors.darkgray, borderColor:'transparent',borderBottomWidth:1, borderBottomColor:colors.bargrey, borderRadius:1, marginTop:10}}
  textStyle={{ color:colors.whitetext}}
  containerStyle={{ backgroundColor:colors.darkgray}}
  showArrowIcon={true}
  // showTickIcon={false}
  open={open}
  value={value}
  setOpen={setOpen}
  setValue={setValue}
  ArrowDownIconComponent={({style}) => <Image  source={downarrow} style={style} />}
  CloseIconComponent={({style}) => <Image style={style} />}
  ArrowUpIconComponent={({style}) => <Image  source={arrrowUpYellow} style={{height: 25, width:28}}  />}
    // ArrowUpIconComponent={({style}) => <Image  source={downarrow} style={style} />}
  arrowIconStyle={{
    width:30,
    height:30
  }}
  // disableBorderRadius={true}
>
 }
  // style={{paddingVertical:10}}
  // arrowStyle={{paddingTop: 100}}
>

</DropDownPicker>


</View>

// <Button style={{ flex: 1, alignItems: 'top', justifyContent: 'top' }}
//   title="Cea mai bleaga Adina bleaga"
//   onPress={() => navigation.navigate('Istoric')}
// />

)
}
export default Portofel

const styles = StyleSheet.create({
downarrow:{
  flex:1,
  position:'absolute',
  marginLeft:360,
  height: 30,
  width: 30
},
text:{
  marginTop:10,
  marginTop:-20,
  // marginBottom:10,
  color:colors.textgray,
  fontSize:13.7,
  fontFamily: 'bahnschrift'
},
button:{
  flex:1,
  alignItems:'center',
  marginTop:15,
  flexDirection:'row',
  position:'absolute',
  backgroundColor:colors.darkgray,
  width:380,
  borderBottomWidth:1,
  borderBottomColor:colors.bargrey,
  // borderBottomLength:50,
  // padding:10,
  // marginBottom: 30
}
})
