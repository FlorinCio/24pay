import React, { Component }  from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import forward from '../Images/drawable-xxhdpi/forward_yellow_arrow.png';
import { Table, Cell, Row, Rows } from 'react-native-table-component';
import { colors } from '../Themes/Colors';


import orange from '../Images/drawable-xhdpi/logo_orange.png';
import telekom from '../Images/drawable-xhdpi/logo_telekom.png';
import vodafone from '../Images/drawable-xhdpi/logo_vodafone2.png';

export default class TabelIncarcare extends Component {
  constructor(props) {
    super(props);

    const elementButton1 = (value) => (
      <View >
        <Image source={orange} style={styles.incaracareElectronicaIconOrange} resizeMode={'contain'}/>
      </View>
        );

  const elementButton2 = (value) => (
      <View>
        <Image source={telekom} style={styles.incaracareElectronicaIconTelekom} resizeMode={'contain'}/>
      </View>
      );

    const elementButton3 = (value) => (
      <View>
        <Image source={vodafone} style={styles.incaracareElectronicaIconVodafone} resizeMode={'contain'}/>
      </View>
    );

    const elementButton4 = (value) => (
      <View>
        <Text style={styles.fiveeuro}>
            5 EUR
          <Text style={{color:colors.yellow,fontSize:13,fontFamily: 'OpenSansCondBold',marginLeft:20}}>                           30.14 LEI</Text>
        </Text>
        <Text style={styles.sixeuro}>
          6 EUR
          <Text style={{color:colors.yellow,fontSize:13,fontFamily: 'OpenSansCondBold'}}>                           36.16 LEI</Text>
        </Text>
      </View>

    );
    const elementButton5 = (value) => (
      <View>
        <Text style={styles.fiveeuro}>
        5 EUR
          <Text style={{color:colors.yellow,fontSize:13,fontFamily: 'OpenSansCondBold'}}>                           29.75 LEI</Text>
        </Text>
        <Text style={styles.sixeuro}>
        6 EUR
        <Text style={{color:colors.yellow,fontSize:13,fontFamily: 'OpenSansCondBold'}}>                           35.70 LEI</Text>
        </Text>
      </View>

    );
    const elementButton6 = (value) => (
      <View >
        <Text style={styles.fiveeuro}>
        5 EUR
          <Text style={{color:colors.yellow,fontSize:13,fontFamily: 'OpenSansCondBold', flex:1,justifyContent:'flex-end'}}>                           30.34 LEI</Text>
        </Text>
        <Text style={styles.sixeuro}>
          6 EUR
          <Text style={{color:colors.yellow,fontSize:13,fontFamily: 'OpenSansCondBold', flex:1,justifyContent:'flex-end'}}>                           36.40 LEI</Text>
        </Text>
      </View>

    );


    this.state = {
      tableHead: [elementButton1('1'), elementButton4('4')],
      tableData: [
        [elementButton2('2'), elementButton5('5')],
        [elementButton3('3'), elementButton6('6')]
      ],
      widthArr: [ 111, 250 ],

    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>

        <View style={styles.container2}>
        <Table borderStyle={{borderWidth: 2, borderColor: colors.gray}}>
          <Row data={state.tableHead}   widthArr={state.widthArr} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} widthArr={state.widthArr} style={styles.head2} textStyle={styles.text}/>
        </Table>
          <View style={styles.lineStyle1}>
          </View>
          <View style={styles.lineStyle2}>
          </View>
          <View style={styles.lineStyle3}>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  lineStyle1:{
    flex:1,
    position:'absolute',
    borderWidth:1,
    borderColor: colors.gray,
    marginTop:8,
    marginLeft:230,
    height:60,
  },
  lineStyle2:{
    flex:1,
    position:'absolute',
    borderWidth:1,
    borderColor: colors.gray,
    marginTop:85,
    marginLeft:230,
    height:60,
  },
  lineStyle3:{
    flex:1,
    position:'absolute',
    borderWidth:1,
    borderColor: colors.gray,
    marginTop:162,
    marginLeft:230,
    height:60,
  },
  fiveeuro:{
    color:colors.whitetext,
    fontSize:17,
    fontFamily: 'OpenSansCondBold',
    borderBottomColor:colors.gray,
    borderBottomWidth:2,
    paddingBottom:6,
    paddingLeft:45
  },
  sixeuro:{
    color:colors.whitetext,
    fontSize:17,
    fontFamily: 'OpenSansCondBold',
    paddingTop:6,
    paddingLeft:45
  },
  container: {
    marginLeft:10
    },
    container2: {
      // paddingRight:10,
      // width:'90%',
      flex:1,
      position:'absolute',
      },
  head: {
      // width:

   },
  text: {
    margin: 6,
     color:colors.whitetext
   },
  // lineStyle:{
  //   // flex:1,
  //   // position:'absolute',
  //   borderWidth:0.7,
  //   borderColor:colors.bargrey,
  //   // padding:10,
  //   margin:10,
  //   marginLeft:1,
  //   marginTop:3,
  //   marginBottom:1,
  //   width:380,
  //   // marginLeft:0
  // },
  // lineStyle2:{
  //   // flex:1,
  //   // position:'absolute',
  //   borderWidth:0.7,
  //   borderColor:colors.bargrey,
  //   // padding:10,
  //   marginTop:10,
  //   marginLeft:-5,
  //   marginBottom:10,
  //   // width:390
  // },
  incaracareElectronicaIconVodafone:{
    marginLeft:'5%',
    height: 75,
    width:85,
  },
  incaracareElectronicaIconTelekom:{
    marginLeft:'10%',
    height: 75,
    width:95,
  },
    incaracareElectronicaIconOrange:{
      // marginLeft:'10%',
      height: 73,
      width:108,
    }
});
