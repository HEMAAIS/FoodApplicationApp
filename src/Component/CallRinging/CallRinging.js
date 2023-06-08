import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import ring from '../../Image/ring.png'
import end from '../../Image/end.png'
import speaker from '../../Image/speaker.png'
import msg from '../../Image/msg.png'


const CallRinging = ({navigation}) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{ marginTop: 45 }}></View>
                <View style={styles.container1}>
                    <View style={{ marginTop: 60 }}>
                        <Text style={styles.text}>Outgoing call</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Call')} >
                        <View style={{ marginTop: 50 }}>
                            <Image source={ring} style={styles.ring} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ marginTop: 58 }}>
                        <Text style={styles.text1}>leslie Alexander</Text>
                    </View>
                </View>
                <View style={styles.container3}>
                    <View style={styles.appbar}>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                                <Image source={end} /><Text style={styles.input}>End</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity >
                                <Image source={speaker} /><Text style={styles.input}>Speaker</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                                <Image source={msg} /><Text style={styles.input}>Message</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                <View style={{ marginTop: 34 }}></View>
            </View>
        </SafeAreaView >
    )
}

export default CallRinging
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#FFEEDA'
    },
    container1: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFEEDA'

    },
    text: {
        fontSize: 14,
        fontWeight: 600,
        color: '#646464'
    },
    text1: {
        fontSize: 21,
        fontWeight: 600,
        color: '#000000'
    },
    container3: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFEEDA',
        marginTop: 190,

    },
    appbar: {
        width: 375,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    input: {
        fontSize: 17,
        fontWeight: 600,
        color: '#000000',
        textAlign: 'center',
        marginTop: 5
    }
});