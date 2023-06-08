import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Promo = () => {
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 45 }}></View>
            <View>
                <Text style={styles.text}>Order Complete</Text>
            </View>
            <View style={styles.container1}>
                <View>
                    <Text>What is your rate?</Text>
                </View>
                <View>
                    
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E5E5',
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        fontWeight: 700,
        color: '#EC2578',
        textAlign: 'center'
    },
    container1: {
        width: 375,
        height: 626,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#FFFFFF'
    }
});
export default Promo