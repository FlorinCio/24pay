import { StyleSheet, Text, View, Button } from 'react-native';
import { colors } from '../Themes/Colors';

function TransportPublic() {
    return (
    <View style={{alignItems:'center', paddingTop:15, flex:1,backgroundColor: colors.darkgray, fontSize: 14}}>
    <Text style={{color: colors.yellow}}>Transport Public</Text>
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
