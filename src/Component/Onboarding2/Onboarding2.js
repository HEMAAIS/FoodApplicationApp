import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Group1 from '../../Image/Group1.png'

export default function Onboarding2() {
    return (
        <View style={styles.container}>
            <View>
                <Image source={Group1} style={styles.Group1} />
            </View>
            <View style={styles.container1}>
                <View >
                    <Text style={styles.text}>Track your Comfort {'\n'} Food here</Text>
                </View>
                <View>
                    <Text style={styles.text1}>Here You Can find a chef or dish for every {'\n'} taste and color. Enjoy!</Text>
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffff'
    },
    Group1: {
        width: 390,
        height: 415
    },
    container1: {
        flex: 2,
        alignItems: 'center',
        marginTop:20
    },
    text: {
        color: '#000000',
        fontSize: 25,
        fontWeight: 700,
        textAlign: 'center',
        padding: 10,
    },
    text1: {
        fontSize: 12,
        color: '#646464',
        fontWeight: 400,
        textAlign: 'center',
    }
});