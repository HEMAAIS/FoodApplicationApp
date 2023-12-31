import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import React from 'react'
import Group2 from '../../Image/Group2.png'
import { Button } from 'react-native-elements';


export default function Onboarding3({navigation}) {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{ marginTop: 45 }}></View>
                <View>
                    <Image source={Group2} style={styles.Group2} />
                </View>
                <View style={styles.container1}>
                    <View style={{ marginTop: 12 }}>
                        <Text style={styles.text}>Foodie is Where Your {'\n'}Comfort Food Resides</Text>
                    </View>
                    <View >
                        <Text style={styles.text1}>Enjoy a fast and smooth food delivery at  {'\n'} your doorstep</Text>
                    </View>
                </View>
                <View style={styles.container2}>
                    <View style={{ marginTop: 110 }}>
                        <Button onPress={() => navigation.navigate('Login')}
                            title="Next"
                            buttonStyle={{ backgroundColor: '#EC2578', width: 158, height: 50, borderRadius: 4 }}
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
        alignItems: 'center'
    },
    Group2: {
        width: 360,
        height: 360
    },
    container1: {
        alignItems: 'center',
    },
    text: {
        color: '#000000',
        fontSize: 25,
        fontWeight: 700,
        textAlign: 'center',
        padding: 10
    },
    text1: {
        fontSize: 12,
        color: '#646464',
        fontWeight: 400,
        textAlign: 'center'
    },
    container2: {
        justifyContent: 'center',
        alignItems: 'center',
    },

});