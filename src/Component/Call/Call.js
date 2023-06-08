import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import call from '../../Image/call.png'
import v1 from '../../Image/v1.png'
import v2 from '../../Image/v2.png'
import v3 from '../../Image/v3.png'
import end from '../../Image/end.png'

const Call = ({navigation}) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Chat')} >
                    <View>
                        <Image source={call} style={styles.call} />
                    </View>
                </TouchableOpacity>
                <View style={styles.container3}>
                    <View style={styles.appbar}>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('CallRinging')}>
                                <Image source={v1} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('CallRinging')}>
                                <Image source={v3} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('CallRinging')}>
                                <Image source={v2} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                                <Image source={end} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 34 }}></View>
            </View>
        </SafeAreaView>
    )
}

export default Call
const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    container3:{
marginTop:15
    },
    appbar: {
        width: 375,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

});