import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text style ={{fontSize: 26, fontWeight: 400}}>A premium online store for sporter and their stylish choice</Text>
        <View style ={{
            backgroundColor:'#E941411A',
            borderRadius: 50,
            width: 359,
            height: 388,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
        }}>
        <Image 
        source={require('../Image/bifour_-removebg-preview.png')}
        style = {{width:292, 
            height: 270, 
            
            
        }}
        />
        
        </View>
        <Text style = {{
            fontSize: 26,
            fontStyle: 'Bold',
            //fontWeight: 700,
        }}>POWER BIKE SHOP</Text>

        <TouchableOpacity style = {{
            borderRadius: 30,
            backgroundColor: '#E94141',
            width: 340,
            height: 61,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style = {{
                fontSize: 27, 
                fontWeight: 400,
            }}>Get Started</Text>
        </TouchableOpacity>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
