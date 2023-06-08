import { View, Text, StyleSheet, TextInput, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';
import Photo1 from '../../Image/Photo1.png'
import Photo2 from '../../Image/Photo2.png'
import Photo3 from '../../Image/Photo3.png'
import homes from '../../Image/homes.png'
import basket from '../../Image/basket.png'
import user from '../../Image/user.png'
import chats from '../../Image/chats.png'

const Chat = ({navigation}) => {
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
                            <View>
                                <Text style={styles.time1}>18:00</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.text3}>Your order just arrived!</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.container3}>
                    <View style={styles.chat2}>
                        <View>
                            <Image source={Photo2} style={{ marginLeft: 10, alignItems: 'center' }} />
                        </View>
                        <View style={styles.head}>
                            <View>
                                <Text style={styles.text1}>hawkins</Text>
                            </View>
                            <View>
                                <Text style={styles.time2}>16:00</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.text3}>Your order just arrived!</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.container4}>
                    <View style={styles.chat3}>
                        <View>
                            <Image source={Photo3} style={{ marginLeft: 10, alignItems: 'center' }} />
                        </View>
                        <View style={styles.head}>
                            <View>
                                <Text style={styles.text1}>leslie Alexander</Text>
                            </View>
                            <View>
                                <Text style={styles.time3}>20:01</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.text3}>Your order just arrived!</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.container5}>
                    <View style={styles.appbar}>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('XBurger')}>
                                <Image source={homes} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Image source={user} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                                <Image source={basket} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('Chat1')}>
                                <Image source={chats} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 5 }}></View>
            </View>
        </SafeAreaView>
    )
}

export default Chat
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
    head: {
        flexDirection: 'row',

    },
    text1: {
        color: '#000000',
        fontSize: 14,
        fontWeight: 600,
        marginTop: -58,
        marginLeft: 86
    },
    time1: {
        color: '#646464',
        fontSize: 12,
        fontWeight: 400,
        marginLeft: 176,
        marginTop: -60,
    },
    text3: {
        color: '#646464',
        fontSize: 12,
        fontWeight: 400,
        marginLeft: 86,
        marginTop: -23,
    },
    container3: {
        alignItems: 'center',
        marginTop: 10,
    },
    chat2: {
        width: 355,
        height: 81,
        backgroundColor: '#FFFFFF',
        // backgroundColor: 'green',
        paddingTop: 15,
        paddingBottom: 15

    },
    time2: {
        color: '#646464',
        fontSize: 12,
        fontWeight: 400,
        marginLeft: 166,
        marginTop: -60,
    },
    container4: {
        alignItems: 'center',
        marginTop: 10,
    },
    chat3: {
        width: 355,
        height: 81,
        backgroundColor: '#FFFFFF',
        // backgroundColor: 'blue',
        paddingTop: 15,
        paddingBottom: 15

    },
    time3: {
        color: '#646464',
        fontSize: 12,
        fontWeight: 400,
        marginLeft: 120,
        marginTop: -60,
    },
    container5: {
        alignItems: 'center',
        marginTop: 230
    },
    appbar: {
        width: 365,
        height: 60,
        backgroundColor: '#EC2578',
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});