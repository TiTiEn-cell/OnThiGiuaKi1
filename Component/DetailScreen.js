import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function DetailScreen() {
  return (
    <View style={styles.container}>
      <View style = {{
        width: 359,
        height: 388,
        borderRadius: 5,
        backgroundColor: '#E941411A',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Image 
        source={require('../Image/bifour_-removebg-preview.png')}
        style = {{
            width: 297,
            height: 340,
            resizeMode: 'contain',
        }}
        />
      </View>
      <View>
        <Text style ={{
            fontSize: 35, 
            fontWeight: 400,
        }}>Pina Mountain</Text>

        <View style ={{
            flexDirection : 'row',
        }}>
        <Text style ={{
            fontSize: 25, 
            fontWeight: 400,
        }}>15% OFF I 350$</Text>
        <Text style ={{
            fontSize: 25, 
            marginLeft: 30,
            fontWeight: 400,
        }}>449$</Text>
        </View>
        <Text style = {{
            fontSize: 25,
            fontWeight: 400,
        }}>Description</Text>
        <Text style = {{
            fontSize: 22,
            fontWeight: 400,
        }}>Hello</Text>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});
