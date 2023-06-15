import { View, Text, StyleSheet, TextInput, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import paypalLogo from '../../Image/paypalLogo.png'
import { Button } from 'react-native-elements';

const EditLocation = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{ marginTop: 35 }}></View>
                <View style={{ marginLeft: 5 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('EditPayment')} >
                        <Ionicons name="chevron-back-sharp" size={25} color={'#000000'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.container1}>
                    <TouchableOpacity onPress={() => navigation.navigate('Yourorder')}>
                        <View style={{ marginTop: 8, marginLeft: 15 }}>
                            <Text style={styles.text}>Shiping</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.container2}>
                    <View style={{ marginTop: 10, }}>
                        <View style={styles.head}>
                            <Text style={styles.text1}>Order Location</Text>
                            {/* <Text style={styles.text2}>Edit</Text> */}
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.input} placeholder='8502 Preston Rd. Inglewood' placeholderTextColor={'#000000'} />
                            <Ionicons style={styles.icon}
                                name='location'
                                size={20}
                                color={'#000000'}
                            />
                        </View>
                    </View>
                    <View>
                        <View style={styles.head}>
                            <Text style={styles.text1}>Deliver To</Text>
                            <Text style={styles.text2}>Set location</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.input} placeholder='4517 Washinton Ave. Manchester' placeholderTextColor={'#000000'} />
                            <Ionicons style={styles.icon}
                                name='location'
                                size={20}
                                color={'#000000'}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 345 }}></View>
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
    container2: {
        width: 355,
        height: 231,
        // backgroundColor:'#FFFFF',
        // backgroundColor: 'grey',
        borderWidth: 0.2,
        borderRadius: 4,
        margin: 20,
        marginTop: 35,
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        shadowColor: '#FFFFF'

    },
    head: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 15,
        marginRight: 18,
        marginTop: 10
    },
    text1: {
        color: '#646464',
        fontSize: 14,
        fontWeight: 600,
        textAlign: 'center',
    },
    text2: {
        color: '#EC2578',
        fontSize: 14,
        fontWeight: 600,
        textAlign: 'center',
    },
    input: {
        paddingStart: 38,
        height: 43,
        width: 318,
        fontSize: 12,
        borderRadius: 4,
        backgroundColor: '#FFEEDA',
    },
    input1: {
        paddingStart: 178,
        height: 43,
        width: 318,
        fontSize: 12,
        borderRadius: 4,
        backgroundColor: '#FFEEDA',
    },
    inputContainer: {
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 18
    },
    icon: {
        position: 'absolute',
        left: 10,
    },
    payoneer: {
        position: 'absolute',
        left: 10,
    },
});
export default EditLocation