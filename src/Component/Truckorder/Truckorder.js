import { View, Text, StyleSheet, TextInput, SafeAreaView, Image, TouchableOpacity, ViewBase } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Frame from '../../Image/Frame.png'
import Photo4 from '../../Image/Photo4.png'

import { Button } from 'react-native-elements';

const Truckorder = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{ marginTop: 35 }}></View>
                <View style={{ marginLeft: 5 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Congrats')} >
                        <Ionicons name="chevron-back-sharp" size={25} color={'#000000'} />
                    </TouchableOpacity>             
                       </View>
                <View style={styles.container1}>
                    <View style={{ marginTop: 8, marginLeft: 15 }}>
                        <Text style={styles.text}>Track Order</Text>
                    </View>
                    <View style={styles.head}>
                        <View>
                            <Text style={styles.text1}>Order ID : 4544882266</Text>
                        </View>
                        <View>
                            <Text tyle={styles.text1}>Today</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.container2}>
                    <View style={{ alignItems: 'center', marginTop: 50 }}>
                        <Image source={Frame} />
                    </View>
                    <View style={styles.head1}>
                        <View>
                            <Text style={styles.text2}>04:30pm</Text>
                        </View>
                        <View>
                            <Text style={styles.text1}>Confirmed</Text>
                        </View>
                    </View>
                    <View style={styles.head2}>
                        <View>
                            <Text style={styles.text2}>04:38pm</Text>
                        </View>
                        <View>
                            <Text style={styles.text1}>Precessing</Text>
                        </View>
                    </View>
                    <View style={styles.head2}>
                        <View>
                            <Text style={styles.text2}>04:42pm</Text>
                        </View>
                        <View>
                            <Text style={styles.text1}>On the way</Text>
                        </View>
                    </View>
                    <View style={styles.head2}>
                        <View>
                            <Text style={styles.text3}>04:46pm</Text>
                        </View>
                        <View>
                            <Text style={styles.text4}>Deliverred</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 35 }}>
                        <Text style={styles.text5}>Order Track</Text>
                    </View>
                </View>
                <View style={styles.container3}>
                    <View>
                        <Image source={Photo4} style={styles.Photo4} />
                    </View>
                    <View style={{ marginTop: -72, marginLeft: 100 }}>
                        <Text style={styles.text6}>Mr Kemplas</Text>
                    </View>
                    <View style={{ marginTop: 8, marginLeft: 100 }}>
                        <Text style={styles.text3}>25 minutes on the way</Text>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 50 }}>
                        <Button onPress={() => navigation.navigate('Onboarding1')}
                            title="Call"
                            buttonStyle={{ backgroundColor: '#EC2578', width: 285, height: 46, borderRadius: 4 }}
                            titleStyle={{ fontSize: 17, fontWeight: 600 }}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FEFEFF',
    },
    text: {
        color: '#000000',
        fontSize: 25,
        fontWeight: 700,
        textAlign: 'left',
    },
    text1: {
        color: '#000000',
        fontSize: 14,
        fontWeight: 600,
        textAlign: 'center'
    },
    text2: {
        color: '#000000',
        fontSize: 12,
        fontWeight: 400,
        textAlign: 'center',
    },
    head: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 20
    },
    head1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 85,
        marginRight: 85,
        marginTop: -258
    },
    head2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 85,
        marginRight: 80,
        marginTop: 60
    },
    text3: {
        color: '#646464',
        fontSize: 12,
        fontWeight: 400
    },
    text4: {
        color: '#646464',
        fontSize: 14,
        fontWeight: 600
    },
    text5: {
        color: '#EC2578',
        fontSize: 21,
        fontWeight: 600,
        textAlign: 'center'
    },
    container3: {
        marginTop: 30,
        width: 355,
        height: 186,
        marginBottom: 10,
        borderWidth: 0.2,
        borderRadius: 4,
        margin: 20,
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        shadowColor: '#FFFFF',
        // alignItems: 'center',
        // backgroundColor: 'grey',
    },
    text6: {
        fontSize: 14,
        fontWeight: 600,
        color: '#09051C',
    },
    Photo4: {

        margin: 20
    }

});
export default Truckorder