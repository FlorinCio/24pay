import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, Dimensions, Picker } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import downarrow from '../Images/drawable-xhdpi/down_arrow_yellow.png';
import arrrowUpYellow from '../Images/drawable-xhdpi/up_arrow_yellow.png';
import { colors } from '../Themes/Colors';
import forward from '../Images/drawable-xxhdpi/forward_yellow_arrow.png';
import Tabel from './tabela.js';
import CountDown from 'react-native-countdown-component';
import Countdown1h from './countdown/1h.js'
import Countdown24h from './countdown/24h.js'

function addZeroToDate(date) {
  if (date < 10) {
    date = '0' + date;
  }
  return date;
}
function getTimeUntil(deadline){
  const time = new Date(deadline).getTime() - new Date().getTime();
  const seconds = Math.floor((time/1000) % 60);
  const minutes = Math.floor((time/1000/60) % 60);
  const hours = Math.floor(time/(1000*60*60) % 24);
  const days = Math.floor(time/(1000*60*60*24));

return {days: days, hours: hours, minutes: minutes, seconds: seconds};
}
var currentdate = new Date();
currentdate.setHours(8);
currentdate.setMinutes(27);
currentdate.setSeconds(5);
currentdate.setMilliseconds(0);
var currentDay = addZeroToDate(currentdate.getDate());
var currentMonth = addZeroToDate(currentdate.getMonth()+1);
var currentHours = addZeroToDate(currentdate.getHours());
var currentMinutes = addZeroToDate(currentdate.getMinutes());
var currentSeconds = addZeroToDate(currentdate.getSeconds());
var currentMilliseconds = addZeroToDate(currentdate.getMilliseconds());
var datetime = currentDay + "." + currentMonth + "."
              + currentdate.getFullYear() + "   "
              + currentHours + ":"
              + currentMinutes + ":"
              + currentSeconds;
let timeUntilTomorrow = getTimeUntil(currentdate.setDate(currentDay + 1));

function Portofel({ navigation }) {

// const start = Date.now()
// let date= start+25200000-start
// console.log(start-start+100000 )

  const abonament2 =
  <TouchableOpacity style={{marginLeft: -10, marginTop: -5}} onPress={()=>navigation.navigate('PortofelQR', { fromScreen: 'Portofel' })}>
      <Text style={styles.text}>
               O zona - rămas 0 d {timeUntilTomorrow['hours']} h {timeUntilTomorrow['minutes']} min
      </Text>


  </TouchableOpacity>

  const abonament3=
      <TouchableOpacity style={{ backgroundColor: colors.darkgray, marginLeft:-10}} onPress={()=> navigation.navigate('PortofelQR')}>
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
  marginLeft:11,
  color:colors.whitetext,
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
