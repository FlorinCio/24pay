import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal, Pressable } from 'react-native';
import { colors } from '../Themes/Colors';

function Taxi() {
const [modalVisible, setModalVisible] = useState(false);
return (
  <View>
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

    <View>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
},

button: {
  borderRadius: 20,
  padding: 10,
  elevation: 2
},
buttonOpen: {
  backgroundColor: "#F194FF",
},
textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center"
},

});
  export default Taxi
