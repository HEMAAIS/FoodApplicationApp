import { View, Text, StyleSheet, TextInput, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { Button, Icon } from 'react-native-elements';
import product1 from '../../Image/product1.png'
import product2 from '../../Image/product2.png'
import product3 from '../../Image/product3.png'

const Orderdetail = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{ marginTop: 35 }}></View>
                <View style={{ marginLeft: 5 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')} >
                        <Ionicons name="chevron-back-sharp" size={25} color={'#000000'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.container1}>
                    <View style={{ marginTop: 8, marginLeft: 15 }}>
                        <Text style={styles.text}>Order detail</Text>
                    </View>
                </View>

                <View style={styles.container2}>
                    <View style={{ alignItems: 'center', marginTop: 0, marginBottom: 5 }}>
                        <View style={styles.chat1}>
                            <TouchableOpacity onPress={() => navigation.navigate('Chat1')}>
                                <View>
                                    <Image source={product2} style={{ marginLeft: 10, alignItems: 'center' }} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: -65, marginLeft: 10 }}>
                            <Text style={styles.text1}> $ <Text style={styles.text2}>52.00</Text></Text>
                        </View>
                        <View style={{ marginLeft: 115 }}>
                            <Text style={styles.text3}>Chicken Veggi Salad</Text>
                        </View>
                        <View style={{ marginLeft: 65 }}>
                            <Text style={styles.text4}>With cheese sauce</Text>
                        </View>
                        <View style={styles.amt}>
                            <View>
                                <MaterialCommunityIcons name="minus" size={10} color={'#000000'} />
                            </View>
                            <View>
                                <TextInput style={styles.input} placeholder='02' placeholderTextColor={'#000000'} />
                            </View>
                            <View>
                                <MaterialCommunityIcons name="plus" size={10} color={'#000000'} />
                            </View>
                        </View>
                        <View style={{ marginTop: -26, marginLeft: 305 }}>
                            <MaterialCommunityIcons name="delete" size={18} color={'#000000'} />
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 0, marginBottom: 5 }}>
                        <View style={styles.chat1}>
                            <TouchableOpacity onPress={() => navigation.navigate('Chat1')}>
                                <View>
                                    <Image source={product1} style={{ marginLeft: 10, alignItems: 'center' }} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: -65, marginLeft: 10 }}>
                            <Text style={styles.text1}> $ <Text style={styles.text2}>23.00</Text></Text>
                        </View>
                        <View style={{ marginLeft: 60 }}>
                            <Text style={styles.text3}>Nutton curry</Text>
                        </View>
                        <View style={{ marginLeft: 60 }}>
                            <Text style={styles.text4}>With basmati rice</Text>
                        </View>
                        <View style={styles.amt}>
                            <View>
                                <MaterialCommunityIcons name="minus" size={10} color={'#000000'} />
                            </View>
                            <View>
                                <TextInput style={styles.input} placeholder='02' placeholderTextColor={'#000000'} />
                            </View>
                            <View>
                                <MaterialCommunityIcons name="plus" size={10} color={'#000000'} />
                            </View>
                        </View>
                        <View style={{ marginTop: -26, marginLeft: 305 }}>
                            <MaterialCommunityIcons name="delete" size={18} color={'#000000'} />
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 0, marginBottom: 5 }}>
                        <View style={styles.chat1}>
                            <TouchableOpacity onPress={() => navigation.navigate('Chat1')}>
                                <View>
                                    <Image source={product3} style={{ marginLeft: 10, alignItems: 'center' }} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: -65, marginLeft: 10 }}>
                            <Text style={styles.text1}> $ <Text style={styles.text2}>21.00</Text></Text>
                        </View>
                        <View style={{ marginLeft: 48 }}>
                            <Text style={styles.text3}>French Fry</Text>
                        </View>
                        <View style={{ marginLeft: 60 }}>
                            <Text style={styles.text4}>With beef bacon</Text>
                        </View>
                        <View style={styles.amt}>
                            <View>
                                <MaterialCommunityIcons name="minus" size={10} color={'#000000'} />
                            </View>
                            <View>
                                <TextInput style={styles.input} placeholder='02' placeholderTextColor={'#000000'} />
                            </View>
                            <View>
                                <MaterialCommunityIcons name="plus" size={10} color={'#000000'} />
                            </View>
                        </View>
                        <View style={{ marginTop: -26, marginLeft: 305 }}>
                            <MaterialCommunityIcons name="delete" size={18} color={'#000000'} />
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
                            <Button onPress={() => navigation.navigate('Payments')}
                                title="Check out"
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
        alignItems: 'center',
        // marginTop: 10,
        // backgroundColor: 'red',
    },
    chat1: {
        width: 395,
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
        color: '#EC2578',
        fontSize: 12,
        fontWeight: 400,
        textAlign: 'center',
    },
    text2: {
        color: '#EC2578',
        fontSize: 17,
        fontWeight: 600,
        textAlign: 'center',
    },
    text3: {
        color: '#000000',
        fontSize: 17,
        fontWeight: 600,
        textAlign: 'center',
    },
    text4: {
        color: '#646464',
        fontSize: 12,
        fontWeight: 400,
        textAlign: 'center',
    },
    input: {
        padding: 6,
        height: 31,
        width: 29,
        fontSize: 14,
        backgroundColor: '#EDEDED'
    },
    amt: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 90,
        height: 30,
        marginLeft: 75
    },
    container3: {
        width: 385,
        height: 231,
        backgroundColor: '#FFEEDA',
        // alignItems: 'center',
        margin: 5,
        marginTop: 45,
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
export default Orderdetail