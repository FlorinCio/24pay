import { StatusBar } from 'expo-status-bar';
import { Asset } from 'expo-asset';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Dimensions, Button } from 'react-native';
import { NavigationContainer, DefaultTheme, useNavigationContainerRef, useNavigationState} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import AcasaScreen from './Screens/Acasa';
import PortofelScreen from './Screens/Portofel';
import PortofelQR from './Screens/PortofelQR';
import AutomateCafea from './Screens/AutomateCafea';
import Taxi from './Screens/Taxi';
import Divertisment from './Screens/Divertisment';
import Parcare from './Screens/Parcare';
import MesajeScreen from './Screens/Mesaje';
import IstoricScreen from './Screens/Istoric';
import EcranSetariScreen from './Screens/EcranSetari';
import TransportPublic from './Screens/TransportPublic';
import { navigationRef } from './RootNavigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { colors } from './Themes/Colors';
import { useFonts } from 'expo-font';
import { Badge } from 'react-native-elements';


/* Icons */
import home from './Images/drawable-xhdpi/teb_item_1_unselected.png';
import selectedhome from './Images/drawable-xhdpi/menu_icon.png';
import wallet from './Images/drawable-xhdpi/tab_item_wallet.png';
import selectedwallet from './Images/drawable-xhdpi/tab_item_wallet_selected.png';
import messages from './Images/drawable-xhdpi/tab_item_messages.png';
import forward from './Images/drawable-xxhdpi/forward_yellow_arrow.png';
import selectedmessages from './Images/drawable-xhdpi/tab_item_messages_selected.png';
import istoric from './Images/drawable-xhdpi/tab_item_4.png';
import selectedistoric from './Images/drawable-xhdpi/tab_item_4_selected.png';
import settings from './Images/drawable-xhdpi/tab_item_3.png';
import selectedsettings from './Images/drawable-xhdpi/tab_item_3_pressed.png';
import bt from './Images/drawable-xxhdpi/bt_logo2.png';
import pay24 from './Images/drawable-xxhdpi/toolbar_logo.png';
import back_arrow from './Images/drawable-xxxhdpi/back_arrow_white.png';

const LogoTab = createMaterialTopTabNavigator();
const Tab = createMaterialTopTabNavigator();
const HomeStack = createNativeStackNavigator();
const Stack = createStackNavigator();
const routesWithoutBackButton = [
  'Home',
  'Portofel',
  'Mesaje',
  'Istoric',
  'Setari',
];

function HomeTabs() {
  return (
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
                     <View>
                     <Image source={focused ? selectedwallet : wallet} style={{height: 23, width:23, marginTop: 0, paddingTop:5}}/>
                     <Badge value={1}
                         containerStyle={{ position: 'absolute', top: -8, right: -10}}
                         badgeStyle={{backgroundColor: colors.red, borderColor: colors.redBadge}}
                       />
                     </View>
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
        <Tab.Screen name="Acasa">
{() => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={AcasaScreen}  options={{ title:'', headerStyle: {backgroundColor:'#000000'}, headerShown: false, zIndex: 1
  // headerTitle: () => ( <View> <Image source={istoric} /> </View> )
}}
  />
    <HomeStack.Screen name="TransportPublic" component={TransportPublic}  options={{ title:'', headerStyle: {backgroundColor:'#000000'}, headerShown: false, zIndex: 1}} />
  </HomeStack.Navigator>
)}
</Tab.Screen>
  <Tab.Screen name="Portofel" component={PortofelScreen} />
  <Tab.Screen name="Mesaje" component={MesajeScreen}  />
  <Tab.Screen name="Istoric" component={IstoricScreen} />
  <Tab.Screen name="Setari" component={EcranSetariScreen} />
</Tab.Navigator>
);
}

export default function App({navigation, route}) {
const [token, setToken] = useState(false);
const [shouldShowBackButton, setShouldShowBackButton] = useState(false);
const eventListener = navigationRef.addListener('state', (e) => {
    if (!routesWithoutBackButton.includes(navigationRef.getCurrentRoute()["name"])) {
      setShouldShowBackButton(true);
    } else {
      setShouldShowBackButton(false);
    }
    if (navigationRef.getCurrentRoute()["name"] === 'Login') {
          setToken(false);
        } else {
          setToken(true);
        }
  });
const [fontsLoaded] = useFonts({
  'LatoBlack' : require('./assets/fonts/LatoBlack.ttf'),
  'bahnschrift' : require('./assets/fonts/bahnschrift.ttf'),
  'OpenSansCondBold' : require('./assets/fonts/OpenSansCondBold.ttf')
});
return (
  <SafeAreaProvider>
  <NavigationContainer ref={navigationRef}>
  {token ?
 <View style={{ backgroundColor: colors.black, flexDirection:'row'}}>
 {shouldShowBackButton ? <TouchableOpacity title="Back" onPress={() => navigationRef.goBack()} color='#ff0000'
  style={{flex:1, position:'absolute', marginLeft:20, marginTop: 40, height:20, width:20, backgroundColor:colors.black }}>
  <Image source={back_arrow} style={{height: 20, width:20, marginTop: 3 }} resizeMode={'contain'}/>
  </TouchableOpacity> : null}
 <Image source={pay24} style={{height: 50, width:70, marginTop: 30, paddingTop:1,marginRight:10, marginBottom:5 , marginLeft:95}} resizeMode={'contain'}/>
 <Text style={{color:colors.white, alignItems:'center', justifyContent:'center', marginTop:45, marginBottom:5 }}> susținut de </Text>
 <Image source={bt} style={{height: 30, width:40, marginTop: 40, paddingTop:5,marginLeft:3,  marginBottom:5}} resizeMode={'contain'}/>
 </View>
  : null }
<Stack.Navigator screenOptions={({ route, navigation }) => ({
    headerShown: false,
    gestureEnabled: false,
    cardShadowEnabled: false,
    animationEnabled: false
  })}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="TransportPublic" component={TransportPublic} />
      <Stack.Screen name="PortofelQR" component={PortofelQR} />
      <Stack.Screen name="AutomateCafea" component={AutomateCafea} />
      <Stack.Screen name="Divertisment" component={Divertisment} />
      <Stack.Screen name="Taxi" component={Taxi} />
      <Stack.Screen name="Parcare" component={Parcare} />
  </Stack.Navigator>

  </NavigationContainer>
  </SafeAreaProvider>
  );
  }

  const styles = StyleSheet.create({
forward:{
  flex:1,
  position:'absolute',
  marginLeft:320,
  height: 15,
  width:9
}
});
