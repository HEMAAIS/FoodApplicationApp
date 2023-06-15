import { View, Text, StyleSheet, TextInput,TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';
import paypal from '../../Image/paypal.png'
import payoneer from '../../Image/payoneer.png'
import visa from '../../Image/visa.png'

export default function PaymentMethod({ navigation }) {
    return (

        <SafeAreaView>
            <View style={styles.container}>
                <View style={{ marginTop: 45 }}></View>
                <View style={{ marginLeft: 5 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignupProcess')} >
                        <Ionicons name="chevron-back-sharp" size={25} color={'#000000'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.container1}>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.text}>Payment Method</Text>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Text style={styles.text1}>This data will be displayed in your {'\n'}account profile for security</Text>
                    </View>
                </View>
                <View style={styles.container2}>
                    <View style={{ marginTop: 10 }}>
                        <Image source={paypal} style={styles.paypal} />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Image source={visa} style={styles.visa} />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Image source={payoneer} style={styles.payoneer} />
                    </View >
                </View>
                <View style={styles.container3}>
                    <View >
                        <Button onPress={() => navigation.navigate('UploadPhoto')}
                            title="Next"
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
        backgroundColor: '#FFFFFF',
    },
    container1: {
        alignItems: 'center',
    },
    text: {
        color: '#000000',
        fontSize: 30,
        fontWeight: 700,
        textAlign: 'center',
    },
    text1: {
        fontSize: 14,
        color: '#646464',
        fontWeight: 400,
        textAlign: 'center',
    },
    container2: {
        alignItems: 'center',
        marginTop: 25
    },
    container3: {
        alignItems: 'center',
        marginTop: 110
    }
});