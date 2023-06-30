import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import Rectangle from '../../Image/Rectangle.png'
import LogoW from '../../Image/LogoW.png'
import { Card } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import google from '../../Image/google.png';
import facebook from '../../Image/facebook.png';

export default function Login({navigation}) {
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
                    <Card style={{ height: 385, width: 300, borderRadius: 25 }}>
                        <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <Text style={styles.login}>SignIn</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.input} placeholder='example@gmail.com'  placeholderTextColor={'#000000'}/>
                                <Ionicons style={styles.icon}
                                    name='person-sharp'
                                    size={18}
                                    color={'#000000'}
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.input1} placeholder='Password' placeholderTextColor={'#000000'} />
                                <FontAwesome style={styles.icon}
                                    name='lock'
                                    size={18}
                                    color={'#000000'}
                                />
                                <Icon style={styles.icon1}
                                    name='eye'
                                    size={18}
                                    color={'#000000'}
                                />
                            </View>
                            <View style={{ marginLeft: 140 }}>
                                <Text style={{ fontSize: 12, fontWeight: 400 }}>Forget Password?</Text>
                            </View>
                            <View style={{ marginTop: 28 }}>
                                <Button onPress={() => navigation.navigate('Signup')}
                                    title="Login"
                                    buttonStyle={{ backgroundColor: '#EC2578', width: 255, height: 45, borderRadius: 4 }}
                                    titleStyle={{ fontSize: 17, fontWeight: 600 }}
                                />
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 12, fontWeight: 400, color: '#EC2578', marginTop: 15 }}>Or</Text>
                            </View>
                            <View style={styles.image}>
                                <View >
                                    <TouchableOpacity >
                                        <Image style={{ width: 32, height: 32, }} source={google} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginLeft: 18 }}>
                                    <TouchableOpacity >
                                        <Image style={{ width: 32, height: 32 }} source={facebook} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginTop: 20 }}></View>
                            </View>
                        </View>
                    </Card>
                </View>
                <View style={styles.container3}>
                    <View >
                        <Text style={styles.text1}>Don’t have an account?</Text>
                    </View>
                    <View>
                        <Text style={styles.text2}>REGISTER</Text>
                    </View>
                    <View style={{ marginTop: 34 }}></View>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        // margin: 5,
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
    login: {
        fontSize: 25,
        fontWeight: 700,
        alignItems: 'center',
    },
    input: {
        paddingStart: 38,
        height: 45,
        width: 255,
        fontSize: 12,
        borderRadius: 3,
        // fontWeight:400
    },
    input1: {
        paddingStart: 38,
        height: 45,
        width: 255,
        fontSize: 12,
        borderRadius: 3,
        backgroundColor: '#EDEDED',
        // fontWeight:400
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
    image: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    container3: {
        alignItems: 'center',
        marginTop: 425
    },
    text1: {
        fontSize: 14,
        fontWeight: 600,
    },
    text2: {
        fontSize: 17,
        fontWeight: 600,
        color: '#EC2578',
        marginTop: 12
    },
});