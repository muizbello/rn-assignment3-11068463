import React from 'react';
import { FlatList, Text, View, StyleSheet, Image} from 'react-native';

const data = [
  { id: '1', title: 'Mobile App Development'},
  { id: '2', title: 'Web Development'},
  { id: '3', title: 'Push Ups'},
  { id: '4', title: 'Data Structure and Algorithms'},
  { id: '5', title: 'System Adminstration'},
  { id: '6', title: 'Software Engineering'},
  { id: '7', title: 'Computational Methods'},
  { id: '8', title: 'Internship'},
  { id: '9', title: 'Algebra and Geometry'},
  { id: '10', title: 'Algebra and Trigonometry'},
  { id: '11', title: 'Burpees'},
  { id: '12', title: 'Debugging'},
  { id: '13', title: 'Regression Analysis'},
  { id: '14', title: 'Classification'},
  { id: '15', title: 'Segmentation'},

];

const renderItem = ({ item }) => (
  <View style={styles.holder}>
    <Text style={styles.header}>{item.title}</Text>
  </View>
);

export default function OngoingTasks() {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    
    />
  );
}

const styles = StyleSheet.create({
    holder: {
        backgroundColor: '#E8D1BA',
        height: 108,
        width: 320,
        padding: 10,
        marginRight: 27,
        borderRadius: 10,
        marginTop: 15,
        marginBottom: 20,
    },
    header:{
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 26,
    },
})