import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Group2 from '../../Image/Group2.png'
import { Button } from 'react-native-elements';


export default function Onboarding3() {
    return (
        <View style={styles.container}>
            <View>
                <Image source={Group2} style={styles.Group2} />
            </View>
            <View style={styles.container1}>
                <View >
                    <Text style={styles.text}>Foodie is Where  {'\n'} Your Comfort Food Resides</Text>
                </View>
                <View>
                    <Text style={styles.text1}>Enjoy a fast and smooth food delivery at  {'\n'} your doorstep</Text>
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.buttons}>
                    <Button
                        title="Next"
                        buttonStyle={{ backgroundColor: '#EC2578', width: 158, height: 50,borderRadius:4 }}
                        titleStyle={{ fontSize: 17, fontWeight: 600 }}
                    />
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    Group2: {
        width: 380,
        height: 374
    },
    container1: {
        flex: 2,
        alignItems: 'center',
        marginTop: 20
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
    container2:{
   justifyContent:'center',
   alignItems:'center',

    },
    buttons:{
        marginTop:-125,

    }
});