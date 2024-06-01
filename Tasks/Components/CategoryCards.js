import React from 'react';
import { FlatList, Text, View, StyleSheet, Image} from 'react-native';

const data = [
  { id: '1', title: 'Excercise', notasks: '12', img: require('../assets/1.png') },
  { id: '2', title: 'Study', notasks: '12', img: require('../assets/2.png')},
  { id: '3', title: 'Code' , notasks: '12', img: require('../assets/1.png') },
  { id: '4', title: 'Cook', notasks: '12', img: require('../assets/2.png') },
  { id: '5', title: 'Stroll', notasks: '12', img: require('../assets/1.png')},
  { id: '6', title: 'Jog' , notasks: '12', img: require('../assets/2.png') },
  { id: '7', title: 'Research', notasks: '12', img: require('../assets/1.png') },
  { id: '8', title: 'Spar', notasks: '12', img: require('../assets/2.png')},

];

const renderItem = ({ item }) => (
  <View style={styles.holder}>
    <Text style={styles.header}>{item.title}</Text>
    <Text>{item.notasks} Tasks </Text>
    <Image style={styles.mini} source={item.img}/>
  </View>
);

export default function CategoryCards() {
  return (
    <FlatList
      horizontal
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    
    />
  );
}

const styles = StyleSheet.create({
    holder: {
        backgroundColor: '#fff',
        height: 192,
        width: 186,
        padding: 10,
        marginRight: 50,
        borderRadius: 10,
        marginTop: 15,
    },
    mini:{
        height: 120,
        width: 120,
        marginTop: 15,
        marginLeft: 25,
    },

    header:{
        fontSize: 16,
        fontWeight: 'bold'
    },
})
