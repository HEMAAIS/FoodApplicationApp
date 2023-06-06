import { View, Text, StyleSheet, TextInput, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';
import Group from '../../Image/Group.png';
import { Card } from 'react-native-paper'

export default function UploadPhoto({navigation}) {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{ marginTop: 45 }}></View>
                <View style={{ marginLeft: 5 }}>
                    <Ionicons name="chevron-back-sharp" size={25} color={'#000000'} />
                </View>
                <View style={styles.container1}>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.text}>Upload your photo{'\n'} profile</Text>
                    </View>
                </View>

                <View style={styles.container2}>
                    <View>
                        <Image source={Group} style={styles.Group} />
                    </View>
                    <Card style={{ height: 275, width: 315, borderRadius: 20, backgroundColor: '#FFFFFF', marginTop: -48 }}>
                        <View style={{ alignItems: 'center', marginTop: 30 }}>
                            <Text style={styles.text1}>Organize your {'\n'} file easily</Text>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text style={styles.text2}>This data will be displayed in your {'\n'}account profile for security</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 53 }}>
                            <Button
                                title="Select Photo"
                                buttonStyle={{ width: 185, height: 50, borderRadius: 4, borderColor: '#EC2578', backgroundColor: '#FFFFFF', borderWidth: 1 }}
                                titleStyle={{ fontSize: 17, fontWeight: 600, color: '#EC2578' }}
                            />
                        </View>
                    </Card>
                </View>
                <View style={styles.container3}>
                    <View >
                        <Button onPress={() => navigation.navigate('UploadPreview')}
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
    Group: {
        marginTop: 50,
        marginLeft: 200
    },
    container2: {
        alignItems: 'center',

    },
    text1: {
        textAlign: 'center',
        fontSize: 21,
        fontWeight: 600
    },
    text2: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 400
    },
    container3: {
        alignItems: 'center',
        marginTop:100
    }
});