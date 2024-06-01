import { View, StyleSheet, Text, Image, TextInput} from 'react-native';

export default function Searchbar(){
    return(
        <View style={styles.box}>

            <Image source={require('../assets/icons.png')} style={styles.glass}/>
            <TextInput placeholder = 'Search' style={styles.places}/>
        </View>
    );

}

const styles = StyleSheet.create({
    box:{
        width: 240,
        height: 44,
        marginTop: 2,
        flexDirection: 'row',
        
    },
    glass: {
        marginTop: 9,
        marginRight: 5,
    },
    places: {
        fontSize: 18,
        color: '#121212',
        fontWeight: '500',
    },
});