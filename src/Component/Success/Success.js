import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import React from 'react'
import round from '../../Image/round.png'
import { Button } from 'react-native-elements';

export default function Success({navigation}) {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{ marginTop: 45 }}></View>
                <View style={{ marginTop: 100 }}>
                    <Image source={round} style={styles.round} />
                </View>
                <View style={styles.container1}>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.text}>Congrats!</Text>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={styles.text1}>Your Profile Is Ready To Use</Text>
                    </View>
                </View>
                <View style={styles.container2}>
                    <View >
                        <Button onPress={() => navigation.navigate('Home')}
                            title="Try Order"
                            buttonStyle={{ backgroundColor: '#EC2578', width: 315, height: 50, borderRadius: 4 }}
                            titleStyle={{ fontSize: 17, fontWeight: 600 }}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 34 }}></View>
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        margin: 5,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    round: {
        width: 172,
        height: 162,
    },
    container1: {
        alignItems: 'center',
    },
    text: {
        color: '#EC2578',
        fontSize: 30,
        fontWeight: 700,
        textAlign: 'center',

    },
    text1: {
        fontSize: 21,
        color: '#09051C',
        fontWeight: 600,
        textAlign: 'center'
    },
    container2: {
        marginTop: 250,
        alignItems: 'center',
    },

});