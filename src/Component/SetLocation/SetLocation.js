import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-elements';
import location from '../../Image/location.png'

export default function SetLocation({ navigation }) {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{ marginTop: 45 }}></View>
                <View style={{ marginLeft: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('UploadPreview')} >
                        <Ionicons name="chevron-back-sharp" size={25} color={'#EC2578'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.container1}>
                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.text}>Set your Location</Text>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={styles.text1}>This data will be displayed in your {'\n'}account profile for security</Text>
                    </View>
                </View>
                <View style={styles.container2}>
                    <View style={{ marginTop: 50 }}>
                        <Image source={location} style={styles.location} />
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 95 }}>
                        <Button
                            title="Set your location"
                            buttonStyle={{ width: 275, height: 50, borderRadius: 4, borderColor: '#EC2578', backgroundColor: '#FFFFFF', borderWidth: 1, borderStyle: 'dashed', }}
                            titleStyle={{ fontSize: 12, fontWeight: 400, color: '#EC2578', marginLeft: 10 }}
                            icon={
                                <MaterialCommunityIcons
                                    name="plus-box"
                                    size={30}
                                    color={'#EC2578'}
                                    marginLeft={-125}
                                />
                            }
                            iconLeft
                        />
                    </View>
                </View>
                <View style={styles.container3}>
                    <View >
                        <Button onPress={() => navigation.navigate('Success')}
                            title="Next"
                            buttonStyle={{ backgroundColor: '#EC2578', width: 315, height: 50, borderRadius: 4 }}
                            titleStyle={{ fontSize: 17, fontWeight: 600 }}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 34 }}></View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
    },
    container1: {
        alignItems: 'center',
    },
    text: {
        color: '#EC2578',
        fontSize: 30,
        fontWeight: 700,
        textAlign: 'center',
    },
    text1: {
        fontSize: 14,
        color: '#646464',
        fontWeight: 400,
        textAlign: 'center',
    },
    container2: {
        alignItems: 'center',
        marginTop: 25
    },
    container3: {
        alignItems: 'center',
        marginTop: 160
    }
});