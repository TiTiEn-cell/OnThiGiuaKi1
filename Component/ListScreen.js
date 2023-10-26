import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const arr = [
    {name: 'Pina Mountain', 
    type: 'RoadBike',
    img: require('../Image/bifour_-removebg-preview.png'),
    price: '1700',
    discount: '15% off 1350$',
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
},
{name: 'Pinarello', 
type: 'mountain',
img: require('../Image/bione-removebg-preview.png'),
    price: '1800',
    discount: '15% off 1350$',
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
},
{name: 'Pina Bike', 
type: 'RoadBike',
img: require('../Image/bithree_removebg-preview.png'),
    price: '1500',
    discount: '15% off 1350$',
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
},
{name: 'Pinarello', 
type: 'mountain',
img: require('../Image/bitwo-removebg-preview.png'),
    price: '1900',
    discount: '15% off 1350$',
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
},
{name: 'Pinarello', 
type: 'RoadBike',
img: require('../Image/bithree_removebg-preview.png'),
    price: '2700',
    discount: '15% off 1350$',
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
},
{name: 'Pinarello', 
type: 'mountain',
img: require('../Image/bione-removebg-preview.png'),
    price: '1350',
    discount: '15% off 1350$',
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
},

]

export default function ListScreen() {
    const [list,setList] = useState(arr);
  return (
    <View style={styles.container}>
      <Text style = {{
        fontSize: 25, 
        fontWeight: 700,
        color: '#E94141',
      }}>The world’s Best Bike</Text>
      
      <View style ={{
        flexDirection: 'row',
        justifyContent: 'space-around',

      }}>
        <TouchableOpacity style = {{           
            borderColor: '#E9414187',
            borderWidth: 1,
            width: 99,
                height: 32,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onPress={()=>{
                var newArr = arr;
                setList(newArr);
            }}
            >
            <Text style = {{
                fontSize: 20,
                fontWeight: 400,
                color:'grey'
            }}>All</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {{           
            borderColor: '#E9414187',
            borderWidth: 1,
            width: 99,
            height: 32,
            justifyContent: 'center',
            alignItems: 'center',
            
            }}
            onPress={()=>{
                var newArr = arr.filter((item)=>{
                    return item.type == 'RoadBike'
                })
                setList(newArr);
            }
            
            }
            >
            <Text style = {{
                fontSize: 20,
                fontWeight: 400,
                color:'grey'
                
            }}>Roadbike</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {{           
            borderColor: '#E9414187',
            borderWidth: 1,
            width: 99,
                height: 32,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onPress={()=>{
                var newArr = arr.filter((item)=>{
                    return item.type == 'mountain'
                })
                setList(newArr);
            }
            
            }
            >
            <Text style = {{
                fontSize: 20,
                fontWeight: 400,
                color:'grey'
            }}>Mountain</Text>
            </TouchableOpacity>
            </View>

            <View style = {{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                marginTop: 30,
            }}>
                {list.map((item) =>{
                    return (
                        <TouchableOpacity style = {{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 167,
                            height: 200,
                            borderRadius: 10,
                            backgroundColor: '#F7BA8326',
                            marginBottom: 10,
                        }}>
                            <Image 
                            source={item.img}
                            style = {{
                                width: 135,
                                height: 127,
                                resizeMode: 'contain',
                            }}
                            />
                            <Text>{item.name}</Text>

                            <View style = {{
                                flexDirection: 'row',
                            }}>
                                <Text style = {{
                                    fontSize: 20,
                                    color : '#F7BA83',
                                    fontWeight: 400,
                                }}>$</Text>
                                <Text style = {{
                                    fontSize: 20,
                                    color : '#000000',
                                    fontWeight: 400,
                                }}>{item.price}</Text>
                            </View>
                            

                            
                        </TouchableOpacity>
                    );
                })}
            </View>
    
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
  },
});
