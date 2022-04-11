import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal, Pressable, ScrollView } from 'react-native';
import { colors } from '../Themes/Colors';

function Taxi() {
const [modalVisible, setModalVisible] = useState(false);
return (
  <View>
    <ScrollView color={colors.yellow} style={{  height: '100%', width:"100%", backgroundColor:colors.yellow, color: colors.yellow }}>
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View>
        <Text>Taxi</Text>
      </View>
    </Modal>

    <View style={{ backgroundColor: colors.darkgray, height:'100%', flex:1, }}>

        <Text style={styles.textStyle}>În curând</Text>

        <Text style={styles.textStyle}>Coming soon</Text>
          <Text style={styles.textStyle1}></Text>
    </View>
    </ScrollView>
  </View>
);
};

const styles = StyleSheet.create({
textStyle: {
  color: colors.scanYellow,
  fontSize:45,
  marginTop:'15%',
  marginLeft:'5%',
  // fontWeight: "bold",
  // textAlign: "center"
},
textStyle1: {
  // color: "scanYellow",
  fontSize:45,
  marginTop:'15%',
  marginLeft:'5%',
  fontWeight: "bold",
  paddingTop: '85%'
}

});
  export default Taxi
