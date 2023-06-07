import { View, Text, StyleSheet, TextInput, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';
import Photo1 from '../../Image/Photo1.png'
import phone from '../../Image/phone.png'
import { Divider} from 'react-native-paper';
import Photo2 from '../../Image/Photo2.png'
import Photo3 from '../../Image/Photo3.png'
import homes from '../../Image/homes.png'
import basket from '../../Image/basket.png'
import user from '../../Image/user.png'
import chats from '../../Image/chats.png'

const Chat1 = () => {
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
                            <Image source={phone} style={{ marginTop:-55,marginLeft:313 }} />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.text3}>Online</Text>
                        </View>
                    </View>
                </View>
                <Divider style={{width:355,height:1,alignItems:'center'}}/>
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
});