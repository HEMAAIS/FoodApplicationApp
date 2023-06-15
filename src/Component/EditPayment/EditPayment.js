import { View, Text, StyleSheet, TextInput, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import paypalLogo from '../../Image/paypalLogo.png'
import Payoneerlogo from '../../Image/Payoneerlogo.png'
import visalogo from '../../Image/visalogo.png'

import { Button } from 'react-native-elements';

const EditPayment = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{ marginTop: 35 }}></View>
                <View style={{ marginLeft: 5 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Payments')} >
                        <Ionicons name="chevron-back-sharp" size={25} color={'#000000'} />
                    </TouchableOpacity>              
                      </View>
                <View style={styles.container1}>
                    <View style={{ marginTop: 8, marginLeft: 15 }}>
                        <Text style={styles.text}>Payment</Text>
                    </View>
                </View>
                <View style={styles.container2}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('EditLocation')}>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.input} placeholder='2121 6352 8465 ******' placeholderTextColor={'#000000'} />
                                <Image source={paypalLogo} style={styles.payoneer} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.input1} placeholder='2121 6352 8465 ******' placeholderTextColor={'#000000'} />
                            <Image source={visalogo} style={styles.payoneer} />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.input1} placeholder='2121 6352 8465 ******' placeholderTextColor={'#000000'} />
                            <Image source={Payoneerlogo} style={styles.payoneer} />
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
        height: 241,
        // backgroundColor:'#FFFFF',
        // backgroundColor: 'grey',
        borderWidth: 0.2,
        borderRadius: 4,
        margin: 20,
        marginTop: 25,
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
    input: {
        paddingStart: 178,
        height: 59,
        width: 318,
        fontSize: 12,
        borderRadius: 4,
        backgroundColor: '#FFEEDA',
    },
    input1: {
        paddingStart: 178,
        height: 59,
        width: 318,
        fontSize: 12,
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
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
    container3: {
        width: 385,
        height: 231,
        backgroundColor: '#FFEEDA',
        // alignItems: 'center',
        margin: 5,
        marginTop: 155,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },

    head: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 18,
        marginRight: 18,
        paddingTop: 8,
        paddingBottom: 2,
        // marginTop:5
    },
    lable: {
        fontWeight: 400,
        fontSize: 12,
    },
    lable1: {
        fontWeight: 600,
        fontSize: 17,
    },
    sub1: {
        fontSize: 14,
        textAlign: 'center',
    },
    total1: {
        // color: '#000000',
        fontSize: 17,
        textAlign: 'center',

    },
    container4: {
        alignItems: 'center',
        marginTop: 20
    },


});
export default EditPayment