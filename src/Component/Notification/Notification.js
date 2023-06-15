import { View, Text, StyleSheet, TextInput, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';
import Cancel from '../../Image/Cancel.png'
import Success from '../../Image/Success.png'
import Topup from '../../Image/Topup.png'


const Notification = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{ marginTop: 45 }}></View>
                <View style={{ marginLeft: 5 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('VoucherPromo')} >
                        <Ionicons name="chevron-back-sharp" size={25} color={'#000000'} />
                    </TouchableOpacity>
                </View>
                <View >
                    <View style={{ marginTop: 8, marginLeft: 15, }}>
                        <Text style={styles.text}>Notification</Text>
                    </View>
                </View>
                <View style={styles.container2}>
                    <View style={{ alignItems: 'center', marginBottom: 5 }}>
                        <View style={styles.chat1}>
                            <TouchableOpacity onPress={() => navigation.navigate('Orderdetail')}>
                                <View>
                                    <Image source={Success} style={{ marginLeft: 10, alignItems: 'center' }} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.text1}>Your order has been taken by{'\n'}the driver</Text>
                        </View>
                        <View>
                            <Text style={styles.text2}>Recently</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 5, marginBottom: 5 }}>
                        <View style={styles.chat2}>
                            <TouchableOpacity onPress={() => navigation.navigate('Chat1')}>
                                <View>
                                    <Image source={Topup} style={{ marginLeft: 10, alignItems: 'center' }} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.text3}>Topup for $100 was successful</Text>
                        </View>
                        <View>
                            <Text style={styles.text4}>10.00 Am</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 5, marginBottom: 5 }}>
                        <View style={styles.chat2}>
                            <TouchableOpacity onPress={() => navigation.navigate('Chat1')}>
                                <View>
                                    <Image source={Cancel} style={{ marginLeft: 10, alignItems: 'center' }} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.text3}>Your order has been canceled</Text>
                        </View>
                        <View>
                            <Text style={styles.text4}>22 Juny 2021</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 545, backgroundColor: '#FFFF', }}></View>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFFF',
    },
    text: {
        color: '#000000',
        fontSize: 25,
        fontWeight: 700,
        textAlign: 'left',
        backgroundColor: '#FEFEFF',
    },
    // container1: {
    //     backgroundColor: '#FFFFFFF',

    // },
    container2: {
        alignItems: 'center',
        // marginTop: 20,
        backgroundColor: '#FFFFFF',
    },
    chat1: {
        width: 365,
        height: 105,
        backgroundColor: '#FFFFFF',
        // backgroundColor: 'red',
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#EDEDED',
    },
    text1: {
        color: '#09051C',
        fontSize: 15,
        fontWeight: 400,
        textAlign: 'left',
        marginTop: -90
    },
    text2: {
        color: '#3B3B3B',
        fontSize: 14,
        fontWeight: 400,
        // textAlign: 'left',
        marginTop: -45,
        marginLeft: -95,
        // backgroundColor: 'red',


    },
    chat2: {
        width: 365,
        height: 81,
        backgroundColor: '#FFFFFF',
        // backgroundColor: 'red',
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#EDEDED',
    },
    text3: {
        color: '#09051C',
        fontSize: 15,
        fontWeight: 400,
        textAlign: 'left',
        marginTop: -60,
        // marginLeft: 15,
    },
    text4: {
        color: '#3B3B3B',
        fontSize: 14,
        fontWeight: 400,
        textAlign: 'left',
        marginTop: -35,
        marginLeft: -100,
        // backgroundColor: 'red',


    },


});
export default Notification