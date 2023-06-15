import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';
import preview from '../../Image/preview.png'


export default function UploadPreview({ navigation }) {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{ marginTop: 45 }}></View>
                <View style={{ marginLeft: 5 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('UploadPhoto')} >
                        <Ionicons name="chevron-back-sharp" size={25} color={'#000000'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.container1}>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.text}>Upload your photo{'\n'} profile</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.text1}>This data will be displayed in your {'\n'}account profile for security</Text>
                    </View>
                </View>
                <View style={styles.container2}>
                    <View>
                        <Image source={preview} />
                    </View>
                    <View>
                        <Text style={styles.text2}>Replace or edit image</Text>
                    </View>
                </View>
                <View style={styles.container3}>
                    <View >
                        <Button onPress={() => navigation.navigate('SetLocation')}
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
        marginTop: 45
    },
    text2: {
        fontSize: 12,
        color: '#EC2578',
        fontWeight: 400,
        textAlign: 'center',
    },
    container3: {
        alignItems: 'center',
        marginTop: 95
    }
});