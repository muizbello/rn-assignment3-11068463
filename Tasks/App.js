import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, Pressable } from 'react-native';
import Searchbar from './Components/Searchbar';
import CategoryCards from './Components/CategoryCards';

export default function App() {
  return (
   
    <SafeAreaView style={styles.container}>
      
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.page}>
        <View style={styles.usergreeting}>
        <View style = {styles.textGreeting}>
        <Text style={styles.greeting}>Hello , Devs</Text>
        <Text style={styles.subgreeting}>15 tasks today</Text>
        </View>
        <Image source = {require('./assets/Profile_Image.png')} style={styles.profileimage} />
        </View>
        
          <View style={styles.querysection} >
          
            <TouchableOpacity><Searchbar/></TouchableOpacity>
            <TouchableOpacity ><Image source={require('./assets/Filter.png')} style={styles.filter}/></TouchableOpacity>
          </View>

          <View style={styles.categories}>
            <Text style={styles.third}>Categories</Text>
            <ScrollView horizontal style={styles.hscroll}>
            <CategoryCards/>
            </ScrollView>
          </View>
          

        </View>
      </ScrollView>
      
      <StatusBar style="auto" />
      
    </SafeAreaView>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  third:{
    fontSize: 29,
    fontWeight: 'bold',
  },
  filter: {
    marginLeft: 32,
  
  },
  categories:{
      marginTop: 39,
      flexDirection: 'row,',
      marginRight: -20 ,
  },
  page:{
    margin: 20,
  },
  profile:{
    
    marginTop: 50,
  }, 
  profileimage:{
    marginTop: 4,
    marginLeft: 105, 

  },
  hscroll:{
    flexDirection: 'row',
  },
  usergreeting: {
   marginTop: -10,
   width: 354,
   height: 'auto',
   flex: 1,
   flexDirection: 'row',
   
  },
  greeting: {
    fontFamily: 'Lato',
    fontSize: 32,
    fontWeight: 'bold',
  },
  subgreeting: {
    fontFamily: 'Lato',
    fontSize: 13,
  },
  scrollViewContent: {
    flexGrow: 1,
    marginTop: 25,
    backgroundColor: '#F7F0E8',
    
  },
  querysection: {
    backgroundColor: '#FBF9F7',
    height: 49,
    marginTop: 20,
    width: 240,
    flexDirection: 'row',
    borderRadius: 9,
  },
});
