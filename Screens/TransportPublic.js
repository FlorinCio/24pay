import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, TouchableOpacity } from 'react-native';
import { colors } from '../Themes/Colors';

function TransportPublic({ navigation }) {
return (
  <View style={styles.root}>
      <View style={[styles.container, { backgroundColor: '#e1e4e8' }]}>
        <View
          style={[
            styles.item,
            { backgroundColor: '#6638f0', position: 'absolute', top: -190, left: -32, zIndex: 100 },
          ]}
        />
        <View style={[styles.item, { backgroundColor: '#5cc9f5' }]} />
        <View style={[styles.item, { backgroundColor: '#4af2a1', marginTop: -16 }]} />
      </View>
    </View>

)
}
export default TransportPublic

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: 200,
    width: 200,
    borderRadius: 16,
    padding: 16,
    borderWidth: 8,
    borderColor: 'rgba(0,0,0,0.2)',
  },
  item: {
    borderWidth: 4,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 48,
    width: 48,
    borderRadius: 8,
  },
});
