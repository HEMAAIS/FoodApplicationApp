import { View, Text, StyleSheet, TextInput, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import paypalLogo from '../../Image/paypalLogo.png'
import { Button } from 'react-native-elements';

const Payments = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{ marginTop: 35 }}></View>
                <View style={{ marginLeft: 5 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Orderdetail')} >
                        <Ionicons name="chevron-back-sharp" size={25} color={'#000000'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.container1}>
                    <View style={{ marginTop: 8, marginLeft: 15 }}>
                        <Text style={styles.text}>Confirm Order</Text>
                    </View>
                </View>
                <View style={styles.container2}>
                    <View style={{ marginTop: 10, }}>
                        <View style={styles.head}>
                            <Text style={styles.text1}>Deliver to </Text>
                            <Text style={styles.text2}>Edit</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.input} placeholder='Manchester , Kentucky 39495' placeholderTextColor={'#000000'} />
                            <Ionicons style={styles.icon}
                                name='location'
                                size={20}
                                color={'#000000'}
                            />
                        </View>
                    </View>
                    <View>
                        <View style={styles.head}>
                            <Text style={styles.text1}>Payment Method</Text>
                            <Text style={styles.text2}>Edit</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.input1} placeholder='2121 6352 8465 ******' placeholderTextColor={'#000000'} />
                            <Image source={paypalLogo} style={styles.payoneer} />
                        </View>
                    </View>
                </View>
                <View style={styles.container3}>
                    <View style={styles.head}>
                        <Text style={styles.lable}>Subtotal</Text>
                        <TextInput style={styles.sub1} placeholder='$96.00' placeholderTextColor={'#000000'} />
                    </View>
                    <View style={styles.head}>
                        <Text style={styles.lable}>Delivery</Text>
                        <TextInput style={styles.sub1} placeholder='$2.00' placeholderTextColor={'#000000'} />
                    </View>
                    <View style={styles.head}>
                        <Text style={styles.lable1}>Total</Text>
                        <TextInput style={styles.total1} placeholder='$98.00' placeholderTextColor={'#000000'} />
                    </View>
                    <View style={styles.container4}>
                        <View >
                            <Button onPress={() => navigation.navigate('EditPayment')}
                                title="Place Order"
                                buttonStyle={{ backgroundColor: '#EC2578', width: 315, height: 50, borderRadius: 4 }}
                                titleStyle={{ fontSize: 17, fontWeight: 600 }}
                            />
                        </View>
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
    container2: {
        width: 355,
        height: 231,
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
export default Payments