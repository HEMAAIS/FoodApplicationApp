import { View, Text, StyleSheet, TextInput, SafeAreaView ,TouchableOpacity} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';


export default function SignupProcess({ navigation }) {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{ marginTop: 45 }}></View>
                <View style={{ marginLeft: 5 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')} >
                        <Ionicons name="chevron-back-sharp" size={25} color={'#000000'} />
                    </TouchableOpacity>              
                      </View>
                <View style={styles.container1}>
                    <View style={{ marginTop: 25 }}>
                        <Text style={styles.text}>Fill in your bio to {'\n'}get started</Text>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={styles.text1}>This data will be displayed in your {'\n'}account profile for security</Text>
                    </View>
                </View>
                <View style={styles.container2}>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input1} placeholder='Full Name' placeholderTextColor={'#000000'} />
                        <Ionicons style={styles.icon}
                            name='person-sharp'
                            size={22}
                            color={'#000000'}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input1} placeholder='Country' placeholderTextColor={'#000000'} />
                        <AntDesign style={styles.icon}
                            name='earth'
                            size={22}
                            color={'#000000'}
                        />
                        <AntDesign style={styles.icon1}
                            name='caretdown'
                            size={15}
                            color={'#000000'}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input1} placeholder='Mobile Number' placeholderTextColor={'#000000'} />
                        <Icon style={styles.icon}
                            name='phone'
                            size={22}
                            color={'#000000'}
                        />
                    </View>
                </View>
                <View style={styles.container3}>
                    <View >
                        <Button onPress={() => navigation.navigate('PaymentMethod')}
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
        marginTop: 70,
        alignItems: 'center',
    },
    input1: {
        paddingStart: 40,
        height: 45,
        width: 315,
        fontSize: 12,
        borderRadius: 3,
        backgroundColor: '#EDEDED',
        // fontWeight: 400
    },
    inputContainer: {
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    icon: {
        position: 'absolute',
        left: 10,
    },
    icon1: {
        position: 'absolute',
        right: 15,
    },
    container3: {
        alignItems: 'center',
        marginTop: 175
    }

});