import { StatusBar } from 'expo-status-bar';
import { Asset } from 'expo-asset';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AcasaScreen from './Screens/Acasa';
import PortofelScreen from './Screens/Portofel';
import PortofelAbonamentScreen from './Screens/Portofel';
import MesajeScreen from './Screens/Mesaje';
import IstoricScreen from './Screens/Istoric';
import EcranSetariScreen from './Screens/EcranSetari';
import TransportPublic from './Screens/TransportPublic';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { colors } from './Themes/Colors';
import { useFonts } from 'expo-font';

/* Icons */
import home from './Images/drawable-xhdpi/teb_item_1_unselected.png';
import selectedhome from './Images/drawable-xhdpi/menu_icon.png';
import wallet from './Images/drawable-xhdpi/tab_item_wallet.png';
import selectedwallet from './Images/drawable-xhdpi/tab_item_wallet_selected.png';
import messages from './Images/drawable-xhdpi/tab_item_messages.png';
import selectedmessages from './Images/drawable-xhdpi/tab_item_messages_selected.png';
import istoric from './Images/drawable-xhdpi/tab_item_4.png';
import selectedistoric from './Images/drawable-xhdpi/tab_item_4_selected.png';
import settings from './Images/drawable-xhdpi/tab_item_3.png';
import selectedsettings from './Images/drawable-xhdpi/tab_item_3_pressed.png';
import bt from './Images/drawable-xxhdpi/bt_logo2.png';
import pay24 from './Images/drawable-xxhdpi/toolbar_logo.png'

const LogoTab = createMaterialTopTabNavigator();
const Tab = createMaterialTopTabNavigator();
const HomeStack = createNativeStackNavigator();

export default function App() {

const [fontsLoaded] = useFonts({
  'LatoBlack' : require('./assets/fonts/LatoBlack.ttf'),
  'bahnschrift' : require('./assets/fonts/bahnschrift.ttf'),
  'OpenSansCondBold' : require('./assets/fonts/OpenSansCondBold.ttf')

})


return (
  <SafeAreaProvider>

  <View style={{ backgroundColor: colors.black, alignItems:'center', flexDirection:'row', justifyContent:'center'
   // paddingTop:1, paddingBottom:1
 }}>
  <Image source={pay24} style={{height: 50, width:70, marginTop: 30, paddingTop:1,marginRight:10, marginBottom:5}} resizeMode={'contain'}/>
  <Text style={{color:colors.white, alignItems:'center', justifyContent:'center', marginTop:25, marginBottom:5 }}> susținut de </Text>
  <Image source={bt} style={{height: 30, width:40, marginTop: 30, paddingTop:5,marginLeft:5,  marginBottom:5}} resizeMode={'contain'}/>
  </View>

<NavigationContainer>
<Tab.Navigator
  keyboardDismissMode={'none'}
  sceneContainerStyle={{
  backgroundColor:colors.darkgray
}}
  timingConfig={{duration: 0}}
  shifting={true}
  labeled={true}
  screenOptions={({ route }) => ({
    headerTitle:() => <Image source='home' />,
      tabBarActiveTintColor: colors.yellow,
      tabBarInactiveTintColor: colors.gray,
        //Style the text, padding of the navbar
      tabBarLabelStyle: {
          fontSize: 12,
          margin:3,
          textTransform: 'none'
         },
        //Color to the underline of the navbar ( am mutat indicatorul -3 pentru a face overlap peste marginea de la tabBarStyle)
      tabBarIndicatorStyle: {
           backgroundColor: colors.gray,
           borderBottomColor: colors.yellow,
           borderBottomWidth: 2,
           margin:0,
           tabBarInactiveTintColor:colors.gray,
           position: 'absolute',
           marginBottom: -2
       },
      tabBarStyle: {
          backgroundColor: colors.darkgray,
          borderBottomColor: colors.gray,
          borderBottomWidth: 2,
          // paddingTop: 1,
           },
       swipeEnabled:false,
       animationEnabled:true,
           // lazy: false,
          // gestureEnabled:true,
       tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case 'Acasa':
            return (
              <Image source={focused ? selectedhome : home} style={{height: 22, width:22, marginTop: 0, paddingTop:5}}/>
             )
               case 'Portofel':
               return(
                 <Image source={focused ? selectedwallet : wallet} style={{height: 23, width:23, marginTop: 0, paddingTop:5}}/>
            )
            case 'Mesaje':
            return(
            <Image source={focused ? selectedmessages : messages} style={{height: 22, width:22, marginTop: 0, paddingTop:5}}/>

             )
             case 'Istoric':
             return(
             <Image source={focused ? selectedistoric : istoric} style={{height: 20, width:20, marginTop: 0, paddingTop:5}}/>
              )
              case 'Setari':
              return(
              <Image source={focused ? selectedsettings : settings} style={{height: 22, width:22, marginTop: 0, paddingTop:5}}/>
   )
            default:
            return <View />
          }
        },
  })}
  initialRouteName="Home"
  initialLayout={{width: Dimensions.get('window').width}}
    >
    <HomeStack.Group options={{ title:'asd', headerStyle: {backgroundColor:'#ff0000'} }}>
    <Tab.Screen name="Acasa">
    {() => (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={AcasaScreen}  options={{ title:'', headerStyle: {backgroundColor:'#000000'}, headerShown: false,
      // headerTitle: () => ( <View> <Image source={istoric} /> </View> )
    }}
      />
        <HomeStack.Screen name="TransportPublic" component={TransportPublic} />
      </HomeStack.Navigator>
    )}
    </Tab.Screen>

    <Tab.Screen name="Portofel" component={PortofelScreen} />
    <Tab.Screen name="Mesaje" component={MesajeScreen}  />
    <Tab.Screen name="Istoric" component={IstoricScreen} />
    <Tab.Screen name="Setari" component={EcranSetariScreen} />

  </HomeStack.Group>
  </Tab.Navigator>
  </NavigationContainer>
  </SafeAreaProvider>
  );
  }

// {() => (
//   <HomeStack.Navigator>
//     <HomeStack.Screen name="Home" component={AcasaScreen}  options={{ title:'', headerStyle: {backgroundColor:'#000000'}, headerShown: false,
//     }}
//   />
//     <HomeStack.Screen name="TransportPublic" component={TransportPublic} />
//     <HomeStack.Screen name="Portofel" component={PortofelScreen} />
//     <HomeStack.Screen name="PortofelAbonament" component={PortofelAbonamentScreen} />
//   </HomeStack.Navigator>
// )}


//
// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     backgroundColor:'#1D336E',
//     justifyContent:"center",
//   },
//   tabs: {
//     flexDirection:'row',
//     alignItems:'center',
//     backgroundColor:'cyan',
//   }
// });
