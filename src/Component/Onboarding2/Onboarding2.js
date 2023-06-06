import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Group1 from '../../Image/Group1.png'


export default function Onboarding2({ navigation }) {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{ marginTop: 45 }}></View>
                <TouchableOpacity onPress={() => navigation.navigate('Onboarding3')} >
                    <View>
                        <Image source={Group1} style={styles.Group1} />
                    </View>
                </TouchableOpacity>
                <View style={styles.container1}>
                    <View style={{ marginTop: 35 }}>
                        <Text style={styles.text}>Track your Comfort {'\n'} Food here</Text>
                    </View>
                    <View >
                        <Text style={styles.text1}>Here You Can find a chef or dish for every {'\n'} taste and color. Enjoy!</Text>
                    </View>
                    <View style={{ marginTop: 150 }}></View>
                </View>
            </View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        margin: 5,
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },
    Group1: {
        width: 370,
        height: 370
    },
    container1: {
        backgroundColor: '#FFFFFF',

        alignItems: 'center'
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