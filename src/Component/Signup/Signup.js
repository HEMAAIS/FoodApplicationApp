import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import Rectangle from '../../Image/Rectangle.png'
import LogoW from '../../Image/LogoW.png'
import { Card } from 'react-native-paper'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';
import google from '../../Image/google.png';
import facebook from '../../Image/facebook.png';

export default function Signup({navigation}) {
    return (
        <SafeAreaView>


            <View style={styles.container}>
                <View style={styles.container1}>
                    <View>
                        <Image source={Rectangle} />
                    </View>
                    <View style={{ marginTop: -400, alignItems: "center" }}>
                        <View>
                            <Image source={LogoW} style={styles.LogoW} />
                        </View>
                        <View>
                            <Text style={styles.text}>Deliver Favourite Food</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.container2}>
                    <Card style={{ height: 385, width: 300,  borderRadius: 26 }}>
                        <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <Text style={styles.login}>Signup</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 25 }}>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.input1} placeholder='Name' />
                                <Ionicons style={styles.icon}
                                    name='person-sharp'
                                    size={22}
                                    color={'#000000'}
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.input1} placeholder='Email' />
                                <Icon style={styles.icon}
                                    name='email'
                                    size={22}
                                    color={'#000000'}
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.input1} placeholder='Password' />
                                <FontAwesome style={styles.icon}
                                    name='lock'
                                    size={22}
                                    color={'#000000'}
                                />
                                <Icon style={styles.icon1}
                                    name='eye'
                                    size={22}
                                    color={'#000000'}
                                />
                            </View>

                            <View style={{ marginTop: 20 }}>
                                <Button onPress={() => navigation.navigate('SignupProcess')}
                                    title="Create Account"
                                    buttonStyle={{ backgroundColor: '#EC2578', width: 255, height: 45, borderRadius: 4 }}
                                    titleStyle={{ fontSize: 17, fontWeight: 600 }}
                                />
                            </View>


                        </View>
                    </Card>
                </View>
                <View style={styles.container3}>
                    <View>
                        <Text style={styles.text1}>Already have an account?</Text>
                    </View>
                    <View>
                        <Text style={styles.text2}>Signup</Text>
                    </View>
                    <View style={{ marginTop: 34 }}></View>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },
    container1: {
        alignItems: 'center',
    },
    LogoW: {
        height: 94,
        width: 97,
        marginTop: -15
    },
    text: {
        fontSize: 21,
        fontWeight: 600,
        color: 'white',
        marginTop: 10
    },
    container2: {
        flex: 2,
        alignItems: 'center',
        marginTop: 45
    },
    text1: {
        fontSize: 14,
        fontWeight: 600
    },
    text2: {
        fontSize: 17,
        fontWeight: 600,
        color: '#EC2578',
        marginTop: 15
    },
    container3: {
        alignItems: 'center'
    },
    login: {
        fontSize: 25,
        fontWeight: 700,
        // fontFamily: 'Open Sans'
    },
    input: {
        paddingStart: 40,
        height: 45,
        width: 255,
        fontSize: 12,
        borderRadius: 3,
        // fontWeight: 400
    },
    input1: {
        paddingStart: 40,
        height: 45,
        width: 255,
        fontSize: 12,
        borderRadius: 3,
        backgroundColor: '#EDEDED',
        // fontWeight: 400
    },
    inputContainer: {
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    icon: {
        position: 'absolute',
        left: 10,
    },
    icon1: {
        position: 'absolute',
        right: 10,
    },
    container3: {
        alignItems: 'center',
        marginTop: 420
    },
});