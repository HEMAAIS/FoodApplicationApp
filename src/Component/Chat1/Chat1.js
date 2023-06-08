import { View, Text, StyleSheet, TextInput, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { Button } from 'react-native-elements';
import Photo1 from '../../Image/Photo1.png'
import phone from '../../Image/phone.png'
import { Divider } from 'react-native-paper';
import Photo2 from '../../Image/Photo2.png'
import Photo3 from '../../Image/Photo3.png'
import homes from '../../Image/homes.png'
import basket from '../../Image/basket.png'
import user from '../../Image/user.png'
import chats from '../../Image/chats.png'

const Chat1 = ({navigation}) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{ marginTop: 45 }}></View>
                <View style={{ marginLeft: 5 }}>
                    <Ionicons name="chevron-back-sharp" size={25} color={'#000000'} />
                </View>
                <View style={styles.container1}>
                    <View style={{ marginTop: 20, marginLeft: 15 }}>
                        <Text style={styles.text}>Chat</Text>
                    </View>
                </View>
                <View style={styles.container2}>
                    <View style={styles.chat1}>
                        <TouchableOpacity onPress={() => navigation.navigate('Chat1')}>
                            <View>
                                <Image source={Photo1} style={{ marginLeft: 10, alignItems: 'center' }} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.head}>
                            <View>
                                <Text style={styles.text1}>Naxient</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('CallRinging')}>
                                <View>
                                    <Image source={phone} style={{ marginTop: -55, marginLeft: 313 }} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.text3}>Online</Text>
                        </View>
                    </View>
                </View>
                <Divider style={{ width: 355, height: 1, marginLeft: 20, marginTop: 10 }} />
                <View style={styles.container3}>
                    <View style={{ marginLeft: 8, padding: 10 }}>
                        <TextInput style={styles.input} placeholder='Just to order' placeholderTextColor={'#000000'} />
                    </View>
                    <View style={{ marginLeft: 103, padding: 10 }}>
                        <TextInput style={styles.input1} placeholder='Okay, for what level of spiciness?' placeholderTextColor={'#000000'} />
                    </View>
                    <View style={{ marginLeft: 8, padding: 10 }}>
                        <TextInput style={styles.input2} placeholder='Okay, wait a minute 👍' placeholderTextColor={'#000000'} />
                    </View>
                    <View style={{ marginLeft: 185, padding: 10 }}>
                        <TextInput style={styles.input3} placeholder='Okay Iam waiting  👍' placeholderTextColor={'#000000'} />
                    </View>
                </View>
                <View style={styles.container4}>
                    <View style={{ marginLeft: 8 }}>
                        <TextInput placeholder='Send message...' placeholderTextColor={'#646464'} />
                    </View>
                    <View style={{ marginLeft: 208 }}>
                        <Feather name="send" size={25} color={'#EC2578'} />
                    </View>
                </View>
                <View style={{ marginTop: 34 }}></View>
            </View>
        </SafeAreaView>
    )
}

export default Chat1
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
    },
    container1: {
        // alignItems: 'center',
    },
    text: {
        color: '#000000',
        fontSize: 25,
        fontWeight: 700,
        textAlign: 'left',
    },
    container2: {
        alignItems: 'center',
        marginTop: 50,
    },
    chat1: {
        width: 365,
        height: 81,
        backgroundColor: '#FFFFFF',
        // backgroundColor: 'red',
        paddingTop: 15,
        paddingBottom: 15

    },
    // head: {
    //     flexDirection: 'row',
    // },
    text1: {
        color: '#000000',
        fontSize: 14,
        fontWeight: 600,
        marginTop: -58,
        marginLeft: 86
    },

    text3: {
        color: '#646464',
        fontSize: 12,
        fontWeight: 400,
        marginLeft: 86,
        marginTop: -23,
    },
    container3: {
        margin: 10,
        // backgroundColor: 'red'
    },
    input: {

        height: 41,
        width: 118.22,
        fontSize: 12,
        borderRadius: 13,
        backgroundColor: '#EDEDED',
        padding: 10
    },
    input1: {
        height: 41,
        width: 242.85,
        fontSize: 12,
        borderRadius: 13,
        backgroundColor: '#EDEDED',
        padding: 10
    },
    input2: {
        height: 41,
        width: 169.54,
        fontSize: 12,
        borderRadius: 13,
        backgroundColor: '#EDEDED',
        padding: 10
    },
    input3: {
        height: 41,
        width: 160.37,
        fontSize: 12,
        borderRadius: 13,
        backgroundColor: '#EDEDED',
        padding: 10
    },
    container4: {
        margin: 10,
        marginTop: 125,
        flexDirection: 'row',
        alignItems: 'center'
    },
});