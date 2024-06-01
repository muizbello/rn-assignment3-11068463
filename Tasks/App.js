import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import Searchbar from './Components/Searchbar';

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
          <Searchbar/>
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
  usergreeting: {
   marginTop: -10,
   width: 354,
   height: 152,
   flex: 1,
   flexDirection: 'row',
  },
  greeting: {
    fontFamily: 'Lato',
    fontSize: 32,
  },
  subgreeting: {
    fontFamily: 'Lato',
    fontSize: 12,
  },
  scrollViewContent: {
    flexGrow: 1,
    marginTop: 25,
    backgroundColor: '#F7F0E8',
    
  },

});
