import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';
import Filter from '../../Image/Filter.png'
import ice from '../../Image/ice.png'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-elements';

export default function Home({ navigation }) {

    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={styles.container}>
            <View style={{ marginTop: 45 }}></View>
            <View style={{ marginLeft:-150 }}>
                <Text style={styles.text}>Find Your {'\n'}Favourite Food</Text>
            </View>
            <View style={styles.search}>
                <View style={styles.inputContainer}>
                    <Searchbar
                        style={{ width: 293, height: 54, borderRadius: 30, backgroundColor: '#EDEDED' }}
                        placeholder="Search"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                    />
                    <Image source={Filter} style={styles.Filter} />
                </View>
                <View>
                    <MaterialCommunityIcons name='bell-badge-outline' size={35} color={'#EC2578'} style={{marginLeft:20}} />
                </View>
            </View>
            <View style={styles.container1}>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.text1}>Special Deal For{'\n'}December</Text>
                </View>
                <View style={{marginLeft:18,marginTop:20}}>
                    <Button
                        title="Buy Now"
                        buttonStyle={{ width: 99, height: 35, borderRadius: 4, borderColor: '#FFFFFF',alignItems:'center', backgroundColor: '#FFFFFF', borderWidth: 1, }}
                        titleStyle={{ fontSize: 14, fontWeight: 600, color: '#EC2578',textAlign:'center' }}
                    />
                </View>
                <View style={{marginTop:-114,marginLeft:193}}>
                    <Image source={ice} style={styles.ice} />
                </View>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FEFEFF',
        alignItems:'center'
    },
    text: {
        fontSize: 30,
        fontWeight: 700,
        color: '#000000',
        textAlign: 'left',
        // marginLeft: 15
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
      marginTop:15
    },
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    Filter: {
        position: 'absolute',
        right: 20,
    },
    container1: {
        width: 345,
        height: 150,
        // backgroundColor:'green',
        backgroundColor: '#EC2578',
        borderRadius: 4,
        marginTop:18
    
    },
    text1: {
        fontSize: 17,
        fontWeight: 700,
        color: '#FFFFFF',
        textAlign: 'left',
        marginLeft:18
    }
});