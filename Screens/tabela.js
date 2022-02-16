import React, { Component }  from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

import forward from '../Images/drawable-xxhdpi/forward_yellow_arrow.png';
import { Table, Cell, Row, Rows } from 'react-native-table-component';
import { colors } from '../Themes/Colors';


export default class Tabel extends Component {
  constructor(props) {
    super(props);

    const abonamentBtn = (value) => (
            <View>
              <Text style={{color:colors.tabelorange, textAlign:'center',fontSize:18,fontFamily: 'OpenSansCondBold'}}>Abonament STUDENT
              <Text style={{color:colors.tabeltext }}>- 30 zile</Text></Text>
            </View>
        );

  const elementButton0 = (value) => (
          <View >
            <Text style={{color:colors.tabelorange, textAlign:'center', fontSize:18, marginTop:-5, fontFamily: 'LatoBlack'}}>PREȚ REDUS
            </Text>
          </View>
      );

    const elementButton1 = (value) => (
        <View >
          <Text style={{textAlign:'center' , marginTop:-10}}>
            <Text style={{color:colors.tabelorange, fontSize:45,fontFamily:'LatoBlack'}}>12</Text>
            <Text style={{color:colors.tabelorange, fontSize:30,fontFamily: 'bahnschrift'}}> Lei</Text>
          </Text>
          <Text style={{color:colors.tabeltext, textAlign:'center', marginTop:-10}}>TVA inclus</Text>
        </View>
    );

    const elementButton2 = (value) => (
        <View style={{paddingBottom:2,paddingTop:2}}>
            <Text style={{color:colors.tabeltext, textAlign:'center'}}>Valabilitate: 30 zile de la cumpărare</Text>
        </View>

    );


    this.state = {
      tableHead: [abonamentBtn('1')],
      tableData: [
        [elementButton0('2'), elementButton1('3')],
        [elementButton2('4')]
      ],
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>

        <View style={styles.container2}>
        <Table borderStyle={{borderWidth: 3, borderColor: colors.tabelorange}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} style={styles.head2} textStyle={styles.text}/>
        </Table>
        <Image source={forward} style={styles.forward}/>
        </View>
        <View style={styles.lineStyle}>
        </View>
        <View style={styles.lineStyle2}>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  forward:{
    // alignSelf: 'flex-end',
    // flex:1,
    position:'absolute',
    marginLeft:375,
    marginTop:50,

    height: 15,
    width:11
    // marginLeft:20
  },
  container: {
    marginLeft:10
    // flex: 1,
    // padding:2,

    // width:290,
    // flex:1,
    // position:'absolute',
    },
    container2: {
      // flex: 1,
      padding:2,
      width:275,
      flex:1,
      // position:'absolute',
      },
  head: {
    height: 25
   },
  text: {
    margin: 6,
     color:colors.tabelorange
   },
  lineStyle:{
    // flex:1,
    // position:'absolute',
    borderWidth:0.7,
    borderColor:colors.bargrey,
    // padding:10,
    margin:10,
    marginLeft:1,
    marginTop:3,
    marginBottom:1,
    width:380,
    // marginLeft:0
  },
  lineStyle2:{
    // flex:1,
    // position:'absolute',
    borderWidth:0.7,
    borderColor:colors.bargrey,
    // padding:10,
    marginTop:10,
    marginLeft:-5,
    marginBottom:10,
    // width:390
  }
});
