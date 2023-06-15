import { View, Text, StyleSheet, TextInput, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';
import Filter from '../../Image/Filter.png'
import Ionicons from 'react-native-vector-icons/Ionicons';
import paypalLogo from '../../Image/paypalLogo.png'
import { Button } from 'react-native-elements';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';

const FindLocation = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{ marginTop: 35 }}></View>
                <View style={{ marginLeft: 5 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Yourorder')} >
                        <Ionicons name="chevron-back-sharp" size={25} color={'#000000'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.container1}>
                    <View style={{ marginTop: 8, marginLeft: 15 }}>
                        <Text style={styles.text}>Find Location</Text>
                    </View>
                </View>
                <View style={styles.search}>
                    <Searchbar
                        style={{ width: 355, height: 54, borderRadius: 30, backgroundColor: '#EDEDED', fontSize: 14 }}
                        placeholder="Find your location"
                        placeholderTextColor={'#000000'}
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                    />
                </View>
                <View style={styles.container2}>
                    <View >
                        <MapView
                            style={styles.map}
                            initialRegion={{
                                latitude: 13.018410,
                                longitude: 80.223068,
                                latitudeDelta: 0.0005,
                                longitudeDelta: 0.0005,
                            }}
                        >
                            <Marker
                                coordinate={{ latitude: 13.018410, longitude: 80.223068 }}
                                title="Test"
                                description="Test description"
                                // pinColor='yellow'
                                draggable={true}
                                onDragStart={(e) => {
                                    console.log("Drag strat,,e.nativeEvent");
                                }}
                            >
                                <Callout>
                                    <Text>This is Callout</Text>
                                </Callout>
                            </Marker>
                            <Circle
                                center={{ latitude: 13.018410, longitude: 80.223068 }}
                                radius={100}
                            >
                            </Circle>
                        </MapView>
                    </View>
                </View>
                <View style={styles.container3}>
                    <View style={{ marginTop: 15 }}>
                        <Text style={styles.text1}>Your Location</Text>
                    </View>
                    <View style={styles.head}>
                        <Ionicons style={styles.icon}
                            name='location'
                            size={25}
                            color={'#EC2578'}
                        />
                        <Text style={styles.text2}>Manchester , Kentucky 39495</Text>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 35 }}>
                        <Button onPress={() => navigation.navigate('Congrats')}
                            title="Set Location"
                            buttonStyle={{ backgroundColor: '#EC2578', width: 285, height: 56, borderRadius: 4 }}
                            titleStyle={{ fontSize: 17, fontWeight: 600 }}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FEFEFF',

    },
    text: {
        color: '#000000',
        fontSize: 25,
        fontWeight: 700,
        textAlign: 'left',
    },
    search: {
        alignItems: 'center',
        marginTop: 15
    },

    container2: {
        //    backgroundColor: 'grey',
    },
    map: {
        marginTop: 15,
        width: 355,
        height: 315,
        marginBottom: 10,
        borderWidth: 0.2,
        borderRadius: 4,
        margin: 20,
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        shadowColor: '#FFFFF',
        alignItems: 'center',
        backgroundColor: 'grey',
    },
    container3: {
        width: 365,
        height: 195,
        backgroundColor: '#FFFFF',
        borderWidth: 0.2,
        borderRadius: 4,
        margin: 20,
        marginTop: 20,
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        shadowColor: '#FFFFF',
    },
    text1: {
        fontSize: 14,
        fontWeight: 600,
        color: '#646464',
        textAlign: 'left',
        marginLeft: 10
    },
    text2: {
        fontSize: 12,
        fontWeight: 400,
        color: '#000000',
        marginLeft: 5
    },
    head: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 10
    }
});

export default FindLocation